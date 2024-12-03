import React from 'react'
import Image from 'next/image'
import { ProjectProps } from './Projects'

export default function ProjectCard({projectName, projectImage, projectDescription, techstack}: ProjectProps) {
  return (
    <div className="p-8 mx-8 w-[500px]">
      <Image src={projectImage} alt={projectName + " Image"} width={300} height={200} className="" />
      <h1 className="flex justify-center text-lg m-4">{projectName}</h1>
      <p>{projectDescription}</p>
    </div>
  )
}

