import SingleItem from "@/components/SingleItem";
import { GetSingleItemAction } from "@/lib/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const SingleItemPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["singleItem", id],
    queryFn: () => GetSingleItemAction(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleItem id={id} cart="" />
    </HydrationBoundary>
  );
};

export default SingleItemPage;
