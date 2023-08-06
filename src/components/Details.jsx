import React from "react";

const Details = ({ filteredMusic, toggleLibrary, setToggleLibrary }) => {
    function handleClickLib() {
        if (toggleLibrary) {
            setToggleLibrary(false);
        }
        else {
            setToggleLibrary(true);
        }


    }

    if (!filteredMusic || filteredMusic.length === 0) {
        return (
            <div className={`${!toggleLibrary ? "w-screen container mx-auto" : "container mx-auto"}`}>
                <div className="flex justify-between">
                    <h4 className="font-bold text-lg text-gray-800">Waves</h4>
                    <button onClick={() => { handleClickLib() }} className="flex items-center justify-center text-white bg-gray-800 w-20 h-8 ">
                        Library
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="font-bold text-center text-gray-800 flex h-screen justify-center pt-60 ">Please choose Music from Library</div>

            </div>
        );
    }
    return (
        <div className={`${!toggleLibrary ? "w-screen container mx-auto" : "container mx-auto"}`}>
            <div className="flex justify-between">
                <h4 className="font-bold text-lg text-gray-800">Waves</h4>
                <button onClick={() => { handleClickLib() }} className="flex items-center justify-center text-white bg-gray-800 w-20 h-8">
                    Library
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <img className="w-60 rounded-full" src={filteredMusic[0].cover} />
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-semibold text-gray-600">{filteredMusic[0].name}</p>
                    <p className="text-sm text-gray-600">{filteredMusic[0].artist}</p>
                </div>
            </div>

        </div>
    );
};

export default Details;
