import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import LotusLoader from '../LotusLoader'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an accomplished and results-driven professional, a tech
            enthusiast, and entrepreneur who loves to take risks. Growing up in
            a tech-loving family in northern Toronto, Ont, means computers have
            been in my blood since birth. My coding journey began 25 years ago,
            writing basic HTML websites and designing graphics in Adobe
            Photoshop - long before CSS first made life much easier - but it
            wasn't until I became a business owner that I truly fell in love
            with web development.
          </p>
          <br />
          <br />
          <p>
            Front-End Development is currently my specialty, with a proficiency
            in advanced HTML, CSS and JavaScript code, but, without a doubt,
            what I enjoy most, is using <strong>React</strong>. React allows me
            to bring an obsessive level of creativity and attention-to-detail
            into my projects. I take great pride in developing websites &
            writing code with a fresh, up-to-date and modern approach. Having an
            extensive background as a long-time entrepreneur, and in both
            project and employee management has given me a sharp eye for problem
            solving and positive leadership, and has made me an asset to anyone
            expecting the best. When I'm not coding, you can find me
            rehabilitating last-chance dogs, teaching canine psychology,
            designing & building award-winning landscapes, hiking & exploring
            nature, building sustainable food gardens, or playing the drums and
            a variety of sports.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      {/* <LotusLoader /> */}
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default About
