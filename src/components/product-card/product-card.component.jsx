import Button from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardTitle,
  ProductImage,
  ProductCardDescription,
  ProductCardFooter,
  ProductPrice,
} from "./product-card.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageURL, description, price, stock } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <ProductCardContainer>
      <ProductCardTitle>{name}</ProductCardTitle>
      <ProductImage src={imageURL} alt={name} />
      <ProductCardDescription>
        {description.split(" ").slice(0, 20).join(" ")}...
      </ProductCardDescription>
      <ProductCardFooter>
        <ProductPrice>{`MRP Rs.${price}`}</ProductPrice>
        <Button onClick={() => addItemToCart(product)}>Buy Now</Button>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
