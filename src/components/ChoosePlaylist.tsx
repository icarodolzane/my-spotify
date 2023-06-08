import ChoosePlaylistItem from "./ChoosePlaylistItem";

const ChoosePlaylist: React.FC = () => {
  return <section>
    <h2 className="text-center mb-3"> Choose a playlist </h2>
    <ul className="flex flex-wrap gap-5 justify-center">
      <ChoosePlaylistItem/>
      <ChoosePlaylistItem/>
      <ChoosePlaylistItem/>
      <ChoosePlaylistItem/>
      <ChoosePlaylistItem/>
      <ChoosePlaylistItem/>
    </ul>
  </section>
}

export default ChoosePlaylist;