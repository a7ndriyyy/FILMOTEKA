import styled from 'styled-components';

export const ListSearch = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 18px;

  li {
    font-size: 22px;
    transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      scale: 1.1;
      color: #600000;
    }
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  img {
    border: 1px solid #eee;
    width: 200px;
    height: 300px;
  }
`;