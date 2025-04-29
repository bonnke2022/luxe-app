"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  createAndEditItemSchema,
  CreateAndEditItemType,
  DimensionA,
  DimensionB,
  FitType,
  ItemCategory,
  Material,
  Occasion,
  Size,
} from "@/utils/types";
import { Form } from "./ui/form";
import {
  CustomFormField,
  CustomFormSelect,
  CustomTextArea,
} from "./FormComponents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createItemAction } from "@/lib/action";
import { toast } from "sonner";
import { CldUploadWidget } from "next-cloudinary";

export type CloudinaryUploadResults = {
  event?: string;
  info?: { secure_url?: string } | string;
};

const ItemForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditItemType) => createItemAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast("there was an error");
        return;
      }
      toast("item created");
      queryClient.invalidateQueries({ queryKey: ["items"] });
      router.push("/items");
    },
  });

  // 1. Define your form.
  const form = useForm<CreateAndEditItemType>({
    resolver: zodResolver(createAndEditItemSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      image: "",
      colors: "",
      occasion: Occasion.Casual,
      category: ItemCategory.Shirts,
      fitType: FitType.Regular,
      material: Material.Polyester,
      size: Size.Small,
      dimensionA: DimensionA.Twelve,
      dimensionB: DimensionB.SizeA,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: CreateAndEditItemType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add item</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            options={{ sources: ["local", "camera"] }}
            onSuccess={(result: CloudinaryUploadResults) => {
              if (
                result?.event === "success" &&
                typeof result.info === "object" &&
                result.info?.secure_url
              ) {
                const imageUrl = result.info.secure_url;
                form.setValue("image", imageUrl);
                toast("Image uploaded successfully");
              }
            }}
            onError={(error) => {
              console.error("Upload Error: ", error);
              toast("Failed to upload image.");
            }}
          >
            {({ open }) => {
              return (
                <div className="w-full">
                  <p>Image</p>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      if (open) open();
                      else toast("upload widget not ready yet...");
                    }}
                    variant="outline"
                    className="w-full cursor-pointer"
                  >
                    Upload an Image
                  </Button>
                </div>
              );
            }}
          </CldUploadWidget>
          <CustomFormField name="title" control={form.control} />
          <CustomTextArea name="description" control={form.control} />
          <CustomFormField name="colors" control={form.control} />
          <CustomFormField name="price" control={form.control} />
          <CustomFormSelect
            name="category"
            control={form.control}
            labelText="Categories"
            items={Object.values(ItemCategory)}
          />
          <CustomFormSelect
            name="occasion"
            control={form.control}
            labelText="Occasion"
            items={Object.values(Occasion)}
          />
          <CustomFormSelect
            name="fitType"
            control={form.control}
            labelText="Fit Type"
            items={Object.values(FitType)}
          />
          <CustomFormSelect
            name="material"
            control={form.control}
            labelText="Material"
            items={Object.values(Material)}
          />
          <CustomFormSelect
            name="size"
            control={form.control}
            labelText="Size"
            items={Object.values(Size)}
          />
          <CustomFormSelect
            name="dimensionA"
            control={form.control}
            labelText="Dimension A"
            items={Object.values(DimensionA)}
          />
          <CustomFormSelect
            name="dimensionB"
            control={form.control}
            labelText="DimensionB"
            items={Object.values(DimensionB)}
          />
          <Button
            type="submit"
            className="self-end capitalize cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "loading..." : "create item"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ItemForm;
