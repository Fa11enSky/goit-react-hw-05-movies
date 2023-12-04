import styled from 'styled-components';
const MovieItemStyled = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 38px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 450px;
  &:hover {
    box-shadow: 0 0 19px rgba(33, 33, 33, 0.2);
    scale: 0.99;
  }
  transition: all 250ms linear;
`;
export default MovieItemStyled;
