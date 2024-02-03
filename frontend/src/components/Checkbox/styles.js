import styled from "styled-components";

export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
  border: 1px solid #D9D9D9;
  -webkit-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  outline: none;
  cursor: pointer;

  &:checked {
      background: rgba(251, 168, 28, 0.50);
      border: 1px solid #D9D9D9;
  }
`;
