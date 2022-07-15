import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #aaa;
  padding: 30px 20px;
`;

export const CategoryLink = styled(Link)`
  color: black;
  font-size: 16px;
  border-bottom: 1px solid black;
  padding: 10px 0;
  cursor: pointer;
`;
