import type { NonEmptyArray } from "@/types";

interface SlideProps {
  title: string;
  description: string;
  image?: `bg-[url('${string}')]`;
  href: string;
  techs: NonEmptyArray<{
    id: number;
    name: string;
    backgroundColor: `bg-${string}`;
  }>;
}

interface SlideData extends SlideProps {
  id: number;
}

type SlidesData = SlideData[];

export type { SlideProps, SlidesData };
