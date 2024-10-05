import React from "react";
import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn } from "@/lib/utils";
import { portableSimple } from "../portable-stucture/portable-simple";
import { portableComplexDarkText } from "../portable-stucture/portable-complex-dark";

function ContentBody({ module }: { module: any; lightMode?: boolean }) {
  const { body, wide } = module;

  return (
    <section>
      <article
        className={cn(
          "w-full mx-auto ",
          wide ? "max-w-article-wide" : "max-w-article"
        )}
      >
        <PortableText value={body} components={portableComplexDarkText} />
      </article>
    </section>
  );
}

export default ContentBody;
