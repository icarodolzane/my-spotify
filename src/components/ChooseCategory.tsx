import ChooseCategoryItem from "./ChooseCategoryItem";

const ChooseCategory: React.FC = () => {
  return <section>
    <h2 className="text-center mb-3"> Choose a category </h2>
    <ul className="flex flex-wrap gap-5 justify-center">
      <ChooseCategoryItem/>
      <ChooseCategoryItem/>
      <ChooseCategoryItem/>
      <ChooseCategoryItem/>
      <ChooseCategoryItem/>
      <ChooseCategoryItem/>
    </ul>
  </section>
}

export default ChooseCategory;