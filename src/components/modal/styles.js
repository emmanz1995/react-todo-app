import styled from 'styled-components'
import { Theme } from '../../theme'

export const StyledBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`

export const StyledModalContainer = styled.div`
  width: 350px;
  background-color: ${Theme.veryDarkDesaturatedBlue};
  border-radius: 5px;
  padding: 20px;
  .modal-form-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledInput = styled.input`
  padding: 10px;
  background-color: ${Theme.veryDarkBlue};
  border-radius: 5px;
  border: none;
  width: 100%;
  margin: 10px 0;
  color: #fff;
`
export const StyledUpdateButton = styled.button`
  padding: 5px 15px;
  background-color: ${Theme.veryDarkBlue};
  border-radius: 5px;
  border: none;
  color: #fff;
`