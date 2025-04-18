"use client";
import Image from "next/image";
import Women from "@/assets/women-posing.jpg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutDetails = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full py-30">
      <div className="flex flex-col items-start gap-4 max-w-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">
          Mauris maximus velit commodo varius ligula consequat vel.
        </h1>
        <h3 className="text-3xl">EDO STATE, NIGERIA</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl place-items-center space-x-8">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-2xl text-[#555]">
            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh
            magna. Proin risus erat, fringilla vel purus sit amet, mattis porta
            enim.
          </h3>
          <p className="text-xl">
            Duis fermentum faucibus est, sed vehicula velit sodales vitae.
            Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam
            ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci
            fermentum ultricies. Mauris maximus velit commodo, varius ligula
            vel, consequat est.
          </p>
          <h2 className="text-4xl font-bold">Aliquam Fringil</h2>
          <h3 className="text-2xl text-[#555]">
            Curabitur ut egestas justo, vitae molestie ante. Integer magna
            purus, commodo in diam nec, pretium
          </h3>
          <p className="text-xl">
            Auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa
            justo varius purus, non dictum elit nibh ut massa. Nam massa erat,
            aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor,
            suscipit in ligula rhoncus dui.
          </p>
          <Link
            href="/contact"
            className="flex items-center text-2xl gap-5 px-9 bg-black text-white cursor-pointer py-2 whitespace-nowrap mt-4"
          >
            Contact Us <ChevronRight className="h-10" />
          </Link>
        </div>
        <Image
          src={Women}
          alt="Women poses"
          width={50}
          height={50}
          className="w-full h-100 md:h-165 shadow-lg shadow-gray-500/50"
          priority={false}
          loading="lazy"
          unoptimized
        />
      </div>
    </div>
  );
};

export default AboutDetails;
