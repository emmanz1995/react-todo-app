import React from 'react'
import { HeroContainer } from './styles'
import lightIcon from '../../images/icon-sun.svg';

const Hero = () => {
    return (
        <HeroContainer>
            <div className="hero-wrapper">
                <h1>Todo</h1>
                <span>
                    <img src={lightIcon} alt="" />
                </span>
            </div>
        </HeroContainer>
    )
}

export default Hero