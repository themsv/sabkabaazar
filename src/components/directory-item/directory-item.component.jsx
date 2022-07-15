import React, { Fragment } from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import {
  DirectoryItemContainer,
  DirectoryImage,
  DirectoryTextBox,
  DirectoryTitle,
  DirectoryDescription,
} from "./directory-item.styles";

const DirectoryItem = ({ categoryData, index }) => {
  const { name, description, id, imageUrl } = categoryData;

  return (
    <Fragment>
      <DirectoryItemContainer>
        {index % 2 == 0 ? (
          <>
            <DirectoryImage src={imageUrl} alt={name} />
            <DirectoryTextBox>
              <DirectoryTitle>{name}</DirectoryTitle>
              <DirectoryDescription>{description}</DirectoryDescription>
              <Link to={`products/${id}`}>
                <Button>{`Explore ${name}`}</Button>
              </Link>
            </DirectoryTextBox>
          </>
        ) : (
          <>
            <DirectoryTextBox>
              <DirectoryTitle>{name}</DirectoryTitle>
              <DirectoryDescription>{description}</DirectoryDescription>
              <Link to={`products/${id}`}>
                <Button>{`Explore ${name}`}</Button>
              </Link>
            </DirectoryTextBox>
            <DirectoryImage src={imageUrl} alt={name} />
          </>
        )}
      </DirectoryItemContainer>
    </Fragment>
  );
};

export default DirectoryItem;
