import memesData from "../memesData";
import { useState } from "react";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  // const [memeImage, setMemeImage] = useState("");

  function handleImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <>
      <div className="meme">
        <div className="form">
          <input type="text" placeholder="Top text" className="form-input" />
          <input type="text" placeholder="Bottom text" className="form-input" />
          <button className="form-button" onClick={() => handleImage()}>
            Get a new meme image
          </button>
        </div>
        <img src={meme.randomImage} className="meme-image" />
      </div>
    </>
  );
}
