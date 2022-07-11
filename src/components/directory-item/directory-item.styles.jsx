import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  display: flex;
  /* width: 100%; */
  height: 250px;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

export const DirectoryImage = styled.img`
  height: 230px;
  width: 40%;
  margin-left: 10px;
`;

export const DirectoryTextBox = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const DirectoryTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;
export const DirectoryDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;
