import { z } from "zod";

export const createFormSchema = (inputs: any) => {
  //label,type,placeholder,wide

  const schemaObj: any = {};

  inputs.forEach(
    ({
      label,
      type,
      placeholder,
    }: {
      label: string;
      type: string;
      placeholder: string;
    }) => {
      switch (type) {
        case "email":
          return (schemaObj[label] = z
            .string()
            .min(1, { message: `Please ${placeholder.toLowerCase()}` })
            .email());

        case "submit":
          break;

        default:
          return (schemaObj[label] = z
            .string()
            .min(1, { message: `Please ${placeholder.toLowerCase()}` }));
      }
    }
  );
  return z.object(schemaObj);
};
