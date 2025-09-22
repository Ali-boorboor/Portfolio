import type { SlidesData } from "@/components/templates/portfolioSection/types/sliderTypes";

const slidesData: SlidesData = [
  {
    id: 1,
    title: "1 پروژه",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate esse, id libero sed eveniet pariatur veritatis dolorum nisi soluta dolor laboriosam dolores error mollitia sit quaerat. Eaque, tempora culpa!",
    image: "bg-[url('/particles-images/dark-mountain.png')]",
    href: "#",
    techs: [
      { id: 1, name: "react", backgroundColor: "bg-cyan-500" },
      { id: 2, name: "tailwind", backgroundColor: "bg-sky-500" },
      { id: 3, name: "shadcn", backgroundColor: "bg-neutral-950" },
      { id: 4, name: "typescript", backgroundColor: "bg-blue-600" },
    ],
  },
  {
    id: 2,
    title: "2 پروژه",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate esse, id libero sed eveniet pariatur veritatis dolorum nisi soluta dolor laboriosam dolores error mollitia sit quaerat. Eaque, tempora culpa!",
    image: "bg-[url('/particles-images/dark-mountain.png')]",
    href: "#",
    techs: [
      { id: 1, name: "react", backgroundColor: "bg-cyan-500" },
      { id: 2, name: "tailwind", backgroundColor: "bg-sky-500" },
    ],
  },
  {
    id: 3,
    title: "3 پروژه",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate esse, id libero sed eveniet pariatur veritatis dolorum nisi soluta dolor laboriosam dolores error mollitia sit quaerat. Eaque, tempora culpa!",
    image: "bg-[url('/particles-images/dark-mountain.png')]",
    href: "#",
    techs: [{ id: 4, name: "typescript", backgroundColor: "bg-blue-600" }],
  },
  {
    id: 4,
    title: "4 پروژه",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate esse, id libero sed eveniet pariatur veritatis dolorum nisi soluta dolor laboriosam dolores error mollitia sit quaerat. Eaque, tempora culpa!",
    image: "bg-[url('/particles-images/dark-mountain.png')]",
    href: "#",
    techs: [{ id: 4, name: "mui", backgroundColor: "bg-blue-700" }],
  },
];

export default slidesData;
