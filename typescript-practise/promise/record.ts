interface PageInfo {
  title: string;
}

type Page = 1 | 3 | 5

let nav1: Record<Page, PageInfo > ;

nav1 = {
  1: { title: "about" },
  5: { title: "contact" },
  3: { title: "home" },
};