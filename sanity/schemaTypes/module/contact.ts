import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "contact",
  title: "Contact Form",
  fields: [
    { type: "metaData", name: "metaData", title: "Section Details" },
    { type: "metaData", name: "formData", title: "Form Details" },
    {
      type: "array",
      name: "form",
      title: "Form Fields",
      of: [{ type: "input" }],
    },
    {
      name: "note",
      title: "Note",
      type: "string",
      description:
        "Here you can leave a note for your customers. ie. Letting them know your Average response time.",
    },
  ],
  icon: PhoneCall,
});
