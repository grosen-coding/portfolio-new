import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from '../ProjectCard'
import projectsData from './projectsData.js'
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
          <ProjectCard
            project={projectsData[0]}
            isActive={projectsData[0].id === currentActiveId}
            onActiveChange={handleActiveChange}
            letterClass={letterClass}
          />
          <ProjectCard
            project={projectsData[1]}
            isActive={projectsData[1].id === currentActiveId}
            onActiveChange={handleActiveChange}
            letterClass={letterClass}
          />
          <ProjectCard
            project={projectsData[2]}
            isActive={projectsData[2].id === currentActiveId}
            onActiveChange={handleActiveChange}
            letterClass={letterClass}
          />
          <ProjectCard
            project={projectsData[3]}
            isActive={projectsData[3].id === currentActiveId}
            onActiveChange={handleActiveChange}
            letterClass={letterClass}
          />
          <ProjectCard
            project={projectsData[4]}
            isActive={projectsData[4].id === currentActiveId}
            onActiveChange={handleActiveChange}
            letterClass={letterClass}
          />
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Portfolio
