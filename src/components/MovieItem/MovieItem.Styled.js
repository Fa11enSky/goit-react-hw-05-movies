import styled from 'styled-components';
const MovieItemStyled = styled.div`

  max-width:256px;
  height: 410px;
  
  &:hover {
    box-shadow: 0 0 19px rgba(33, 33, 33, 0.2);
    scale: 0.99;
  }
  transition: all 250ms linear;
`;
export default MovieItemStyled;
