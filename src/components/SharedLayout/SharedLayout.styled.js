import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: rgb(106, 90, 205);
  /* border-bottom: 1px solid #eee; */
  padding: 0 20px;
  nav {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
  }

  ul {
    display: flex;
    gap: 24px;
    margin-left: 172px;

    li {
    }
    a {
      position: relative;
      padding: 24px 0;
      display: block;
      color: #000;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover,
      &:focus,
      &:active {
        color: #600000;
      }
      &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color: #600000;
        border-radius: 4px;

        transform: scaleX(0);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      &:hover::after,
      &:focus::after {
        transform: scaleX(1);
      }
    }
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  span {
    font-size: 24px;
    text-transform: uppercase;
  }
`;