/* eslint-disable @next/next/no-img-element */

type Props = {
  url: string, 
  name: string,
  id: string
}

const ChooseCategoryItem: React.FC<Props> = ({url, name, id}) => {
  return <section>
    <li className="bg-stone-900 p-1 rounded-lg cursor-pointer
    hover:bg-stone-800 active:scale-105 flex flex-col items-center">
    <img
      src={url}
      alt={ `category ${name}` }
      className="w-20 rounded-lg"
    />
    <p className="text-center">{name}</p>
    </li>
  </section>
}

export default ChooseCategoryItem;