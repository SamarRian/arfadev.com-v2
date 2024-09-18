import { MicrosoftWordLogo } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  title: "Featured Posts",
  name: "featured-posts",
  type: "object",
  icon: MicrosoftWordLogo,
  fields: [
    { type: "metaData", name: "metaData", title: "Section Details" },
    {
      title: "Posts",
      type: "array",
      name: "posts",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }],
          options: {
            filter: "category == $type",
            filterParams: { type: "post" },
          },
        },
      ],
      validation: (Rule: any) =>
        Rule.max(3).error("You can only have one piece of content"),
    },
  ],
  preview: {
    prepare() {
      return { title: "Featured Posts" };
    },
  },
});
