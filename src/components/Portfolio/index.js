import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [portfolio, setPortfolio] = useState([]);

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
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>Portfolio Projects Coming Soon...</div>
      </div>
      <Loader type="ball-scale-multiple" />
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Portfolio
