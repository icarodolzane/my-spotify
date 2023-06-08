/* eslint-disable @next/next/no-img-element */
const URL = 'https://static.preparaenem.com/2021/06/rock-and-roll.jpg'

const ChooseCategoryItem: React.FC = () => {
  return <section>
    <li className="bg-stone-900 p-1 rounded-lg cursor-pointer
    hover:bg-stone-800 active:scale-105 flex flex-col items-center">
    <img
      src={URL}
      alt="category image"
      className="w-20 rounded-lg"
    />
    </li>
  </section>
}

export default ChooseCategoryItem;