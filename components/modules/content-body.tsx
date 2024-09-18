import React from "react";
import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn } from "@/lib/utils";
import { portableSimple } from "../portable-stucture/portable-simple";

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
        <PortableText value={body} components={portableSimple} />
      </article>
    </section>
  );
}

export default ContentBody;
