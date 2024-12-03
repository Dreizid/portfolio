import Image from "next/image";
import React from "react";

export type TechnologiesProps = {
  imgAlt: string;
  imgSrc: string;
};

type TechstackProps = {
  technologies: TechnologiesProps[];
};

function TechStack({
  technologies = [{ imgAlt: "NextJS Image", imgSrc: "/public/next.svg" }],
}: TechstackProps) {
  return (
    <div id="tech-stack" className="p-8 bg-slate-900">
      <h1 className="text-5xl mb-2">Skills</h1>
      <div className="flex flex-row">
        {technologies.map(({ imgAlt, imgSrc }: TechnologiesProps) => (
          <div className="p-8 m-2 bg-slate-800 border-slate-700 border-2">
            <Image src={imgSrc} width={125} height={125} alt={imgAlt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
