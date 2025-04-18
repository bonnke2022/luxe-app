"use client";
import { Truck, ShieldCheck, Clock4, CreditCard } from "lucide-react";

const SaleDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-center px-20 py-30">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative mb-4">
          <Truck className="w-15 h-15" />
          <span className="absolute w-8 h-8 rounded-full bg-[#C4A484] top-6 left-[-0.8rem] z-[-1]"></span>
        </div>
        <h2 className="text-2xl md:text-3xl">Always free shipping</h2>
        <p className="text-[#777] text-xl leading-8">
          Lorem ipsum dolor sit amet mauris dolor bibendum sapien
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative mb-4">
          <Clock4 className="w-15 h-15" />
          <span className="absolute w-8 h-8 rounded-full bg-[#C4A484] top-6 left-[-0.8rem] z-[-1]"></span>
        </div>
        <h2 className="text-2xl md:text-3xl">14-day return policy</h2>
        <p className="text-[#777] text-xl leading-8">
          Lorem ipsum dolor sit amet mauris dolor bibendum sapien
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative mb-4">
          <ShieldCheck className="w-15 h-15" />
          <span className="absolute w-8 h-8 rounded-full bg-[#C4A484] top-6 left-[-0.8rem] z-[-1]"></span>
        </div>
        <h2 className="text-2xl md:text-3xl">Quick delivery in 48h</h2>
        <p className="text-[#777] text-xl leading-8">
          Lorem ipsum dolor sit amet mauris dolor bibendum sapien
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative mb-4">
          <CreditCard className="w-15 h-15" />
          <span className="absolute w-8 h-8 rounded-full bg-[#C4A484] top-6 left-[-0.8rem] z-[-1]"></span>
        </div>
        <h2 className="text-2xl md:text-3xl">Online payment</h2>
        <p className="text-[#777] text-xl leading-8">
          Lorem ipsum dolor sit amet mauris dolor bibendum sapien
        </p>
      </div>
    </div>
  );
};

export default SaleDetails;
