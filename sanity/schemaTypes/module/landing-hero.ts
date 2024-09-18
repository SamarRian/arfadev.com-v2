import { Browser } from "@phosphor-icons/react";
import { defineField } from "sanity";

export default defineField({
  title: "Landing Page Hero",
  name: "landing-hero",
  type: "object",
  icon: Browser,
  fields: [
    // { type: "number", name: "id", title: "ID" },
    {
      type: "object",
      title: "Heading",
      name: "heading",
      fields: [
        {
          type: "string",
          name: "main",
          title: "Main Heading",
          validation: (Rule: any) => Rule.required().max(70),
        },
        {
          type: "string",
          name: "highlight",
          title: "Highlight Heading",
          validation: (Rule: any) => Rule.required().max(40),
        },
      ],
    },
    {
      type: "customImage",
      name: "image",
      description:
        "Here you can put your image, but keep the background transparent & png format.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      type: "customImage",
      name: "bgImage",
      title: "Background Image",
      validation: (Rule: any) => Rule.required(),
      description:
        "Make sure you're adding an svg vector image. ie. Cirles or shapes with no background.",
    },
    {
      type: "object",
      name: "cta",
      fields: [
        {
          type: "number",
          name: "id",
          title: "Reference ID",
          description:
            "Put the ID no. of the section, you will find the id to top of each section with default value.",
        },
        {
          type: "string",
          name: "title",
          title: "Inner Text",
          description: "Text inside the button",
          validation: (Rule: any) => Rule.max(40).required(),
        },
      ],
    },
    {
      type: "simplePortableText",
      title: "More Details",
      name: "body",
    },
    {
      type: "array",
      title: "Context Table",
      name: "table",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) => Rule.required().max(50),
            },
            {
              name: "subtitle",
              title: "Sub-Title",
              type: "string",
              validation: (Rule: any) => Rule.required().max(100),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().max(4),
    },
  ],
  initialValue: {
    id: Date.now(),
  },
  preview: {
    prepare() {
      return { title: "Homepage hero" };
    },
  },
});
