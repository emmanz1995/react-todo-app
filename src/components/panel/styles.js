import styled from 'styled-components';
import { Theme } from '../../theme'

export const StyledPanel = styled.span`
  width: 100%;
  padding: 15px;
  background-color: ${Theme.veryDarkDesaturatedBlue};
  border-bottom: 1px solid ${Theme.veryDarkGrayishBlue};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .toggle-btn {
    cursor: pointer;
  }
  
  .slash {
    text-decoration: line-through;
    text-decoration-color: ${Theme.veryDarkGrayishBlue};
    color: ${Theme.veryDarkGrayishBlue};
  }
  
  .delete-btn {
    cursor: pointer;
  }
  
  .update-btn {
    cursor: pointer;
  }
`