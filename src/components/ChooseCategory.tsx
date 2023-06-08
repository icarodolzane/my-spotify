import { useEffect, useState } from "react";
import ChooseCategoryItem from "./ChooseCategoryItem";
import { BackendGateway } from "@/gateways/BackendGateway";
const URL = 'https://static.preparaenem.com/2021/06/rock-and-roll.jpg'

export type Category = {
  id: string,
  url: string,
  name: string,
}

const ChooseCategory: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setIsLoading(true)
    BackendGateway.fetchCategories()
      .then(categories => setCategories(categories))
      .finally(()=> setIsLoading(false))
  },[])
  return <section>
    <h2 className="text-center mb-3"> Choose a category </h2>
    {isLoading && <p className="text-center mb-3">IS LOADING ...</p>}
    <ul className="flex flex-wrap gap-5 justify-center">
      {categories.map(category => 
      <ChooseCategoryItem
        key={category.id}
        id={category.id}
        url={category.url}
        name={category.name}
      />)
      }
    </ul>
  </section>
}

export default ChooseCategory;