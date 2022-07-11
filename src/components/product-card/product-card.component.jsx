import Button from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardTitle,
  ProductImage,
  ProductCardDescription,
  ProductCardFooter,
  ProductPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageURL, description, price, stock } = product;
  return (
    <ProductCardContainer>
      <ProductCardTitle>{name}</ProductCardTitle>
      <ProductImage src={imageURL} alt={name} />
      <ProductCardDescription>
        {description.split(" ").slice(0, 20).join(" ")}...
      </ProductCardDescription>
      <ProductCardFooter>
        <ProductPrice>{`MRP Rs.${price}`}</ProductPrice>
        <Button>Buy Now</Button>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
