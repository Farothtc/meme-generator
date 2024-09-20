import memesData from "../memesData";
import { useState } from "react";

export function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function handleImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(() => memesArray[randomNumber].url);
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
        <img src={memeImage} />
      </div>
    </>
  );
}
