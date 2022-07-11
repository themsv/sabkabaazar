import React, { Fragment } from "react";
import Button from "../button/button.component";
import {
  DirectoryItemContainer,
  DirectoryImage,
  DirectoryTextBox,
  DirectoryTitle,
  DirectoryDescription,
} from "./directory-item.styles";
const DirectoryItem = ({ categoryData }) => {
  const { name, description, id, imageUrl, enabled } = categoryData;
  return (
    <Fragment>
      {enabled && (
        <DirectoryItemContainer>
          <DirectoryImage src={imageUrl} alt={name} />
          <DirectoryTextBox>
            <DirectoryTitle>{name}</DirectoryTitle>
            <DirectoryDescription>{description}</DirectoryDescription>
            <Button>{`Explore ${name}`}</Button>
          </DirectoryTextBox>
        </DirectoryItemContainer>
      )}
    </Fragment>
  );
};

export default DirectoryItem;
