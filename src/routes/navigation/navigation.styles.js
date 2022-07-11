import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.header`
  height: 80px;
  margin-bottom: 25px;
  padding: 0 46px;
  background-color: #f783ac;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 130px;
`;
export const NavItems = styled.nav`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
`;
