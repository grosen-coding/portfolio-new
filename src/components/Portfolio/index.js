import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from '../ProjectCard'
import projectsData from '../../data/projectsData'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id)
  const [hoveredProjectId, setHoveredProjectId] = useState(null)

  const handleActiveChange = (projectId, isClicked) => {
    if (isClicked) {
      setActiveProjectId(projectId)
    } else {
      setHoveredProjectId(projectId)
    }
  }

  const handleMouseLeave = () => {
    setHoveredProjectId(null)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const currentActiveId = hoveredProjectId || activeProjectId

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Featured Projects'.split('')}
            idx={15}
          />
        </h1>
        <div className="portfolio-container" onMouseLeave={handleMouseLeave}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={project.id === currentActiveId}
              onActiveChange={handleActiveChange}
            />
          ))}
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Portfolio
