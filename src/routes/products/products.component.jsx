import { PRDOUCTS } from "../../sabkabazaar";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContainer } from "./products.styles";
const Products = () => {
  return (
    <ProductsContainer>
      {PRDOUCTS?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
