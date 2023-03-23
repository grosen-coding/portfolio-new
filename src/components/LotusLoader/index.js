import React from 'react'
import './index.scss'
import LotusImg from '../../assets/images/lotus.png'

const LotusLoader = () => {
  return (
    <div className="loader-container">
      <img src={LotusImg} alt="Logo" /> */}
      <div className="lotus-loader">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="lotus-leaf"
            d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
          />
          <path
            className="lotus-leaf"
            d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
            transform="rotate(90 50 50)"
          />
          <path
            className="lotus-leaf"
            d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
            transform="rotate(180 50 50)"
          />
          <path
            className="lotus-leaf"
            d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
            transform="rotate(270 50 50)"
          />
        </svg>
      </div>
      {/* <svg className="lotus-loader" viewBox="0 0 100 100">
        <path
          className="leaf leaf-1"
          d="M50,4c6.4,0,21.5,16.5,28.5,28.5c7,12,7,26,0,38c-7,12-22.1,28.5-28.5,28.5c-6.4,0-21.5-16.5-28.5-28.5 c-7-12-7-26,0-38C28.5,20.5,43.6,4,50,4z"
        />
        <path
          className="leaf leaf-2"
          d="M50,4c6.4,0,21.5,16.5,28.5,28.5c7,12,7,26,0,38c-7,12-22.1,28.5-28.5,28.5c-6.4,0-21.5-16.5-28.5-28.5 c-7-12-7-26,0-38C28.5,20.5,43.6,4,50,4z"
          transform="rotate(90, 50, 50)"
        />
        <path
          className="leaf leaf-3"
          d="M50,4c6.4,0,21.5,16.5,28.5,28.5c7,12,7,26,0,38c-7,12-22.1,28.5-28.5,28.5c-6.4,0-21.5-16.5-28.5-28.5 c-7-12-7-26,0-38C28.5,20.5,43.6,4,50,4z"
          transform="rotate(180, 50, 50)"
        />
        <path
          className="leaf leaf-4"
          d="M50,4c6.4,0,21.5,16.5,28.5,28.5c7,12,7,26,0,38c-7,12-22.1,28.5-28.5,28.5c-6.4,0-21.5-16.5-28.5-28.5 c-7-12-7-26,0-38C28.5,20.5,43.6,4,50,4z"
          transform="rotate(270, 50, 50)"
        />
      </svg> */}
      <svg className="circle-spinner" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" strokeWidth="5">
          <img className="image-loader" src={LotusImg} alt={'Logo Spinner'} />
        </circle>
      </svg>
    </div>
  )
}

export default LotusLoader
