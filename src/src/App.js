import React, {useState } from 'react'
import Navbar from './components//DesktopNavbar'
import MobileNav from './components/MobileNav'
function App() {
  const [blurBg, setBlurBg] = useState(false)
  return (
    <main className={`${blurBg && 'blurBg-holder'}`}>
      <div className="blur"></div>

      <Navbar setBlurBg={setBlurBg} blurBg={blurBg} />
      <nav className='mobile-nav'>

        <MobileNav blurBg={blurBg}/>
      </nav>
      <section className='hero'>
        <h1>Shrink me..</h1>
      </section>
    </main>
  )
}

export default App
