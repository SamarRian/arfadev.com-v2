import dynamic from "next/dynamic";
import { MegaMenu } from "./mega-menu";
import Services from "./services.module";
import FooterModule from "./footer.module";

const GridModule = dynamic(() => import("./grid-module"));

function Module({ module }: any) {
  const type = module._type;
  switch (type) {
    case "grid":
      return <GridModule module={module} />;
    case "menu":
      return <MegaMenu module={module} />;
    case "services":
      return <Services module={module} />;
    case "footer":
      return <FooterModule module={module} />;
    default:
      return null;
  }
}

export default Module;
