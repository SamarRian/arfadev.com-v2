import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  title: "Services",
  name: "services",
  icon: SealCheck,
  fields: [
    { type: "sectionID", name: "id" },
    { type: "metaData", name: "metaData" },
    {
      type: "array",
      name: "content",
      title: "Services",
      of: [
        {
          type: "reference",
          name: "page",
          to: [{ type: "page" }],
          options: {
            filter: "category == $type",
            filterParams: { type: "service" },
          },
        },
      ],
      validation: (Rule: any) =>
        Rule.max(6).error("You can add only 6 services here."),
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }: any) {
      return {
        title: "Services",
        subtitle: `${content?.length || 0} Services`,
      };
    },
  },
});

/*

    {
      type: "array",
      name: "content",
      title: "Content",
      of: [
        {
          type: "object",
          title: "Service Item",
          name: "item",
          fields: [
            { name: "title", type: "string", title: "Title" },
            {
              type: "reference",
              name: "page",
              to: [{ type: "page" }],
              validation: (Rule: any) => Rule.length(6),
            },
          ],
        },
      ],
    },



*/
