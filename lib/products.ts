import { StaticImageData } from "next/image";
import Gown from "@/items/gown-oxblood.jpeg";
import Jacket from "@/items/jacket-joggers-ash.jpeg";
import ShortGown from "@/items/short-gown-skyblue.jpeg";
import Pjshorts from "@/items/pjshorts-black.jpeg";
import Pj from "@/items/pj-black.jpeg";
import Singlet from "@/items/singlet-blue-white.jpeg";
import Top from "@/items/top-trouser.jpeg";
import Match from "@/items/match-black.jpeg";
import Skirt from "@/items/jacket-skirt-black.jpeg";
import A1 from "@/items/a1.jpeg";

export type ProductProps = {
  id: number;
  title: string;
  featured: boolean;
  image: string | StaticImageData;
  price: number;
  shipping: boolean;
};

export const products: ProductProps[] = [
  {
    id: 1,
    title: "Lady in a Dress",
    featured: true,
    image: Gown,
    price: 500,
    shipping: true,
  },
  {
    id: 2,
    title: "Jacket and Joggers",
    featured: true,
    image: Jacket,
    price: 500,
    shipping: true,
  },
  {
    id: 3,
    title: "Club Wears",
    featured: true,
    image: ShortGown,
    price: 500,
    shipping: true,
  },
  {
    id: 4,
    title: "Sexy PJs",
    featured: true,
    image: Pjshorts,
    price: 500,
    shipping: true,
  },
  {
    id: 5,
    title: "Night Wears",
    featured: true,
    image: Pj,
    price: 500,
    shipping: true,
  },
  {
    id: 6,
    title: "Baby girl wears",
    featured: true,
    image: Singlet,
    price: 500,
    shipping: true,
  },
  {
    id: 7,
    title: "Outing Outfit",
    featured: true,
    image: Top,
    price: 500,
    shipping: false,
  },
  {
    id: 8,
    title: "Matching Fits",
    featured: true,
    image: Match,
    price: 500,
    shipping: false,
  },
  {
    id: 9,
    title: "Jacket and Skirt",
    featured: true,
    image: Skirt,
    price: 500,
    shipping: false,
  },
  {
    id: 10,
    title: "A-level grade",
    featured: true,
    image: A1,
    price: 500,
    shipping: false,
  },
];
