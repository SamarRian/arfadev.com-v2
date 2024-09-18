import { ChartBar } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "process",
  title: "Our Process",
  icon: ChartBar,
  fields: [
    {
      type: "simplePortableText",
      name: "metaData",
    },
    {
      type: "array",
      name: "steps",
      of: [
        {
          type: "string",
          name: "step",
          validation(rule) {
            return rule.max(60).error("Keep text short.");
          },
        },
      ],
    },
  ],
});
