import React from 'react'
import './imagegenerator.css'
import preimage from '../../assets/preimage.jpeg'

const ImageGenerator = () => {
  return (
    <div className='ai_image_container'>
        <div className="header">Ai Image <span>Generator</span></div>
        <div className="img_loading">
            <div className="image"><img src={preimage} alt="" /></div>
        </div>
        <div className="search-box">
            <input type="text" className='search-input' placeholder='Enter any prompt for generating image' />
            <div className="generate-btn">Generate</div>
        </div>
  
    </div>
  )
}

export default ImageGenerator