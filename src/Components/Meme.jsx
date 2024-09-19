import memesData from "../memesData";

export function Meme() {
  function handleImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <div className="meme">
      <div className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button className="form-button" onClick={handleImage}>
          Get a new meme image
        </button>
      </div>
    </div>
  );
}
