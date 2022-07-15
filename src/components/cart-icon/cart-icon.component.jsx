import { ReactComponent } from "../../assets/cart.svg";
import styled from "styled-components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  p {
    font-size: 12px;
    color: white;
  }
`;
const Logo = styled(ReactComponent)`
  width: 30px;
  fill: white;
`;

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <Logo />
      <p>{cartCount} Items</p>
      {isCartOpen && <CartDropdown />}
    </CartIconContainer>
  );
};

export default CartIcon;
