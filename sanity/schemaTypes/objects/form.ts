import { CursorText } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "form",
  title: "Form",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      description: "Please enter the title for the form.",
      validation(rule) {
        return rule.required();
      },
    },
    {
      type: "array",
      name: "form",
      title: "Form Fields",
      of: [{ type: "input" }],
    },
    {
      type: "text",
      name: "info",
      title: "Info",
      rows: 2,
      description:
        "Enter the piece of information, that probably useful to client. And keep it short.",
    },
  ],
  icon: CursorText,
  preview: {
    select: {
      title: "title",
      inputs: "form",
    },
    prepare({ title, inputs = [] }) {
      return {
        title,
        subtitle: `${inputs?.length} Inputs`,
      };
    },
  },
});
