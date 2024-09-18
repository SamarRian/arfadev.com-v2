import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AchivementsCards from "../achivements-card";
import WhoWeAreCard from "../who-we-are-card";
import BtnScrollTo from "../ui/new-component/btn-scroll";
import CustomImage from "../custom-image";

const LandingPageHero = ({ module }: { module: any }) => {
  const { table, body, cta, image, heading, bgImage } = module;

  return (
    <div
      className={
        "overflow-hidden w-sreen h-auto md:h-screen bg-secondary relative"
      }
    >
      {/* <Navbar /> */}
      <div className={"w-full flex items-center flex-col gap-y-8"}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-serif text-center pt-16 text-white leading-normal w-full">
          {heading.main} <br />
          <span className="text-primary-foreground">{heading.highlight}</span>
        </h1>
        <BtnScrollTo cta={cta} />
      </div>

      <div className="">
        <CustomImage
          imageOBJ={bgImage}
          src={urlFor(bgImage).url()}
          alt="svg"
          className=" bottom-0 left-0  h-[20rem] md:h-[50rem] sm:translate-y-[20%] pointer-events-none"
          fill
          placeholder="blur"
          blurDataURL={urlFor(bgImage).width(20).height(20).blur(20).url()}
        />
      </div>

      <div className="w-full md:h-[18rem] md:bg-secondary-foreground md:absolute bottom-0 z-10">
        <div className="relative md:absolute bottom-8 sm:bottom-0 left-[50%] -translate-x-[50%] h-[20rem] w-[15rem]  sm:h-[42rem] sm:w-[25rem] pointer-events-none">
          <CustomImage
            src={urlFor(image).width(320).height(480).url()}
            alt="sir"
            className="bottom-0 left-0 pointer-events-none object-contain z-0 sm:z-20 absolute translate-y-10 md:invisible lg:visible"
            placeholder="blur"
            fill
            priority
            imageOBJ={image}
            sizes="(max-width: 600px) 30vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="container mx-auto flex items-stretch sm:items-center h-full lg:justify-between  w-full flex-col md:flex-row">
          <AchivementsCards
            className={"md:-translate-y-[4rem] z-10"}
            data={table}
          />
          <WhoWeAreCard body={body} />
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
