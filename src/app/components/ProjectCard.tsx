import React from 'react'
import Image from 'next/image'
import { ProjectProps } from './Projects'

export default function ProjectCard({projectName, projectImage, projectDescription, techstack}: ProjectProps) {
  return (
    <div className="bg-sky-900 mx-8">
      <Image src={projectImage} alt={projectName + " Image"} width={175} height={150} />
      <h1>{projectName}</h1>
      <p>{projectDescription}</p>
    </div>
  )
}

