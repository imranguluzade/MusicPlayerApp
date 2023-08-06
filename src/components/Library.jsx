import React from 'react'
import { useEffect } from 'react'
import data from '../data'

const Library = ({ musics, setMusics, setFilteredMusic, toggleLibrary }) => {
    useEffect(
        () => { setMusics(data) }, []
    )

    const handleClick = (clickedMusicId) =>{
        const selectedMusic = musics.filter((music) => music.id === clickedMusicId);
        setFilteredMusic(selectedMusic)
    }
    
    if(toggleLibrary){
        return (
            <div className='container h-screen w-1/5'>
                <h3 className='text-gray-600 font-bold text-2xl pb-7 pt-7'>Library</h3>
                <div className='flex flex-col gap-5'>
                    {musics.map((music) => {
                        return (
                            <div onClick={()=>{handleClick(music.id)}} key={music.id} className='flex gap-2 items-center'>
                                <img className='w-20' src={music.cover}/>
                                <div>
                                    <h4 className='text-gray-500 font-medium text-lg'>{music.name}</h4>
                                    <h5 className='text-gray-500 text-sm font-medium'>{music.artist}</h5>
                                </div>
    
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    }


    

export default Library