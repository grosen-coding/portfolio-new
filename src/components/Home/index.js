import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Lotus from '../../assets/images/lotus.png'
import TextSphere from '../TextSphere'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['G', 'a', 'r', 'y']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={Lotus} alt="Gary Rosen" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
          </h1>
          <h2>Front End Developer & Creative Designer </h2>
          <Link to="/contact" className="flat-button flat-button-home">
            CONTACT ME
          </Link>
        </div>
        <TextSphere />
      </div>

      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Home
