"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselComponent() {
  return (
    <Carousel className="max-w-[100rem] mx-auto ">
        <CarouselContent>
          <CarouselItem>
            <div className="flex justify-center items-center w-full h-full py-10">
              <div className="flex flex-col lg:flex-row items-center gap-10">

                <div className="w-full text-center lg:text-left">
                  <p className="text-3xl md:text-5xl font-bold text-neutral-600">Lessons and insights</p>
                  <p className="text-3xl md:text-5xl font-bold text-green-600">from 8 years</p>
                  {/* Desktop and tablet version */}
                    <p className="hidden md:block mt-4 text-sm md:text-base text-neutral-500">
                    Where to grow your business as a photographer: site or social media?
                    </p>

                    {/* Mobile version with line break */}
                    <p className="block md:hidden mt-4 text-sm text-neutral-600">
                    Where to grow your business <br /> as a photographer: site or social media?
                    </p>

                  <div className="mt-6 flex justify-center lg:justify-start">
                    <Button className="bg-green-600 border-green-600 text-white font-light md:px-7 md:py-6 px-4 py-3 md:text-sm text-xs rounded-sm">
                      Register
                    </Button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
                  <Image
                    src="/imageCarousel.png"
                    alt="First slide"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </CarouselItem>       
          <CarouselItem>
            <div className="flex justify-center items-center w-full h-full py-10">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Text Section */}
                <div className="w-full text-center lg:text-left">
                  <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-600">Lessons and insights</p>
                  <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-600">from 8 years</p>
                  <p className="mt-4 text-sm md:text-base lg:text-lg text-neutral-600">
                    Where to grow your business as a photographer: site or social media?
                  </p>
                  <div className="mt-6 flex justify-center lg:justify-start">
                    <Button className="bg-green-600 border-green-600 text-white font-light px-7 py-6 text-sm rounded-sm">
                      Register
                    </Button>

                  </div>
                </div>

                {/* Image Section */}
                <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
                  <Image
                    src="/imageCarousel.png"
                    alt="First slide"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </CarouselItem>            
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
  );
}
