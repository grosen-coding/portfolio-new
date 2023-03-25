import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './SignatureAnimation.scss'

const SignatureAnimation = () => {
  const signatureRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().from(signatureRef.current, {
      drawSVG: 0,
      duration: 3,
      delay: 3,
    })
  }, [])

  return (
    <div className="signature-container">
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={signatureRef}
            d="..." // Replace this with the path data from your SVG file
            stroke="black"
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  )
}

export default SignatureAnimation
