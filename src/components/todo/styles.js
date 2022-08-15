import styled from 'styled-components'
import { Theme } from '../../theme'

export const StyleList = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  
  .panel-section {
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .filter-wrapper {
    padding: 15px;
    background-color: ${Theme.veryDarkDesaturatedBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: ${Theme.lightGrayishBlue};
    }
    .btn-filter {
      background-color: ${Theme.veryDarkDesaturatedBlue};
      border: none;
      cursor: pointer;
    }
  }
  @media screen and (max-width: ${Theme.mobile}) {
    .panel-section {
      padding: 10px;
    }
  }
`