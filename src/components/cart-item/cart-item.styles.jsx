import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 90%;
  display: flex;
  height: 60px;
  margin-bottom: 15px;
  background-color: #fff;
  img {
    width: 50px;
  }
`;

export const ItemDetails = styled.div`
  /* width: 0%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;
