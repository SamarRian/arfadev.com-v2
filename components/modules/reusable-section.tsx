import React from "react";
import Module from "./module";

function ReusableSection({ module }: any) {
  const { content } = module;
  return content.map((module: any, i: number) => {
    return <Module module={module} key={i} />;
  });
}

export default ReusableSection;
