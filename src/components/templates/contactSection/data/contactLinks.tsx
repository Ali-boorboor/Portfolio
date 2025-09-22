import type { JSX } from "react";

type ContactLinks = {
  id: number;
  title: string;
  linkTo: string;
  children: JSX.Element;
}[];

const contactLinks: ContactLinks = [
  {
    id: 1,
    title: "GitHub",
    linkTo: "https://github.com/Ali-boorboor",
    children: (
      <svg className="size-2/3 fill-white group-hover:fill-[#181717] transition-all duration-300 ease-linear">
        <use href="/contact-icons/github.svg"></use>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Gmail",
    linkTo: "mailto:ali.w01rk@gmail.com",
    children: (
      <svg className="size-2/3 fill-white group-hover:fill-[#EA4335] transition-all duration-300 ease-linear">
        <use href="/contact-icons/gmail.svg"></use>
      </svg>
    ),
  },
  {
    id: 3,
    title: "LinkedIn",
    linkTo: "https://www.linkedin.com/in/ali-boorboor/",
    children: (
      <p className="font-sans text-5xl font-bold text-white transition-all duration-500 ease-linear group-hover:text-[#0077B5]">
        in
      </p>
    ),
  },
];

export default contactLinks;
