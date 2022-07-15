import Button from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardTitle,
  ProductImage,
  ProductCardDescription,
  ProductCardFooter,
  ProductPrice,
} from "./product-card.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
const ProductCard = ({ product }) => {
  const { name, imageURL, description, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <ProductCardTitle>{name}</ProductCardTitle>
      <ProductImage src={imageURL} alt={name} />
      <ProductCardDescription>
        {description.split(" ").slice(0, 20).join(" ")}...
      </ProductCardDescription>
      <ProductCardFooter>
        <ProductPrice>{`MRP Rs.${price}`}</ProductPrice>
        <Button onClick={addProductToCart}>Buy Now</Button>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
