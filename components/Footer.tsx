"use client";
import { Smartphone, Mail, ChevronUp } from "lucide-react";
import Link from "next/link";
import Visa from "@/assets/visa-svgrepo-com.svg";
import MasterCard from "@/assets/mastercard-4-logo-svgrepo-com.svg";
import Express from "@/assets/amex-svgrepo-com.svg";
import Paypal from "@/assets/paypal-logo-svgrepo-com.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FFE4E1] w-full flex flex-col items-center pt-35 gap-30">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-6 justify-center items-center">
        <div className="flex flex-col items-center md:items-start gap-6">
          <Link href="/" className="text-2xl lg:text-3xl">
            <h1 className="font-bold whitespace-nowrap">Luxe By Deba</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Smartphone className="w-7 h-7" />
            <p className="text-xl">+234 8104312163</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-7 h-7" />
            <p className="text-md">bonnkeomorehiomwan@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={Visa}
              alt="visa"
              className="w-15 h-15"
              width={20}
              height={20}
              unoptimized
              priority={false}
              loading="lazy"
            />
            <Image
              src={MasterCard}
              alt="master card"
              className="w-15 h-15"
              width={20}
              height={20}
              unoptimized
              priority={false}
              loading="lazy"
            />
            <Image
              src={Express}
              alt="american express"
              className="w-15 h-15"
              width={20}
              height={20}
              unoptimized
              priority={false}
              loading="lazy"
            />
            <Image
              src={Paypal}
              alt="paypal"
              className="w-15 h-15"
              width={20}
              height={20}
              unoptimized
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-black font-bold text-2xl">Delivery</h2>
          <ul className="text-[#777] text-xl">
            <li>- How it Works</li>
            <li>- Free Delivery</li>
            <li>- FAQ</li>
            <li>- Payment Methods</li>
            <li>- Delivery Areas</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-black font-bold text-2xl">Customer Service</h2>
          <ul className="text-[#777] text-xl">
            <li>- Orders</li>
            <li>- Downloads</li>
            <li>- Addresses</li>
            <li>- Account Details</li>
            <li>- Logout</li>
            <li>- Lost Password</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-black font-bold text-2xl">Useful Links</h2>
          <ul className="text-[#777] text-xl">
            <li>
              <Link href="/contact">- Contact Us</Link>
            </li>
            <li>
              <Link href="/about">- Help & About Us</Link>
            </li>
            <li>
              <Link href="/shop">- Shipping & Returns</Link>
            </li>
            <li>
              <Link href="/shop">- Refund Policy</Link>
            </li>
          </ul>
        </div>
      </main>
      <footer className="border-t-[#aaa] border-t-1 text-[#777] text-md md:text-lg lg:text-xl px-4 py-6 gap-2 lg:gap-10 flex flex-col lg:flex-row items-center text-center lg:justify-around w-full">
        <Link href="/" className="lg:hidden">
          <ChevronUp className="w-10 h-10" />
        </Link>
        <p>
          &copy; Luxe By Deba from BonnkeWebs | All Rights Reserved | Powered By
          SelmCorp{" "}
        </p>
        <div className="flex items-center gap-4">
          <p className="whitespace-nowrap">Terms and Conditions</p>
          <p className="whitespace-nowrap">Privacy Policy</p>
          <p>Cookies</p>
          <Link href="#home" className="hidden lg:block">
            <ChevronUp className="w-10 h-10" />
          </Link>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
