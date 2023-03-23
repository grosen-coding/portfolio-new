import React, { useEffect } from 'react'

import './index.scss'

// Importing TagCloud package
import TagCloud from 'TagCloud'

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud'
    const texts = [
      'HTML5',
      'CSS3',
      'SASS',
      'JavaScript',
      'React',
      'Bootstrap',
      'Next.js',
      'NodeJS',
      'Material UI',
      'Redux',
      'Wordpress',
      'Styled Components',
      'JQuery',
      'ES6',
      'GIT',
      'GITHUB',
      'Tailwind CSS',
    ]

    const options = {
      radius: 300,

      maxSpeed: 'fast',
      initSpeed: 'fast',
      keep: true,
      depth: 10,
      deactivationMultiplier: 9,
      initial: [
        { x: 0.3, y: 0.3, z: 0.3 },
        { x: 0.7, y: 0.3, z: 0.3 },
        { x: 0.5, y: 0.7, z: 0.3 },
      ],
      textStyle: (index, elem) => {
        const size = Math.floor(Math.random() * 20 + 14) // Random font size between 14 and 34
        const color = `hsl(${Math.random() * 360}, 50%, 50%)` // Random hue, 50% saturation, 50% lightness
        const scale = 1 + parseFloat(elem.getAttribute('data-depth') || 0) // Scale based on depth

        return {
          fontSize: `${size}px`,
          color: color,
          transform: `scale(${scale})`,
        }
      },
    }

    TagCloud(container, texts, options)

    // Optional: Add cleanup function to remove the tag cloud when the component unmounts
    return () => {
      const tagcloudElement = document.querySelector(container)
      if (tagcloudElement) {
        tagcloudElement.innerHTML = ''
      }
    }
  }, [])

  return (
    <>
      <div className="tagcloud-container">
        <div className="text-sphere">
          <span className="tagcloud"></span>
        </div>
      </div>
    </>
  )
}

export default TextSphere
