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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  console.log(meme);

  return (
    <>
      <div className="meme">
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form-button" onClick={() => handleImage()}>
            Get a new meme image
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}
