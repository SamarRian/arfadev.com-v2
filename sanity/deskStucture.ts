import {
  Cardholder,
  File,
  Package,
  Toolbox,
  Tray,
  Users,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

export default (S: any) =>
  S.list()
    .title("Content")
    .items([
      // Separate by category
      S.listItem()
        .title("Pages")
        .icon(File)
        .child(
          S.documentTypeList("page")
            .title("Pages")
            .filter('_type == "page" && category == "page"')
        ),
      S.divider(),
      S.listItem()
        .title("Posts")
        .icon(Package)
        .child(
          S.documentTypeList("page")
            .title("Post")
            .filter('_type == "page" && category == "post"')
        ),
      S.listItem()
        .title("Services")
        .icon(Toolbox)
        .child(
          S.documentTypeList("page")
            .title("Services")
            .filter('_type == "page" && category == "service"')
        ),
      S.listItem()
        .title("Team Pages")
        .icon(Users)
        .child(
          S.documentTypeList("page")
            .title("Team Pages")
            .filter('_type == "page" && category == "team"')
        ),
      S.listItem()
        .title("Other Pages")
        .icon(Tray)
        .child(
          S.documentTypeList("page")
            .title("Other Pages")
            .filter('_type == "page" && category == "other"')
        ),
      S.divider(),
      S.listItem()
        .title("Error Pages")
        .icon(Warning)
        .child(
          S.documentTypeList("page")
            .title("Error Pages")
            .filter('_type == "page" && category == "error"')
        ),

      S.divider(),

      // Other document types or custom categories
      ...S.documentTypeListItems().filter(
        (listItem: any) => listItem.getId() !== "page"
      ),
      S.divider(),
      S.listItem()
        .title("All Pages")
        .icon(Cardholder)
        .child(
          S.documentTypeList("page")
            .title("All Pages")
            .filter('_type == "page"')
        ),
    ]);
