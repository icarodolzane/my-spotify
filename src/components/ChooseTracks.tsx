import ChooseTrackItem from "./ChooseTrackItem";

const ChooseTracks: React.FC = () => {
  return <section>
    <h2 className="text-center mb-3"> Choose a track </h2>
    <ul className="flex flex-wrap gap-5 justify-center">
      <ChooseTrackItem/>
      <ChooseTrackItem/>
      <ChooseTrackItem/>
      <ChooseTrackItem/>
      <ChooseTrackItem/>
      <ChooseTrackItem/>
    </ul>
  </section>
}

export default ChooseTracks;