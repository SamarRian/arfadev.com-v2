import { SquareHalfBottom } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "footer",
  title: "Footer",
  icon: SquareHalfBottom,
  fields: [
    {
      type: "boolean",
      title: "Newsletter",
      name: "newsletter",
      description: "Toggle the newsletter option.",
    },
    {
      type: "object",
      name: "metaData",
      fields: [
        {
          type: "string",
          title: "Title",
          name: "title",
        },
        {
          type: "string",
          title: "Subtitle",
          name: "subtitle",
        },
        { type: "customImage", name: "logo", title: "Logo" },
        {
          type: "array",
          name: "contactDetails",
          of: [{ type: "navLink" }],
          description:
            "Make sure to add title before any value ie. Phone:, Office:",
          title: "Contact Details",
          validation(rule) {
            return rule.required();
          },
        },
      ],
    },
    {
      type: "array",
      name: "footerRoutes",
      validation(rule) {
        return rule.required();
      },
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "title" },
            { type: "routes", name: "routes" },
          ],
        },
      ],
    },

    // {
    //   type: "array",
    //   name: "policies",
    //   of: [
    //     {
    //       type: "navLink",
    //     },
    //     { type: "navPage" },
    //   ],
    //   validation(rule) {
    //     return rule.required().max(6);
    //   },
    // },
    {
      type: "array",
      name: "socialLinks",

      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "icon",
              title: "Platform",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "slack", value: "slack" },
                  { title: "google", value: "google" },
                ],
              },
            },
            {
              title: "URL",
              type: "string",
              name: "url",
              description: "Enter an external URL",
              validation: (Rule: any) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            },
          ],
        },
      ],
      validation(rule) {
        return rule.required();
      },
    },
  ],
});
