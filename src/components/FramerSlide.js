import React, {useRef, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import images from './FramerImg.js';
import './FramerSlide.css';

function FramerSlide() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

  }, []);

  return (
    <>
      <motion.div ref={carousel} className='carousel'>
        <motion.div drag='x'
         dragConstraints={{right: 0, left: -width}}
         whileTap={{cursor: "grabbing"}}
         className='inner-carousel'>
          {images.map(image =>{
            return(
              <motion.div className='item'>
                <img src={image} alt='' />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

export default FramerSlide