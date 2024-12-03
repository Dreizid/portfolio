import Image from "next/image";
import React from "react";

type AboutMeProps = {
  imgSrc?: string;
  width?: number;
  height?: number;
  imgAlt?: string;
  content?: string;
};

function AboutMe({
  imgSrc = "/public/next.svg",
  width = 500,
  height = 500,
  imgAlt = "My picture",
  content = "About me content",
}: AboutMeProps) {
  return (
    <div id="about-me" className="bg-slate-800 p-8">
      <h1 className="flex text-5xl">About me</h1>
      <div className="grid grid-cols-2 bg-red-900">
        <div>
          <Image src={imgSrc} width={width} height={height} alt={imgAlt} />
        </div>
        <div>
          <p className="m-12">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
