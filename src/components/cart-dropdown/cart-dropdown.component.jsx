import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContainer, CartCheaper, CartItems } from "./cart-dropdown.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => navigate("/checkout");
  return (
    <CartContainer>
      {cartItems.length ? (
        <>
          <CartItems>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </CartItems>
          <Button onClick={checkoutHandler}>Proceed to Checkout</Button>
        </>
      ) : (
        <>
          <p>Add items to Cart</p>
          <CartCheaper>
            <img
              src="/static/images/lowest-price.png"
              width="150"
              height="50"
              alt="Lowest Price"
            />
            <h3>No items in your Cart</h3>
            <p>Your favourite items are just a clicks away.</p>
          </CartCheaper>
        </>
      )}
    </CartContainer>
  );
};

export default CartDropdown;
