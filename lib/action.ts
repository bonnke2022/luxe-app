"use server";
import { createAndEditItemSchema, CreateAndEditItemType } from "@/utils/types";
import prisma from "./db";
import { Item, Prisma } from "@/lib/generated/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type PublicItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  colors: string;
  occasion: string;
  fitType: string;
  material: string;
  size: string;
  dimensionA: string;
  dimensionB: string;
  category: string;
};

export async function createItemAction(
  values: CreateAndEditItemType
): Promise<Item | null> {
  try {
    createAndEditItemSchema.parse(values);
    const item = await prisma.item.create({
      data: {
        ...values,
        title: values.title,
        description: values.description,
        colors: values.colors,
        image: values.image,
        price: Number(values.price),
        occasion: values.occasion,
        fitType: values.fitType,
        material: values.material,
        size: values.size,
        dimensionA: values.dimensionA,
        dimensionB: values.dimensionB,
        category: values.category,
      },
    });
    revalidatePath("/items");
    return item;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// export type GetAllItemsAction = {
//   search?: string;
//   page?: number;
//   limit?: number;
// };

export async function GetAllItemsAction(
  search: string,
  sort: string
): Promise<PublicItem[]> {
  try {
    let orderBy: Prisma.ItemOrderByWithRelationInput;

    switch (sort) {
      case "alphabetical":
        orderBy = { title: "asc" };
        break;
      case "price_low_to_high":
        orderBy = { price: "asc" };
        break;
      case "price_high_to_low":
        orderBy = { price: "desc" };
        break;
      case "latest":
        orderBy = { createdAt: "desc" };
        break;
      default:
        orderBy = { title: "asc" }; // default sort
    }

    const items: PublicItem[] = await prisma.item.findMany({
      where: search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
              { category: { contains: search, mode: "insensitive" } },
              { material: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      orderBy,
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        price: true,
        colors: true,
        occasion: true,
        fitType: true,
        material: true,
        size: true,
        dimensionA: true,
        dimensionB: true,
        category: true,
        createdAt: true,
      },
    });

    return items;
  } catch (error) {
    console.error("Error fetching items: ", error);
    return [];
  }
}

export async function GetSingleItemAction(
  id: number
): Promise<PublicItem | null> {
  let item: PublicItem | null = null;
  try {
    item = await prisma.item.findUnique({
      where: { id: Number(id) },
    });
  } catch (error) {
    console.error(error);
    item = null;
  }
  if (!item) {
    redirect("/items");
  }
  return item;
}

export async function deleteBoardAction(
  id: number
): Promise<PublicItem | null> {
  try {
    const item: PublicItem = await prisma.item.delete({
      where: {
        id: Number(id),
      },
    });
    return item;
  } catch (error) {
    console.error(error);
    return null;
  }
}
