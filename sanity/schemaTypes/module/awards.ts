import { Certificate } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "awards",
  title: "Awards",
  fields: [
    {
      type: "metaData",
      name: "metaData",
      title: "MetaData",
    },
    {
      type: "array",
      name: "content",
      title: "Awards List",
      of: [{ type: "reference", to: [{ type: "page" }] }],
    },
  ],
  icon: Certificate,
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }) {
      return {
        title: "Awards",
        subtitle: `${content?.length || 0} Awards`,
      };
    },
  },
});
