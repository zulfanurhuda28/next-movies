import { DataFromApi } from "@/types/DataFromApi";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ItemHero = ({ data }: { data: DataFromApi }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative h-[50dvh] sm:h-[60dvh] lg:h-[100dvh]">
        <Image
          src={`${imagePath}${data.poster_path}`}
          alt="poster image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute bottom-7 left-1/2 z-40 flex w-full max-w-4xl -translate-x-1/2 transform flex-col gap-y-3 px-5 text-center lg:gap-y-5">
        <div className="mx-auto w-max rounded-full bg-gray-900 px-3 py-1 dark:bg-[#181C14]">
          <span className="font-bold text-white">Treding Now</span>
        </div>
        <h1 className="text-2xl font-bold lg:text-5xl">
          {data.title || data.name}
        </h1>
        <p className="line-clamp-4 text-gray-700 dark:text-gray-300">
          {data.overview}
        </p>
        <Button className="mx-auto w-max" endContent={<FaArrowRightLong />}>
          Details
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-75 dark:from-[#181C14]"></div>
    </div>
  );
};

export default ItemHero;