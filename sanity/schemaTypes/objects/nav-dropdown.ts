import { ArrowBendRightDown, WarningCircle } from "@phosphor-icons/react";

export default {
  title: "Dropdown",
  name: "navDropdown",
  type: "object",
  icon: ArrowBendRightDown,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Text to Display",
    },
    {
      title: "Dropdown Items",
      name: "dropdownItems",
      type: "array",
      of: [{ type: "menuLink" }, { type: "navLink" }],
    },
    {
      title: "Featured Post",
      name: "featured",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "page",
          type: "reference",
          to: [{ type: "page" }],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
};
