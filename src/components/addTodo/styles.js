import styled from 'styled-components'
import { Theme } from '../../theme'

export const StyledForm = styled.form`
  .form-control {
    padding: 15px;
    border: none;
    border-radius: 4px;
    width: 100%;
    color: #fff;
    background-color: ${Theme.veryDarkBlue};
  }
  @media screen and (max-width: ${Theme.mobile}) {
    .form-control {
      padding: 10px;
    }
  }
`