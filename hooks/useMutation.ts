// hooks/useCheckout.ts
import { useMutation } from "@tanstack/react-query";

export const useCheckout = () => {
  return useMutation({
    mutationFn: async (cartItems: any[]) => {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Checkout failed");
      }

      return res.json();
    },
  });
};
