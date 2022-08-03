import styled from 'styled-components'
import bgDark from '../../images/bg-desktop-dark.jpg'

export const HeroContainer = styled.main`
  width: 100%;
  height: 300px;
  background-image: url(${bgDark});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  .hero-wrapper {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1 {
      color: ${props => props.theme.lightGrayishBlueHover}
    }
  }
`