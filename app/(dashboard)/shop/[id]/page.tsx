import Landing from "@/components/Landing";
import SingleItem from "@/components/SingleItem";
import { GetSingleItemAction } from "@/lib/action";
import ContactImg from "@/assets/black-and-white-girl-woman-white-photography-time-495601-pxhere.com.jpg";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import DirectItem from "@/components/DirectItem";

const ShopItem = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["singleItem", id],
    queryFn: () => GetSingleItemAction(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Landing pic={ContactImg} alt="contact" text="Shop" />
      <main className="flex flex-col items-center py-20 gap-20">
        <DirectItem />
        <SingleItem id={id} cart="Add to Cart" />
      </main>
    </HydrationBoundary>
  );
};

export default ShopItem;
