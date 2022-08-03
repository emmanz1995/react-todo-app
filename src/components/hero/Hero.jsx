import React, { useState } from 'react'
import { HeroContainer } from './styles'
import lightIcon from '../../images/icon-sun.svg'
import darkIcon from '../../images/icon-moon.svg'

const Hero = ({ setTheme, theme }) => {
    const [isActive, setIsActive] = useState(false)
    const handleToggleTheme = (evt) => {
        evt.preventDefault();
        setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})
        setIsActive(!isActive)
    }
    return (
        <HeroContainer>
            <div className="hero-wrapper">
                <h1>Todo</h1>
                <span>
                    <button className="theme-toggle-btn" onClick={handleToggleTheme}>{isActive ? <img src={lightIcon} alt="" /> : <img src={darkIcon} alt="" onClick={''} />}</button>
                </span>
            </div>
        </HeroContainer>
    )
}

export default Hero