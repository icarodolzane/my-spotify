import { useContext } from "react";
import { ChooseCategoryContext } from "./ChooseCategoryContext";
import ChooseCategoryItem from "./ChooseCategoryItem";


const ChooseCategory: React.FC = () => {
  const {categories, isLoading} = useContext(ChooseCategoryContext)

  return <section>
    <h1 className="text-3xl font-bold text-center mb-3">Choose a category</h1>
    {isLoading && <p>IS LOADING...</p>}
    <ul className="flex flex-wrap gap-5 justify-center">
      {categories.map(category => <ChooseCategoryItem 
        key={category.id} 
        url={category.url} 
        name={category.name} 
        id={category.id} 
      />)}  
    </ul>
  </section>
}

export default ChooseCategory;