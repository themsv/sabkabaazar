import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import {
  NavigationContainer,
  LogoImage,
  NavLink,
  NavItems,
} from "./navigation.styles.js";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to="/">
          <LogoImage src="/static/images/logo.png" />
        </NavLink>
        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/sign-in">SignIn</NavLink>
          <NavLink to="/register">Register</NavLink>
          <CartIcon />
        </NavItems>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
