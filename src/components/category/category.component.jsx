import { useParams } from "react-router-dom";
import { PRDOUCTS } from "../../sabkabazaar";
import { CATEGORIES } from "../../sabkabazaar";
import ProductCard from "../product-card/product-card.component";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ProductsContainer = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 10px;
`;

const Category = () => {
  const { category } = useParams();
  const { name } = CATEGORIES.find((cat) => cat.id === category);
  const filteredProducts = PRDOUCTS.filter(
    (product) => product.category === category
  );

  return (
    <CategoryContainer>
      <h2 style={{ color: "#339af0" }}>{name}</h2>
      {filteredProducts.length ? (
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      ) : (
        <div>Nothing available as of now</div>
      )}
    </CategoryContainer>
  );
};

export default Category;
