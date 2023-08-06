import React from 'react'
import Details from './Details'
import Progress from './Progress'
import Controls from './Controls'

const Music = ({ musics, filteredMusic, toggleLibrary, setToggleLibrary, isPlaying, setIsPlaying, setFilteredMusic }) => {



  return (
    <div className={`${(toggleLibrary) ? "w-4/5 pt-7 pb-7 flex flex-col items-center gap-20" : "pt-7 pb-7 flex flex-col items-center gap-20"}`}>
      <Details
      setFilteredMusic = {setFilteredMusic}
        musics={musics}
        filteredMusic={filteredMusic}
        toggleLibrary={toggleLibrary}
        setToggleLibrary={setToggleLibrary} />
      <Progress />
      <Controls
        musics={musics}
        filteredMusic={filteredMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default Music