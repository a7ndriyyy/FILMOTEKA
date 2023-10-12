import styled from 'styled-components';

export const Label = styled.label`
  input {
    display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;

  }&:placeholder {
    font: inherit;
    font-size: 18px;
  }
  Label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  }

`;