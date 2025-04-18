import Landing from "@/components/Landing";
import ShopList from "@/components/ShopList";
import ContactImg from "@/assets/black-and-white-girl-woman-white-photography-time-495601-pxhere.com.jpg";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { GetAllItemsAction } from "@/lib/action";

const ShopPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction("", ""),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Landing pic={ContactImg} alt="contact" text="Shop With Us" />
      <ShopList />
    </HydrationBoundary>
  );
};

export default ShopPage;
