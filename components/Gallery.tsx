"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { loadImages } from "../utils/loadImages";
import AnimatedImage from "./AnimatedImage";

export default function Gallery() {
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    const images = loadImages();
    setImageList(images);
  }, []);

  return (
    <section id="gallery" className="w-full px-8 md:px-40 py-10 flex flex-col justify-center items-center">
      <h1 className="text-dark-green text-2xl font-bold py-8">
        Students Gallery
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {imageList?.map((image, i) => (
          <AnimatedImage key={i} imageUrl={image} />
        ))}
      </div>
    </section>
  );
}