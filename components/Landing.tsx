"use client";
import Image, { StaticImageData } from "next/image";

const Landing = ({
  pic,
  alt,
  text,
}: {
  pic: string | StaticImageData;
  alt: string;
  text: string;
}) => {
  return (
    <div className="relative h-[60vh]">
      <Image
        src={pic}
        alt={alt}
        className="absolute h-50 w-full bg-cover bg-center transition-all duration-1000 ease-in-out object-cover"
        fill
        quality={100}
        priority={false}
        loading="lazy"
      />
      <div className="absolute h-[60vh] flex items-end justify-start px-2 md:px-10 lg:px-50 py-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{text}</h1>
      </div>
    </div>
  );
};

export default Landing;
