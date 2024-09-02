/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { api } from "@/axios";
import { useEffect, useState } from "react";

const slides = [
  { title: "Slide 1", image: "url" },
  { title: "Slide 2", image: "url" },
  { title: "Slide 3", image: "url" },
];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [res, setRes] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      console.log("Hello World");

      console.log(process.env.API);

      const res = await api.get("/");

      setRes(res.data.message);
    };

    getData();
  }, []);

  return (
    <div className="w-screen h-[800px] overflow-hidden border relative border-cyan-800">
      <h1>{res}</h1>

      <div
        className="w-[300%] h-full flex [&>div]:text-5xl"
        style={{
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
          transition: "transform 0.5s",
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} title={slide.title} image={slide.image} />
        ))}
      </div>

      <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === slideIndex}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

type SlideProps = {
  title: string;
  image: string;
};

const Slide = ({ title, image }: SlideProps) => {
  return (
    <div className="flex-1 h-full flex justify-center items-center">
      {title}
    </div>
  );
};

type IndicatorProps = {
  active: boolean;
  onClick: () => void;
};

const Indicator = ({ active, onClick }: IndicatorProps) => {
  return (
    <div
      className={`w-6 h-6 rounded-md ${
        active ? "bg-slate-700" : "bg-slate-400"
      }`}
      onClick={onClick}
    />
  );
};
