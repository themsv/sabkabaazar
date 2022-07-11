import { CATEGORIES } from "../../sabkabazaar";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainter } from "./directory.styles";
const Directory = () => {
  return (
    <DirectoryContainter>
      {CATEGORIES.map((category) => (
        <DirectoryItem key={category.id} categoryData={category} />
      ))}
    </DirectoryContainter>
  );
};

export default Directory;
