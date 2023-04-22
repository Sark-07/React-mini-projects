import React, { useState, useRef, useEffect } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = ({ setBlurBg, blurBg }) => {

  const [rotate, setRotate] = useState(false)


  return (
    <>

      <nav>
        <div className="logo"><span>Prime</span></div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
          <li>License</li>
        </ul>
        <div className="bars" onClick={() => setBlurBg(!blurBg)}>
          {/* <svg onClick={() => setRotate(!rotate)} xmlns="http://www.w3.org/2000/svg" class="sc-4bf843d9-0 jffWyx" style={{ overflow: "visible", width: 32 + "px", height: 32 + "px", transform: `${rotate ? "rotate(-45deg)" : "rotate(0deg)"}` }}><line x1={`${rotate ? 16 : 4.8}`} y1={`${rotate ? 0 : 9.6}`} x2={`${rotate ? 16 : 27.2}`} y2={`${rotate ? 32 : 9.6}`} stroke="#fff" stroke-width="3" stroke-linecap="round"></line><line x1={`${rotate ? 0 : 27.2}`} y1={`${rotate ? 16 : 22.4}`} x2={`${rotate ? 32 : 4.8}`} y2={`${rotate ? 16 : 22.4}`} stroke="#fff" stroke-width="3" stroke-linecap="round"></line></svg> */}
          <Hamburger toggled={rotate} toggle={setRotate} rounded easing="ease-in-out" duration={0.2} direction="right" size={30} />
        </div>
        <div className="profile">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
