import ItemForm from "@/components/ItemForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const AdminPage = () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemForm />
    </HydrationBoundary>
  );
};

export default AdminPage;
