import React from "react";
import ProcessStep from "../process-step";
import { PortableText } from "@portabletext/react";
import { DefaultStucture } from "../portable-stucture";
import Section from "../section";

const withLineBreak = (step: string) => {
  const arr = step.split(" ");
  return arr.map((item: string, i: number) => {
    return (
      <React.Fragment key={i}>
        {item}
        <br key={i} />
      </React.Fragment>
    );
  });
};

function ProcessModule({ module }: any) {
  const { metaData, steps } = module;
  return (
    <Section className="w-full bg-primary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-start lg:items-center lg:gap-x-32 grid-cols-1 sm:gap-y-4 lg:gap-y-10">
          <PortableText value={metaData} components={DefaultStucture} />
        </div>
        <div className="flex justify-between lg:py-24 sm:items-center flex-col lg:flex-row gap-y-6 md:gap-y-10 py-10">
          {steps.map((step: any, i: number) => {
            return (
              <ProcessStep type={i === 0 ? "circle" : "rectangle"} key={i}>
                {i === 0 ? withLineBreak(step) : step}
              </ProcessStep>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default ProcessModule;
