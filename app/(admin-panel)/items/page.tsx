import ItemsList from "@/components/ItemsList";
import SearchForm from "@/components/SearchForm";
import { GetAllItemsAction } from "@/lib/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function ItemsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction("", ""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <ItemsList />
    </HydrationBoundary>
  );
}

export default ItemsPage;
