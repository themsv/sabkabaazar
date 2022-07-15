import { CategoriesContainer, CategoryLink } from "./categories.styles";
import { CATEGORIES } from "../../sabkabazaar";

const Categories = () => {
  return (
    <CategoriesContainer>
      {CATEGORIES.map((category) => (
        <CategoryLink to={category.id} key={category.id}>
          {category.name}
        </CategoryLink>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
