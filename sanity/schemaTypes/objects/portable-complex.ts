import { defineArrayMember } from "sanity";
import {
  Divider,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from "../components/renders";
import { Minus } from "@phosphor-icons/react/dist/ssr";

export default {
  title: "Rich Text",
  name: "complexPortableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Paragraph", value: "normal" },
        {
          title: "H1 (use once)",
          value: "h1",
          blockEditor: {
            render: Header1,
          },
        },

        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: Header2,
          },
        },

        {
          title: "H3",
          value: "h3",
          blockEditor: {
            render: Header3,
          },
        },

        {
          title: "H4",
          value: "h4",
          blockEditor: {
            render: Header4,
          },
        },
        {
          title: "H5",
          value: "h5",
          blockEditor: {
            render: Header5,
          },
        },
        {
          title: "H5",
          value: "h6",
          blockEditor: {
            render: Header6,
          },
        },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Divider",
            value: "divider",
            component: Divider,
            icon: Minus,
          },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",

            fields: [
              {
                title: "Link Type",
                name: "linkType",
                type: "string",
                options: {
                  list: [
                    { title: "Internal Page", value: "internal" },
                    { title: "External URL", value: "external" },
                  ],
                },
                initialValue: "internal",
                validation: (Rule: any) => Rule.required(),
              },
              {
                title: "Internal Page",
                name: "page",
                type: "reference",
                to: [{ type: "page" }],
                hidden: ({ parent }: any) => parent.linkType !== "internal",
              },
              {
                title: "External URL",
                name: "url",
                type: "url",
                validation: (Rule: any) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
                hidden: ({ parent }: any) => parent.linkType !== "external",
              },
              {
                title: "Style as Button?",
                name: "isButton",
                type: "boolean",
                initialValue: false,
              },
              {
                name: "styles",
                type: "object",
                fields: [
                  {
                    title: "Button Style",
                    name: "style",
                    type: "string",
                    options: {
                      list: [
                        { title: "Default", value: "default" },
                        { title: "Secondary", value: "secondary" },
                        { title: "White", value: "outline" },
                      ],
                      layout: "radio",
                    },
                  },
                  {
                    title: "Large Size",
                    name: "isLarge",
                    type: "boolean",
                    options: {
                      layout: "checkbox",
                    },
                    initialValue: false,
                  },
                  {
                    title: "Full Width",
                    name: "isBlock",
                    type: "boolean",
                    options: {
                      layout: "checkbox",
                    },
                    initialValue: false,
                  },
                ],
                hidden: ({ parent }: any) => !parent.isButton,
              },
            ],
          },
        ],
      },
    },
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "height",
          type: "number",
          title: "Height",
        },
        {
          name: "width",
          type: "number",
          title: "Width",
        },
      ],
    }),
    // customImage(),
    // {
    //   type: "horizontalRule",
    // },
  ],
};
