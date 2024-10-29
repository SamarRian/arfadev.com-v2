
import { apiVersion,} from "@/sanity/env";

import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import deskStucture from "@/sanity/deskStucture";
import { presentationTool } from "sanity/presentation";
import { resolve } from "@/sanity/presentation/resolve";

import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";

import { schemaMarkup } from "@operationnation/sanity-plugin-schema-markup";
import { documentInternationalizationPlugin } from "./document-internationlization-plugin";



export const sanityPlugins = [
    codeInput(),
    table(),

    schemaMarkup(),

    documentInternationalizationPlugin,

    structureTool({ structure: deskStucture }),
    visionTool({ defaultApiVersion: apiVersion }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin

    presentationTool({
      resolve: resolve,
      // previewUrl: santiyPreviewURL,
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL,
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ]

