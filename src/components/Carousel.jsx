// https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

import { useState, useEffect } from 'react';


export default function Carousel(props) {
  // ------------------------------------------------------------
  //  Handles which background should be returned based off index
  // ------------------------------------------------------------

  function updateBackground() {
    switch (props.index) {
      case 0:
        // image from 7th slide
        props.setBgImage("northfolk-Ts0g6PHe1q0-unsplash.jpg")
        props.setProjectData({
          title: "Giftify",
          githubLink: "https://github.com/GrantMitchell24/gift-guide",
          deployedLink: "https://gift-guide-020589889d66.herokuapp.com/",
          techStack: "MERN Stack",
          description: "This was the final group project. Giftify allows the user to make a wish-list of items they'd like to receive. This app allows the purchaser to buy with confidence as they can mark if the gift has been purchased or not, eliminating the risk of duplicate gifts. The list owner cannot see if it's been purchased. Users can form groups to help keep their family and friends organized."
        })
        break;
      case 1:
        // image from last slide
        props.setBgImage("nik-shuliahin-JOzv_pAkcMk-unsplash.jpg")
        props.setProjectData({
          title: "Armory",
          githubLink: "https://github.com/mollydotwhat/mvc-armory",
          deployedLink: "https://mvc-armory-project-3cbd4054ef3a.herokuapp.com/",
          techStack: "MySQL / Handlebars / JavaScript / HTML / CSS",
          description: "This was the second of three group projects, where I was the project manager. This is a web application where the user can build a character loadout. It features a drag and drop application where the user can drag various gear onto their character. Upon doing so, the characters stats are dynamically updated."
        })
        break;
      case 2:
        // image from 1st slide
        props.setBgImage("tomas-jasovsky-ZLZ88BR5NTk-unsplash.jpg")
        props.setProjectData({
          title: "Cocktail Generator",
          githubLink: "https://github.com/Matt0Stark/cocktail_generator",
          deployedLink: "https://matt0stark.github.io/cocktail_generator/",
          techStack: "API / JavaScript / HTML / CSS",
          description: "This was the first of three group projects. This is a cocktail generator web application. After verifying they are 21, the user has the option to either search by a drink's name or up to 3 ingredients. The user may save their favorites to the browser's local storage."
        })
        break;
      case 3:
        // image from 2nd slide
        props.setBgImage("thought-catalog-UK78i6vK3sc-unsplash.jpg")
        props.setProjectData({
          title: "Tech Blog",
          githubLink: "https://github.com/Wald14/tech_blog",
          deployedLink: "https://wald14-tech-blog-62593c4a57a3.herokuapp.com/",
          techStack: "MongoDB / Handlebars / JavaScript / HTML / CSS",
          description: "This was a MVC (Model-View-Controller) homework assignment from bootcamp. It is a blog site where the users can login, write blogs, and comment on other user's blogs."
        })
        break;
      case 4:
        // image from 3rd slide
        props.setBgImage("nasa-Q1p7bh3SHj8-unsplash.jpg")
        props.setProjectData({
          title: "Social Media Backend",
          githubLink: "https://github.com/Wald14/social-network-api",
          deployedLink: "",
          techStack: "MySQL / Handlebars / JavaScript / HTML / CSS",
          description: "This was a homework assignment from bootcamp. This is an API for an user's social network that uses a NoSQL database, allowing the user's site to handle large amounts of unstructured data."
        })
        break;
      case 5:
        // image from 4th slide
        props.setBgImage("johannes-plenio-600dw3-1rv4-unsplash.jpg")
        props.setProjectData({
          title: "Weather App",
          githubLink: "https://github.com/Wald14/weather-dashboard",
          deployedLink: "https://wald14.github.io/weather-dashboard/",
          techStack: "Local Storage / API / JavaScript / HTML / CSS",
          description: "This was a homework assignment from bootcamp. It is a weather dashboard application. The user may search for a city to get the current weather and the 5-day forecast for that city. The city is saved to their search history via local storage, which the user can clear at any point."
        })
        break;
      case 6:
        // image from 5th slide
        props.setBgImage("clark-young-ueZXMrZFFKQ-unsplash.jpg")
        props.setProjectData({
          title: "E-Commerce Backend",
          githubLink: "https://github.com/Wald14/e-commerce_back_end",
          deployedLink: "",
          techStack: "MySQL / JavaScript / HTML / CSS",
          description: "This was a homework assignment from bootcamp. This application allows the user to have a back end for their e-commerce website. They can manage product categories, products, and tags via API REST (Representational state transfer) fetch calls."
        })
        break;
    }
  }


  // ---------------------------------------------
  //  Slide movement
  // ---------------------------------------------
  const [shift, setShift] = useState(0)

  // UPDATE IF ADDING OR REMOVING SLIDES
  const numOfSlides = 7;

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

  const handleSlideClick = (e) => {
    const newShift = Number(e.currentTarget.getAttribute("slide_final_shift"))
    const newIndex = Number(e.currentTarget.getAttribute("slide_index"))
    setShift(newShift)
    props.setIndex(newIndex)
  }

  useEffect(() => {
    updateBackground()
  }, [props.index])

  return (
    <div className="carousel">
      <div className="slider">
        {/* Slides Div*/}
        <div className="slide-holder">

          {/* 1st Slide */}
          <div className="slide" style={{ transform: `translateX(${shift}%)` }} slide_index={1} slide_final_shift={-110} onClick={handleSlideClick}>
            <img
              src="/assets/images/nik-shuliahin-JOzv_pAkcMk-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">ARMORY</h2>
          </div>

          {/* 2nd Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 110}%)` }} slide_index={2} slide_final_shift={-220} onClick={handleSlideClick}>
            <img
              src="/assets/images/tomas-jasovsky-ZLZ88BR5NTk-unsplash.jpg"
              alt="medieval chest armor"
            />
            <h2 className="slide-title">COCKTAIL GENERATOR</h2>
          </div>

          {/* 3rd Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 220}%)` }} slide_index={3} slide_final_shift={-330} onClick={handleSlideClick}>
            <img
              src="/assets/images/thought-catalog-UK78i6vK3sc-unsplash.jpg"
              alt="a cocktail"
            />
            <h2 className="slide-title">TECH BLOG</h2>
          </div>

          {/* 4th Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 330}%)` }} slide_index={4} slide_final_shift={-440} onClick={handleSlideClick}>
            <img
              src="/assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">SOCIAL MEDIA BACKEND</h2>
          </div>

          {/* 5th Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 440}%)` }} slide_index={5} slide_final_shift={-550} onClick={handleSlideClick}>
            <img
              src="/assets/images/johannes-plenio-600dw3-1rv4-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">WEATHER APP</h2>
          </div>

          {/* 6th Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 550}%)` }} slide_index={6} slide_final_shift={-660} onClick={handleSlideClick}>
            <img
              src="/assets/images/clark-young-ueZXMrZFFKQ-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">E-COMMERCE BACKEND</h2>
          </div>

          {/* 7th Slide */}
          <div className="slide" style={{ transform: `translateX(${shift + 660}%)` }} slide_index={0} slide_final_shift={0} onClick={handleSlideClick}>
            <img
              src="/assets/images/northfolk-Ts0g6PHe1q0-unsplash.jpg"
              alt=""
            />
            <h2 className="slide-title">Giftify</h2>
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