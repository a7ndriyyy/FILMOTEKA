import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgWrrap = styled.div`
  position: relative;
  border: 1px solid #eee;
`;
export const Span = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${({ rating }) => (rating >= 7 ? 'green' : 'yellow')};
  /* ${({ rating }) => {
    if (rating <= 5) {
      return 'red';
    } else if (rating < 7) {
      return 'orange';
    }
    return 'green';
  }}; */
`;
export const DetailWrrap = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 30px;
  }
  h4 {
    margin-bottom: 10px;
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  top: -44px;
  left: 0;
  z-index: 2;
  display: block;
  text-decoration: none;
  padding-left: 60px;
  padding-right: 20px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  font-weight: 600;

  color: inherit;
  &:hover,
  &:focus {
    background: #ee0000;
    color: #fff;
  }
`;