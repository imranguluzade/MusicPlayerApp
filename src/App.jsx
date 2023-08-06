import { useState } from 'react'
import Library from './components/Library'
import Music from './components/Music'

function App() {
  const [musics, setMusics] = useState([])
  const [filteredMusic, setFilteredMusic] = useState([])
  const [toggleLibrary, setToggleLibrary] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  console.log(filteredMusic);

  return (
    <div className='flex container mx-auto gap-40'>
      <Library
        musics={musics}
        setMusics={setMusics}
        setFilteredMusic={setFilteredMusic}
        toggleLibrary={toggleLibrary}
      />
      <Music
        musics={musics}
        setFilteredMusic={setFilteredMusic}
        filteredMusic={filteredMusic}
        toggleLibrary={toggleLibrary}
        setToggleLibrary = {setToggleLibrary}
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
      />
    </div>
  )
}

export default App
