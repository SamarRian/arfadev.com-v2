import React from "react";
import Section from "../section";
import Image from "next/image";
import Signatures from "../svgs/signatures";
import PlayButton from "../svgs/play-button";

function Testimonials({ module }: any) {
  return (
    <Section
      options={{
        section: "2. Testimonials",
        title: "What our clients says about us;",
        subtitle:
          "Everything we do is focused on generating more qualified cases for your law firm.",
      }}
    >
      <figure className="max-w-container container bg-foreground grid grid-cols-3 py-12 px-24 gap-x-24 h-[25rem]">
        <div className="col-span-1 h-[26rem] -translate-y-1/4 relative">
          <Image
            src="/chishti.jpg"
            fill
            alt="client"
            className="object-cover"
          />
        </div>
        <figcaption className="font-serif  text-2xl leading-loose text-background col-span-2 relative flex items-end flex-col gap-y-8">
          <p className="italic">
            "Partnering with Arfa Developers has been a game-changer for our law
            firm. Their expertise in website design and development has
            transformed our online presence. From the initial consultation to
            the final launch, their team demonstrated a deep understanding of
            the legal industry and our specific needs."
          </p>
          <Signatures className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/3 z-10 pointer-events-none" />
          <div className="flex gap-x-6 items-center">
            <div className="flex items-end flex-col gap-y-2">
              <p className="text-xl font-medium font-sans text-background">
                By Adv. Shafique Ahmad
              </p>
              <p className="text-sm font-sans dark:text-secondary-foreground/80">
                Play testimonial
              </p>
            </div>
            <PlayButton />
          </div>
        </figcaption>
      </figure>
    </Section>
  );
}

export default Testimonials;
