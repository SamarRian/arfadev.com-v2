import dynamic from "next/dynamic";
import { MegaMenu } from "./mega-menu";
import Services from "./services.module";
import FooterModule from "./footer.module";
import Testimonials from "./testimonial";
import Hero from "./hero";
import BlogsModule from "./blogs-module";
import ContentBody from "./content-body";

const GridModule = dynamic(() => import("./grid-module"));

function Module({ module }: any) {
  const type = module._type;
  switch (type) {
    case "grid":
      return <GridModule module={module} />;
    case "menu":
      return <MegaMenu module={module} />;
    case "hero":
      return <Hero module={module} />;
    case "services":
      return <Services module={module} />;
    case "footer":
      return <FooterModule module={module} />;
    case "testimonial":
      return <Testimonials module={module} />;
    case "featured-posts":
      return <BlogsModule module={module} />;
    case "body":
      return <ContentBody module={module} />;
    default:
      return null;
  }
}

export default Module;
