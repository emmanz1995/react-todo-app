import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  .form-control {
    padding: 15px;
    border: none;
    border-radius: 4px;
    width: 100%;
    color: #fff;
    background-color: ${props => props.theme.veryDarkBlue};
    position: absolute;
    bottom: 80px;
    left: 0;
  }
`