import { ReactComponent } from "../../assets/cart.svg";
import styled from "styled-components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

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
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Logo />
      <p>{cartCount} Items</p>
      {isCartOpen && <CartDropdown />}
    </CartIconContainer>
  );
};

export default CartIcon;
