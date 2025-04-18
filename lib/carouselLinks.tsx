"use client";
import CloseUp from "@/assets/closeup-two-pretty.jpg";
import TwoGirls from "@/assets/two-girls.jpg";
import { StaticImageData } from "next/image";
import { Layers, AppWindow } from "lucide-react";
import { ReactNode } from "react";

export type SlideProps = {
  id: number;
  image: string | StaticImageData;
  text: string;
  title: string;
  year: number;
};

export const slides: SlideProps[] = [
  {
    id: 1,
    image: CloseUp,
    text: "couples' sale | up to 20% off",
    title: "Couples' collection",
    year: 2019,
  },

  {
    id: 2,
    image: TwoGirls,
    text: "Girls' sale | up to 40% off",
    title: "Girls' Collection",
    year: 2024,
  },
];

export type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about",
    label: "about us",
  },
  {
    href: "/shop",
    label: "shop",
  },
  {
    href: "/contact",
    label: "contact",
  },
  {
    href: "/admin",
    label: "admin",
  },
];

export const formatPrice = (price: number) => {
  const formatPrice = (price / 100).toFixed(2);
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(formatPrice));
  return dollarAmount;
};

export const generateAmountOptions = (number: number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export type NavProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export const navs = [
  { href: "/admin", label: "add item", icon: <Layers /> },
  { href: "/items", label: "items", icon: <AppWindow /> },
];
