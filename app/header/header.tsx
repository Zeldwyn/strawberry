"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HeaderComponent() {
  return (
    <header className="w-full bg-slate-50 px-5 py-4 flex items-center md:justify-around justify-between md:h-18 h-15">
      <div className="flex flex-row items-center gap-2">
        <div className="w-5 h-5 rounded-sm bg-black shadow-lg" />
        <span className="text-2xl font-semibold text-black">Nexcent</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-black text-sm">
        <a href="#" className="hover:text-green-600">Home</a>
        <a href="#" className="hover:text-green-600">Service</a>
        <a href="#" className="hover:text-green-600">Feature</a>
        <a href="#" className="hover:text-green-600">Product</a>
        <a href="#" className="hover:text-green-600">Testimonial</a>
        <a href="#" className="hover:text-green-600">FAQ</a>
      </nav>

 
      <div className="hidden md:flex items-center gap-2">
        <button className=" text-green-600 px-4 py-2 rounded-md text-sm">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-sm text-sm">Sign Up</button>
      </div>


      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-black" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-10 text-base font-medium">
              <a href="#">Home</a>
              <a href="#">Service</a>
              <a href="#">Feature</a>
              <a href="#">Product</a>
              <a href="#">Testimonial</a>
              <a href="#">FAQ</a>
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Login</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Sign Up</button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
