import React, { useState } from 'react'
import './index.scss'

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
            <h3>{project.title}</h3>
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
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-text">{project.description}</p>
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
