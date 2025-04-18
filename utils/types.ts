import { StaticImageData } from "next/image";
import * as z from "zod";

export type ItemType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  price: number;
  colors: string;
  description: string;
  image: string | StaticImageData;
  occasion: string;
  fitType: string;
  material: string;
  size: string;
  dimensionA: string;
  dimensionB: string;
  category: string;
};

export enum ItemCategory {
  Accessories = "Accessories",
  Bags = "Bags",
  Shoes = "Shoes",
  HatsAndCaps = "Hats and Caps",
  Shirts = "Shirts",
  Trousers = "Trousers",
  Pajamas = "Pajamas",
  Gowns = "Gowns",
}

export enum Occasion {
  Casual = "Casual",
  Formal = "Formal",
  SemiFormal = "Semi-Formal",
  BlackTie = "Black Tie",
  Party = "Party",
  Wedding = "Wedding",
  BeachWear = "Beach Wear",
  Winter = "Winter",
  Traditional = "Traditional",
}

export enum FitType {
  Regular = "Regular",
  SlimFit = "Slim Fit",
  LooseFit = "Loose Fit",
  FitAndFlare = "Fit and Flare",
  StraightFit = "Straight Fit",
  DrapedFit = "Draped Fit",
}

export enum Material {
  Nil = "Nil",
  Cotton = "Cotton",
  Linen = "Linen",
  Silk = "Silk",
  Wool = "Wool",
  Denim = "Denim",
  Polyester = "Polyester",
  Spandex = "Spandex",
  Acrylic = "Acrylic",
  Rayon = "Rayon",
  Nylon = "Nylon",
}

export enum Size {
  Nil = "Nil",
  Small = "Small",
  Medium = "Medium",
  Large = "L",
  ExtraLarge = "XL",
  All = "All",
}

export enum DimensionA {
  Nil = "Nil",
  Twelve = "12cm",
  ThirteenFive = "13.5cm",
  Fifteen = "15cm",
  SixteenFive = "16.5cm",
  All = "All",
}

export enum DimensionB {
  Nil = "Nil",
  SizeA = "38-41cm",
  SizeB = "41-43cm",
  SizeC = "43-45cm",
  SizeD = "45-47cm",
  All = "All",
}

export const createAndEditItemSchema = z.object({
  title: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  price: z.preprocess((val) => Number(val), z.number()),
  description: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  colors: z.string().min(2, "What colors are available?"),
  image: z.string().url(),
  occasion: z.nativeEnum(Occasion),
  fitType: z.nativeEnum(FitType),
  material: z.nativeEnum(Material),
  size: z.nativeEnum(Size),
  dimensionA: z.nativeEnum(DimensionA),
  dimensionB: z.nativeEnum(DimensionB),
  category: z.nativeEnum(ItemCategory),
});

export type CreateAndEditItemType = z.infer<typeof createAndEditItemSchema>;
