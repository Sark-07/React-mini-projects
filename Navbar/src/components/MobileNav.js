import React from 'react'

const MobileNav = ({blurBg}) => {

  
    return (
        <>
            
                <ul className='mobile-nav-ul'>
                    <li className = {`${blurBg ? 'slide': 'no-slide'}`} style={{transitionDelay : `${blurBg ? 100+'ms' : 10+'ms'}`} }>Home</li>
                    <li className = {`${blurBg ? 'slide': 'no-slide'}`} style={{transitionDelay : `${blurBg ? 200+'ms' : 20+'ms'}`} }>Products</li>
                    <li className = {`${blurBg ? 'slide': 'no-slide'}`} style={{transitionDelay : `${blurBg ? 300+'ms' : 30+'ms'}`} }>Features</li>
                    <li className = {`${blurBg ? 'slide': 'no-slide'}`} style={{transitionDelay : `${blurBg ? 400+'ms' : 40+'ms'}`} }>About</li>
                    <li className = {`${blurBg ? 'slide': 'no-slide'}`} style={{transitionDelay : `${blurBg ? 500+'ms' : 50+'ms'}`} }>License</li>
                </ul>

        </>
    )
}

export default MobileNav