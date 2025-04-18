import AboutUs from "@/components/AboutUs";
import ClientOnlySection from "@/components/ClientOnlySection";
import LandingPage from "@/components/LandingPage";
import { GetAllItemsAction } from "@/lib/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";
import LoadingThreeDotsJumping from "@/app/loading";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction("", ""),
  });
  return (
    <Suspense fallback={<LoadingThreeDotsJumping />}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LandingPage />
        <ClientOnlySection />
        <AboutUs />
      </HydrationBoundary>
    </Suspense>
  );
};

export default HomePage;
