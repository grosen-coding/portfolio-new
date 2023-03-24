import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const ProjectCard = ({ project, isActive, onActiveChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMouseEnter = () => {
    if (!isActive) {
      onActiveChange(project.id)
    }
  }

  const handleClick = () => {
    onActiveChange(project.id, true)
  }

  const handleViewClick = (e) => {
    e.stopPropagation()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div
        className={`project-card ${isActive ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        {isActive && (
          <div className="project-info">
            <h3>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={project.title.split('')}
                idx={project.id * 10}
              />
            </h3>
            <button className="view-btn" onClick={handleViewClick}>
              View Project
            </button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-left">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="modal-right">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
