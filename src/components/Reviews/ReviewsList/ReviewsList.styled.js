import styled from 'styled-components';

export const ListReviews = styled.ul`
  li + li {
    margin-top: 36px;
  }
  p + p {
    margin-top: 18px;
    font-size: 18px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    color: #171717;
  }
  strong {
    font-size: 22px;
  }
`;