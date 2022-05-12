import React, {useEffect, useState} from 'react';
import './Slide.css';
import imageList from './Imagelist';

function Slide(images = [], autoPlay = true, autoPlayTime = 15000, ...props) {

  images=imageList;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() =>{
    const timer = setTimeout(() => {
      console.log("currentSlide", currentSlide)
      const newSlideIndex = currentSlide > images.length - 2 ? 0 : currentSlide + 1;
      
      setCurrentSlide(newSlideIndex)
    }, autoPlayTime);
    
    return () => clearTimeout(timer);
  }, [currentSlide])
  
  return (
    <>
      <div className="slideShow-container" {...props}>
          {images.map((imageUrl, index)=>(
            <div className="slide" key={index} style={{ 
              backgroundImage: `url(${imageUrl.src})`, marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,}}></div>
          ))}
            <div className="slogan">
              <img src="img/logoWhite-nobg.png" alt="logowhite" className="slide-text" /> 
            </div>
        </div>

       
    </>
  )

}

export default Slide

