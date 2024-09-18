import React from "react";
import Section from "../section";
import Image from "next/image";
import MissionRow from "../mission-row";
import { BlogStuctureWhite } from "../portable-stucture";

function Mission({ module }: any) {
  const { metaData, id, content } = module;
  return (
    <Section
      title={metaData.title}
      paragraph={metaData.paragraph}
      className={"relative"}
      id={id}
    >
      <div className="">
        <Image
          alt="circle illustration"
          src={"/circles-hero.svg"}
          className="md:block hidden -z-20 md:-left-[50%] absolute lg:left-0 top-0 object-contain pointer-events-none"
          width={800}
          height={800}
        />
      </div>
      {/* <MissionRow /> */}
      {content.map(({ image, body }: any, i: any) => {
        return (
          <MissionRow
            image={image}
            value={body}
            components={BlogStuctureWhite}
            reverse={i % 2 !== 0}
            key={i}
          />
        );
      })}
    </Section>
  );
}

export default Mission;
