export default {
  name: "customImage",
  title: "Image",
  type: "image",

  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
    },
    {
      name: "objectFit",
      type: "string",
      title: "Object Fit",
      options: {
        list: [
          { title: "Cover", value: "cover" },
          { title: "Contain", value: "contain" },
          { title: "Fill", value: "fill" },
        ],
      },
    },
    {
      name: "width",
      type: "number",
      title: "Width",
    },
    {
      name: "height",
      type: "number",
      title: "Height",
    },
  ],
};
