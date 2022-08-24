import React, { useState } from 'react'
import { HeroContainer } from './styles'
import lightIcon from '../../images/icon-sun.svg'
import darkIcon from '../../images/icon-moon.svg'

const Hero = () => {
    return (
        <HeroContainer>
            <div className="hero-wrapper">
                <h1>Todo</h1>
                <span>
                    <button className="theme-toggle-btn"><img src={darkIcon} alt="" /></button>
                </span>
            </div>
        </HeroContainer>
    )
}

export default Hero