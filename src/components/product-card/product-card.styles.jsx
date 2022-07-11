import styled from "styled-components";

export const ProductCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  height: 100%;

  padding: 16px;
`;
export const ProductImage = styled.img`
  height: 50%;
`;

export const ProductCardTitle = styled.h2`
  height: 10%;
  font-size: 16px;
`;
export const ProductCardDescription = styled.p`
  background-color: #ccc;
  height: 20%;
  font-size: 14px;
  padding: 10px;
`;
export const ProductCardFooter = styled.footer`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
