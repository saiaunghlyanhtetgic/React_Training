import React, { useState, useEffect } from 'react'

const MemeMain = () => {
    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        firstText: "",
        secondText: "",
        randomImage: "https://i.imgflip.com/261o3j.jpg"
    })

    useEffect(() => {
        const getMemes = async () => {
            const data = await fetch('https://api.imgflip.com/get_memes');
            const result = await data.json();
            setAllMemes(result.data.memes)
        }
        getMemes();
    }, [])


    const fetchMemeImage = (e) => {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(meme);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main className='px-4 py-2 flex flex-col justify-center'>
            <form>
                <div className='flex md:flex-row flex-col gap-3 justify-center items-center'>
                    <input
                        className='border border-slate-400 px-2 rounded-md placeholder-slate-700 h-8'
                        type="text"
                        placeholder='Top text'
                        name='firstText'
                        value={meme.firstText}
                        onChange={handleChange} />

                    <input
                        className='border border-slate-400 px-2 rounded-md placeholder-slate-700 h-8'
                        type="text"
                        placeholder='Bottom text'
                        name='secondText'
                        value={meme.secondText}
                        onChange={handleChange} />
                </div>

                <button className='w-full bg-slate-600 text-slate-50 mt-4 rounded-md text-xl p-2' onClick={fetchMemeImage}>Generate a meme</button>
            </form>

            <div className='mt-4 relative'>
                <img src={meme.randomImage} alt="Generated Meme" />

                <h2 className='text-4xl text-slate-50 mt-2 absolute top-0 left-0 w-full text-center'>{meme.firstText}</h2>
                <h2 className='text-4xl text-slate-50 mt-2 mb-4  absolute bottom-0 left-0 w-full text-center'>{meme.secondText}</h2>
            </div>
        </main>
    )
}

export default MemeMain