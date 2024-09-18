import { Gear } from "@phosphor-icons/react/dist/ssr";

export default {
  title: "General Settings",
  name: "generalSettings",
  type: "document",
  icon: Gear,
  // group: [
  //   { title: "Site Details", name: "details", default: true },
  //   { title: "Displays", name: "displays" },
  //   { title: "Advanced", name: "advanced" },
  // ],
  fields: [
    {
      title: "Home Page",
      name: "home",
      type: "reference",
      to: [{ type: "page" }],
      description: "This page will show at the root of your domain",
      // group: "displays",
    },
    // {
    //   title: "Blogs",
    //   name: "blogs",
    //   type: "reference",
    //   to: [{ type: "blog" }],
    //   description: (
    //     <>
    //       This collection will show at: <code>/blogs</code>
    //     </>
    //   ),
    // group: "display",
    // },
    {
      title: "Error Page (404)",
      name: "error",
      type: "reference",
      to: [{ type: "page" }],
      description:
        "This page will show for any URL at your domain that does not exist yet",
      // group: "displays",
    },
    {
      title: "Site Title",
      name: "siteTitle",
      type: "string",
      description: "The name of your site, usually your company/brand name",
      // group: "details",
    },
    // {
    //   title: "Services Base URL",
    //   name: "servicesBaseURL",
    //   type: "slug",
    //   description:
    //     "(required) Enter only BaseURL ie. services. Don't include slash (/) into url",
    //   options: {
    //     maxLength: 96,
    //   },
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      title: "Live Site URL",
      description: "The root domain or subdomain of your website",
      name: "siteURL",
      type: "url",
      validation: (Rule: any) => Rule.required(),
      // group: "details",
    },
    {
      title: "Google Tag Manager (GTM)",
      description: "To enable GTM enter your Container ID",
      name: "gtmID",
      type: "string",
      // group: "advanced",
    },
    {
      title: "Klaviyo Site ID (Public API Key)",
      description: "For product waitlists and newsletter forms",
      name: "klaviyoAccountID",
      type: "string",
      // group: "advanced",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "General Settings",
      };
    },
  },
};
