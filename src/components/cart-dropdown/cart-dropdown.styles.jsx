import styled from "styled-components";

export const CartContainer = styled.div`
  position: absolute;
  width: 440px;
  /* height: 340px; */
  top: 50px;
  right: 10px;
  z-index: 3;
  background-color: #ddd;
  border: 1px solid black;

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: #000;
    font-size: 14px;
  }
`;

export const CartCheaper = styled.div`
  background-color: #fff;
  margin: 10px 0;
  padding: 5px;

  display: flex;
  align-items: center;
  gap: 20px;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
