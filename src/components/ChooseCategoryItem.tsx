/* eslint-disable @next/next/no-img-element */
type Props = {
  url: string,
  name: string,
  id: string
}

const ChooseCategoryItem: React.FC<Props> = ({id, name, url}) => {
  return (
    <li className="bg-stone-900 p-3 rounded-lg cursor-pointer
    hover:bg-stone-800 active:scale-105 flex flex-col items-center">
      <img src={url} alt={name} className="w-16 mb-2 rounded-full" />
      <p className="text-center">{name}</p>
    </li>
  )
}

export default ChooseCategoryItem