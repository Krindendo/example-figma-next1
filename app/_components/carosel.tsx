"use client";

import { Carousel } from "flowbite-react";

export function HomeCarousel() {
  return (
    <div className="container h-56 sm:h-64 xl:h-96 2xl:h-[600px]">
      <Carousel>
        <img
          src="/images/restoran4.jpg"
          alt="restoran"
          className="w-full h-full object-cover object-center "
        />
        <img
          src="/images/restoran2.jpg"
          alt="restoran"
          className="w-full h-full object-cover object-center "
        />
        <img
          src="/images/restoran1.jpg"
          alt="restoran"
          className="w-full h-full object-cover object-center "
        />
      </Carousel>
    </div>
  );
}
