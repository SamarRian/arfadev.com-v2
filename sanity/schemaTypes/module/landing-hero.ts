import { Browser } from "@phosphor-icons/react";
import { defineField } from "sanity";

export default defineField({
  title: "Landing Page Hero",
  name: "landing-hero",
  type: "object",
  icon: Browser,
  fields: [{ title: "Content", name: "content", type: "simplePortableText" }],

  preview: {
    prepare() {
      return { title: "Homepage hero" };
    },
  },
});
