import styled from 'styled-components';

const StyledForm = styled.form`
  flex-basis: 412px;
  display: flex;
  position: relative;
  justify-content: center;
  padding-bottom: 30px;
`;
const StyledInput = styled.input`
  font-size: 16px;
  flex-basis: 412px;
  border-radius: 25px;
  background-color: #fff;
  outline: none;
  padding: 12px 40px 12px 24px;
`;
const StyledSearchBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: #db1313;
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms linear;
  &:hover {
    color: green;
  }
`;
export { StyledForm, StyledInput, StyledSearchBtn };
