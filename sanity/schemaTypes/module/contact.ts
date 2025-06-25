import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "contact",
  title: "Contact Form",
  fields: [{ type: "text", name: "text", title: "text" }],
  icon: PhoneCall,
});
