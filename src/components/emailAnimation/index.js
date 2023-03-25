import React from 'react'
import './index.scss'

const EmailAnimation = () => {
  const email = 'gsrcoding@gmail.com'

  const letters = email.split('').map((letter, index) => (
    <span
      key={index}
      className="letter"
      style={{
        animationDelay: `${3.3 + index * 0.1}s`,
      }}
    >
      {letter}
    </span>
  ))

  return <h3>{letters}</h3>
}

export default EmailAnimation
