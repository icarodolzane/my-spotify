import { useEffect } from "react";
import ChooseCategoryItem from "./ChooseCategoryItem";
const URL = 'https://static.preparaenem.com/2021/06/rock-and-roll.jpg'
const ChooseCategory: React.FC = () => {
  // useEffect(() => {
  //   fetch('/api/categories')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])
  return <section>
    <h2 className="text-center mb-3"> Choose a category </h2>
    <ul className="flex flex-wrap gap-5 justify-center">
      <ChooseCategoryItem id='1' name="rock" url={URL}/>
      <ChooseCategoryItem id='1' name="rock" url={URL}/>
      <ChooseCategoryItem id='1' name="rock" url={URL}/>
      <ChooseCategoryItem id='1' name="rock" url={URL}/>
      <ChooseCategoryItem id='1' name="rock" url={URL}/>
    </ul>
  </section>
}

export default ChooseCategory;