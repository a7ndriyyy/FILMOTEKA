import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 24px;
  font-size: 20px;
  ul {
    display: flex;
    gap: 10px;
  }
`;

export const ListLink = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  li {
  }
  a {
    background: #fff;
    border-radius: 20px;
    display: block;
    text-decoration: none;
    padding: 10px 20px;
    color: inherit;
    &:hover,
    &:focus {
      background: #ee0000;
      color: #fff;
    }
  }
`;