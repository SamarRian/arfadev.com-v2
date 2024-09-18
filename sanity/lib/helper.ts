export const getStaticRoute = (name: any) => {
  switch (name) {
    default:
      return false;
  }
};

export const getDynamicRoute = (name: any) => {
  switch (name) {
    case "posts":
      return "posts";
    default:
      return false;
  }
};

export const getModuleName = (type: any) => {
  switch (type) {
    case "menu":
      return "Menu";
    case "misson":
      return "Mission Section";

    default:
      return null;
  }
};

export const getTypeTitles = (types: any) => {
  const typeNames = types.map((type: any) => {
    switch (type) {
      case "customImage":
        return "Image";
      case "bodyContent":
        return "Body";
      default:
        return "";
    }
  });

  return typeNames.join(" + ");
};

export const isPreviewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE;
