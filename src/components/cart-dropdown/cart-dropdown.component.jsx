import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContainer, CartCheaper, CartItems } from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
          <h2>No items in your Cart</h2>
          <p>Your favourite items are just a clicks away.</p>
          <CartCheaper>
            <img
              src="/static/images/lowest-price.png"
              width="120"
              height="40"
              alt="Lowest Price"
            />
            <p>You wont find it cheaper anywhere.</p>
          </CartCheaper>
          <Button onClick={checkoutHandler}>Start Shopping</Button>
        </>
      )}
    </CartContainer>
  );
};

export default CartDropdown;
