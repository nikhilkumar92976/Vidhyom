import { ReactLenis } from 'lenis/react'
import React from 'react'
import LandingPage from './Components/LandingPage.jsx/LandingPage'

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <LandingPage />
    </ReactLenis>
  )
}

export default App
