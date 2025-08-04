import Cart from "@/components/Cart";
import ContactImg from "@/assets/medium-shot-boy-posing-with-monochrome-outfit.jpg";
import Landing from "@/components/Landing";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <>
      <Landing pic={ContactImg} alt="cart" text="Checkout" />
      <Cart />
    </>
  );
};

export default CartPage;
