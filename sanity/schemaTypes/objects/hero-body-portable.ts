import { Link } from "@phosphor-icons/react/dist/ssr";
import { defineArrayMember } from "sanity";

export const heroBodyPortable = [
  defineArrayMember({
    title: "Block",
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H1", value: "h1" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "H4", value: "h4" },
      { title: "Quote", value: "blockquote" },
      { title: "Caption", value: "figcaption" },
    ],

    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
        { title: "Underline", value: "underline" },
        { title: "mark", value: "mark", icon: () => "H" },
        // {
        //   title: "Caption",
        //   value: "fig",
        //   icon: () => "CAP",
        // },
        {
          title: "Inline Code",
          value: "inlineCode",
          icon: () => "</>",
        },
      ],
      annotations: [
        {
          title: "URL",
          name: "link",
          type: "object",
          fields: [
            {
              title: "URL",
              name: "href",
              type: "url",
            },
          ],
        },
      ],
    },
  }),
  defineArrayMember({
    title: "Redirect",
    type: "navPage",
    icon: Link,
  }),
];
