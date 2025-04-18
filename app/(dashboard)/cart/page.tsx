import Cart from "@/components/Cart";
import ContactImg from "@/assets/medium-shot-boy-posing-with-monochrome-outfit.jpg";
import Landing from "@/components/Landing";

const CartPage = () => {
  return (
    <>
      <Landing pic={ContactImg} alt="cart" text="Checkout" />
      <Cart />
    </>
  );
};

export default CartPage;
