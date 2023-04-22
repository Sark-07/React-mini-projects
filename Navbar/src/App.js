import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
function App() {
  const opacity = useRef()
  const [blurBg, setBlurBg] = useState(false)
  return (
    <main className={`${blurBg && 'blurBg'}`}>
      <div className="blur"></div>

      <Navbar setBlurBg={setBlurBg} blurBg={blurBg} />
    </main>
  )
}

export default App
