import { useEffect, useState } from "react";
import { Character } from "./components/Character";

function App() {
  const baseUrl = 'https://rickandmortyapi.com/api'
  const [characters, setCharacters] = useState({
    loading: true,
    data: null
  });

  useEffect(() => {
    fetch(`${baseUrl}/character`)
    .then( res => res.json())
    .then(data => setCharacters({
      loading: false,
      data: data
    }))

  }, [])

  return (
    <div className="App bg-gradient-to-r from-gray-800 to-purple-700  h-full">
      <header className="App-header">
        <h1 className="p-4 text-white flex justify-center">RICK AND MORTY</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {
          !characters.loading
          &&
          characters.data.results.map(character => (
            <Character key={character.id} info= {character} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
