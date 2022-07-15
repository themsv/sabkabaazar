import Categories from "../../components/categories/categories.component";
import Products from "../../components/products/products.component";
import Category from "../../components/category/category.component";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const CategoryProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 3fr;
  padding: 0 10px;
  margin-bottom: 40px;
`;

const CategoryProducts = () => {
  return (
    <CategoryProductsContainer>
      <Categories />
      <Routes>
        <Route index element={<Products />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoryProductsContainer>
  );
};

export default CategoryProducts;
