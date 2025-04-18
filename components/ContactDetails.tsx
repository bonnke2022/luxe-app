"use client";
import { Smartphone, Mail } from "lucide-react";
import FashionGirl from "@/assets/fine-blonde.jpg";
import Woman from "@/assets/charming-woman-posing-outdoors.jpg";
import Image from "next/image";

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-20 px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <div className="">
          <p className="text-md">Our Address</p>
          <h2 className="text-xl md:text-2xl">
            Oghagbon Str, Aduwawa, Benin Auchi Road, Benin City, Edo State,
            Nigeria
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col items-start gap-6 border-b-[1px] border-b-black pb-4">
            <p className="text-sm md:text-md tracking-wider">Monday - Friday</p>
            <h2 className="text-lg md:text-2xl">8:00 AM - 10:00PM</h2>
          </div>
          <div className="flex flex-col items-start font-bold">
            <p className="text-md">Do you have any questions?</p>
            <div className="flex items-center gap-4">
              <Smartphone className="w-7 h-7" />
              <p className="text-xl">+234 8104312163</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7" />
              <p className="text-md">bonnkeomorehiomwan@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start justify-center px-4">
        <Image
          src={FashionGirl}
          alt="fashion girl"
          width={50}
          height={50}
          objectFit="contain"
          priority={false}
          loading="lazy"
          unoptimized
          className="w-full lg:w-180 h-full lg:h-150"
        />
        <Image
          src={Woman}
          alt="woman"
          width={50}
          height={50}
          priority={false}
          loading="lazy"
          unoptimized
          objectFit="contain"
          className="w-[80%] lg:w-150 h-[80%] lg:h-130"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
