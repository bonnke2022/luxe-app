import { GetAllItemsAction } from "@/lib/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import FeaturedProducts from "./FeaturedProducts";
import SaleDetails from "./SaleDetails";

const ClientOnlySection = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction("", ""),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeaturedProducts />
      <SaleDetails />
    </HydrationBoundary>
  );
};

export default ClientOnlySection;
