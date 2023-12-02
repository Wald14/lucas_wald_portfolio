// https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

import { useState, useEffect } from 'react';


export default function Carousel(props) {
  // Props
  // [index, setIndex] -> Slide index tracker
  // [bgImage, setBgImage] -> Background Image Setter

  // ------------------------------------------------------------
  //  Handles which background should be returned based off index
  // ------------------------------------------------------------

  function updateBackground() {
    switch (props.index) {
      case 0:
        // image from last slide
        props.setBgImage("dominik-klos-U5Gii2VmJVk-unsplash.jpg")
        break;
      case 1:
        // image from 1st slide
        props.setBgImage("tomas-jasovsky-ZLZ88BR5NTk-unsplash.jpg")
        break;
      case 2:
        // image from 2nd slide
        props.setBgImage("christin-hume-Hcfwew744z4-unsplash.jpg")
        break;
      case 3:
        // image from 3rd slide
        props.setBgImage("nasa-Q1p7bh3SHj8-unsplash.jpg")
        break;
      case 4:
        // image from 4th slide
        props.setBgImage("johannes-plenio-600dw3-1rv4-unsplash.jpg")
        break;
      case 5:
        // image from 5th slide
        props.setBgImage("clark-young-ueZXMrZFFKQ-unsplash.jpg")
        break;
    }
  }


  // ---------------------------------------------
  //  Slide movement
  // ---------------------------------------------
  const [shift, setShift] = useState(0)

  // UPDATE IF ADDING OR REMOVING SLIDES
  const numOfSlides = 6;

  // Converts slide number to a value that can be used as a percentage for translateX
  const slideAdj = ((numOfSlides - 1) * 110);

  // ---------------------------------------------
  //  Buttons (Moves slides AND background image)
  // ---------------------------------------------
  // Advances slides
  const handleNextBtn = () => {
    if (shift === -1 * slideAdj) {
      // If at the end of the slide:
      // Shift all slides back to default positions
      setShift(0)
      props.setIndex(0)

    } else {
      // Shift all slides one slide to the left
      setShift(shift - 110);
      props.setIndex(props.index + 1)
    }
    console.log(props.index)
  }

  // Retreat slides
  const handlePrevBtn = () => {
    if (shift === 0) {
      // If at the begining of slides
      // Shift to the end of the carousel
      setShift(-slideAdj)
      props.setIndex(numOfSlides - 1)

    } else {
      // Shift all slides one slide to the right
      setShift(shift + 110);
      props.setIndex(props.index - 1)
    }
  }

  useEffect(() => {
    updateBackground()
  }, [props.index])

  return (
    <div className="carousel">
      <div className="slider">
        {/* Slides Div*/}
        <div className="slide-holder">
          {/* First Slide */}
          <div className="slide" style={{ transform: `translateX(${shift}%)` }}>
            <img
              src="/assets/images/tomas-jasovsky-ZLZ88BR5NTk-unsplash.jpg"
              alt="medieval chest armor"
            />
            <h2 className="slide-title">COCKTAIL GENERATOR</h2>
          </div>

          {/* Second Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 110}%)` }}>
            <img
              src="/assets/images/christin-hume-Hcfwew744z4-unsplash.jpg"
              alt="a cocktail"
            />
            <h2 className="slide-title">TECH BLOG</h2>
          </div>

          {/* Third Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 220}%)` }}>
            <img
              src="/assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">SOCIAL MEDIA BACKEND</h2>
          </div>

          {/* Fourth Slide */}
          <div className="slide other4" style={{ transform: `translateX(${shift + 330}%)` }}>
            <img
              src="/assets/images/johannes-plenio-600dw3-1rv4-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">WEATHER APP</h2>
          </div>

          {/* Fifth Slide */}
          <div className="slide other5" style={{ transform: `translateX(${shift + 440}%)` }}>
            <img
              src="/assets/images/clark-young-ueZXMrZFFKQ-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">E-COMMERCE BACKEND</h2>
          </div>

          {/* Sixth Slide */}
          <div className="slide other6" style={{ transform: `translateX(${shift + 550}%)` }}>
            <img
              src="/assets/images/dominik-klos-U5Gii2VmJVk-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">ARMORY</h2>
          </div>
        </div>


        {/* Buttons Div*/}
        <div className="button-holder">
          <button className="button btn-next round" onClick={handleNextBtn}>&gt;</button>
          <button className="button btn-prev round" onClick={handlePrevBtn}>&lt;</button>
        </div>
      </div>
    </div>
  );
}