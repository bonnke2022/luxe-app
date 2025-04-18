"use client";
import Women from "@/assets/women-posing.jpg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about min-h-screen flex flex-col gap-10 md:gap-20 items-center justify-center py-30">
      <h1 className="text-3xl md:text-7xl">Who We Are</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 max-w-[84rem] bg-white shadow-lg">
        <Image
          src={Women}
          alt="Women poses"
          width={50}
          height={50}
          className="w-full lg:w-170 h-100 md:h-165"
          priority={false}
          loading="lazy"
          unoptimized
        />
        <div className="text-center flex flex-col items-center justify-center px-10 py-18 gap-8">
          <h2 className="text-3xl md:text-5xl">Our Story</h2>
          <h3 className="text-xl md:text-2xl tracking-wide">
            Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
            amet elementum eleifend erat at justo fringilla imperdiet id ac
            magna ac magna.
          </h3>
          <p className="text-md text-[#55] md:text-xl md:text-[#333] tracking-wide">
            Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
            justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend
            erat at justo fringilla imperdiet id ac magna eu, molestie tortor
            lorem eget egestas.
          </p>
          <Link
            href="/about"
            className="flex items-center text-2xl gap-5 px-9 bg-black text-white cursor-pointer py-2 whitespace-nowrap"
          >
            Learn More <ChevronRight className="h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
