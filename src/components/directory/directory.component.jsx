import { CATEGORIES } from "../../sabkabazaar";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainter } from "./directory.styles";
const Directory = () => {
  return (
    <DirectoryContainter>
      {CATEGORIES.filter((category) => category.enabled).map(
        (category, _index) => (
          <DirectoryItem
            key={category.id}
            categoryData={category}
            index={_index}
          />
        )
      )}
    </DirectoryContainter>
  );
};

export default Directory;
