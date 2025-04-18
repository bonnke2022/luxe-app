"use client";
import { slides } from "@/lib/carouselLinks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <div className="relative min-h-screen">
      <Image
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="absolute min-h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out object-cover"
        fill
        quality={100}
        priority={false}
        loading="lazy"
      />
      <div className="relative min-h-screen">
        <div className="flex items-center gap-6 absolute top-[60%] md:top-[50%] lg:top-[30%] left-[4%] md:left-[2%] lg:left-[10%]">
          <div className="btn hidden lg:flex flex-col gap-6">
            <ArrowLeft
              className="w-10 h-10 cursor-pointer"
              onClick={prevSlide}
            />
            <ArrowRight
              className="w-10 h-10 cursor-pointer"
              onClick={nextSlide}
            />
          </div>
          <div className="collections flex flex-col gap-4 max-w-xs ">
            <h2 className="flex text-xl font-bold md:text-2xl md:font-light lg:text-3xl items-center gap-4">
              {slides[currentIndex].year}{" "}
              <span className="w-10 md:w-20 lg:w-40 h-[2px] bg-black"></span>
            </h2>
            <h1 className="text-3xl font-bold md:text-4xl md:font-light lg:text-5xl capitalize sm:font-extrabold">
              {slides[currentIndex].title}
            </h1>
            <p className="text:md font-bold md:font-light lg:text-lg uppercase sm:font-bold">
              {slides[currentIndex].text}
            </p>
            <Link href="/shop">
              <Button className="w-[60%] rounded-none rounded-br-4xl md:text-xl md:px-8 sm:text-sm capitalize cursor-pointer font-light hover:bg-[#eee] hover:text-black">
                Our collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
