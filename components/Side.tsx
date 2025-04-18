"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { navs } from "@/lib/carouselLinks";

const Side = () => {
  const pathname = usePathname();

  return (
    <aside className="py-4 px-8 bg-muted h-full flex flex-col items-start">
      <Link href="/" className="text-2xl md:text-4xl">
        <h1 className="font-bold whitespace-nowrap">Luxe By Deba</h1>
      </Link>
      <div className="flex flex-col mt-20 gap-y-4">
        {navs.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Side;
