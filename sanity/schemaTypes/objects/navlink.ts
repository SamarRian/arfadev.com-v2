import { ArrowSquareOut } from "@phosphor-icons/react";

export default {
  title: "Link",
  name: "navLink",
  type: "object",
  icon: ArrowSquareOut,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    },
    {
      title: "subtitle",
      name: "subtitle",
      type: "string",
      description: "Optional, Use only in navigation menu",
    },
    {
      title: "URL",
      name: "url",
      type: "string",
      description: "Enter an external URL",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare({ title, url }: { title: string; url: any }) {
      return {
        title: title ?? url,
        subtitle: title && url,
      };
    },
  },
};
