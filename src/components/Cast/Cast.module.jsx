import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  background-color: #2a2a2a;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
    border-radius: 8px;
  }
  span {
    color: #ffc700;
  }
`;