import { Data } from "@/pages";
import React from "react";
import SliderCard from "./SliderCard";
import Link from "next/link";

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className="flex w-full gap-6">
      {data.map((item) => {
        return (
          <Link key={item.img} href={`/games/${item.slug}`} className="block">
            <SliderCard data={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default Slides;
