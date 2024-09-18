import { defineField } from "sanity";

export default defineField({
  name: "btnScrollTo",
  title: "ScrollTo Button",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Button Text",
    },
    {
      type: "string",
      title: "ID of Section",
      name: "id",
    },
  ],
});
