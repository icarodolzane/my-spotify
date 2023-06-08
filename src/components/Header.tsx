const url = "https://p.scdn.co/mp3-preview/eb49a074d2ba3026e6d08a34315af7e220a00a2a?cid=0b297fa8a249464ba34f5861d4140e58"

const Header: React.FC = () =>{
  return (
    <header className="bg-stone-800 p-5 flex justify-between items-center">
      <h1 className="text-4xl font-bold">My Spotify</h1>
      <audio controls>
        <source src={url}/>
      </audio>
    </header>
  )
}

export default Header;