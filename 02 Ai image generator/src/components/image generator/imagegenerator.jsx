import React, { useRef,useState } from "react";
import "./imagegenerator.css";
import preimage from "../../assets/preimage.jpeg";



const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);



  const imagegenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            Authorization: "Bearer [your_api_key]",
            "User-Agent":"Chrome",
        },
        body:JSON.stringify({
            prompt:`${inputRef.current.value}`,
            n:1,
            size:"512X512",
        }),
      }
    );
    let data = await response.json();
    console.log(data) ;
  };

  return (
    <div className="ai_image_container">
      <div className="header">
        Ai Image <span>Generator</span>
      </div>
      <div className="img_loading">
        <div className="image">
          <img src={image_url === "/" ? preimage : image_url} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Enter any prompt for generating image"
        />
        <div className="generate-btn" onClick={()=>{imagegenerator()}}>Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
