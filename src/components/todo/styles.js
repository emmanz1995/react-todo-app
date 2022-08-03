import styled from 'styled-components'

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
    background-color: ${props => props.theme.veryDarkDesaturatedBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: ${props => props.theme.lightGrayishBlue};
    }
    .btn-filter {
      background-color: ${props => props.theme.veryDarkDesaturatedBlue};
      border: none;
      cursor: pointer;
    }
  }
`