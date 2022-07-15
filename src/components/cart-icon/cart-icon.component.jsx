import { ReactComponent } from "../../assets/cart.svg";
import styled from "styled-components";
import { useState } from "react";
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
  const [showCart, setShowCart] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setShowCart(!showCart)}>
      <Logo />
      <p>{cartCount} Items</p>
      {showCart && <CartDropdown />}
    </CartIconContainer>
  );
};

export default CartIcon;
