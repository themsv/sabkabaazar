import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageURL} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x &#8377;{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
