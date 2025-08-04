"use client";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RightNavbar from "./RightNavbar";
import { usePathname } from "next/navigation";
import { links, NavLink } from "@/lib/carouselLinks";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="absolute z-10 w-full flex flex-col items-center">
      <div className="text-white hidden lg:flex gap-4 py-4 px-4 lg:text-lg lg:w-[80%]">
        <p>Help Desk 24/7 </p>
        <p className="flex items-center gap-2">
          <Phone />
          +234 8104312163{" "}
        </p>
        <p className="flex items-center gap-2">
          <Mail />
          bonnkeomorehiomwan@gmail.com
        </p>
      </div>
      <div
        className={`flex transition-all duration-300 shadow-lg ${
          isScrolled ? "w-full" : "w-full lg:w-[80%]"
        }`}
      >
        <nav
          className={`bg-white flex shadow-md py-2 ${
            isScrolled
              ? "justify-between lg:justify-around w-full fixed transition-all duration-300 top-0 left-0"
              : "justify-between w-full lg:w-[80%]"
          }  px-8`}
        >
          <div className="flex items-center gap-15 justify-between">
            <Link href="/" className="text-2xl md:text-4xl">
              <h1 className="font-bold whitespace-nowrap">Luxe By Deba</h1>
            </Link>
            <ul className="hidden lg:flex lg:text-xl lg:gap-6 ">
              {links.map((link: NavLink) => {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`whitespace-nowrap
                      ${
                        isScrolled
                          ? "capitalize relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                          : "capitalize relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                      }
                        ${
                          pathname === link.href
                            ? "border-b-black border-b-[3px]"
                            : ""
                        }
                        `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-4 lg:hidden py-3">
            <RightNavbar bgColor="" />
            <Sheet>
              <SheetTrigger className="cursor-pointer">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent className="flex lg:hidden min-h-screen bg-black flex-col items-center justify-start">
                <SheetClose className="self-end p-3 cursor-pointer">
                  <X className="w-10 h-6 text-[#aaa]" />
                </SheetClose>
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          <div
            className={
              isScrolled ? "hidden lg:flex items-center p-4 gap-4" : "hidden"
            }
          >
            <RightNavbar bgColor="bg-[#eee] px-2 py-1" />
          </div>
        </nav>
        <div
          className={
            isScrolled
              ? "hidden"
              : "hidden lg:flex items-center justify-center gap-10 bg-[#eee] py-7 px-4 lg:w-[20%] text-xl"
          }
        >
          <RightNavbar bgColor="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
