import { type SchemaTypeDefinition } from "sanity";
import objects from "./objects";
import documents from "./documents";
import module from "./module";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objects, ...(documents as any), ...module],
};
