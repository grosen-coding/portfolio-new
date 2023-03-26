import './index.scss'
import LogoS from '../../assets/images/lotus.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const checkActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <div className="nav-bar">
      <div className="nav-bar-wrap">
        <div className="nav-bar-logo">
          <Link className="logo" to="/">
            <img src={LogoS} alt="Logo" />
            <h3>
              <span>GSR</span>Coding
            </h3>
          </Link>
        </div>
        <nav>
          <NavLink exact="true" to="/" className={`${checkActive('/')}`}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className={`about-link ${checkActive('/about')}`}
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className={`portfolio-link ${checkActive('/portfolio')}`}
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className={`contact-link ${checkActive('/contact')}`}
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul className="social-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/gary-rosen-coding/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#c79f7a"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/grosen-coding"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#c79f7a"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@k9paws"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color="#c79f7a"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/k9paws.pet/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="#c79f7a"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
