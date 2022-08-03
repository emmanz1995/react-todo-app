import styled from 'styled-components';

export const StyledPanel = styled.span`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.theme.veryDarkDesaturatedBlue};
  border-bottom: 1px solid ${props => props.theme.veryDarkGrayishBlue};
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
    text-decoration-color: ${props => props.theme.veryDarkGrayishBlue};
    color: ${props => props.theme.veryDarkGrayishBlue};
  }
  
  .delete-btn {
    cursor: pointer;
  }
`