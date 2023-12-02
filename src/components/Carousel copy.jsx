// // https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

// import { useState, useRef, useEffect } from 'react';

// // import own css
// import './card.css'



// export default function ControlledCarousel() {


//   const slides = document.querySelectorAll(".slide");

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${indx * 100}%)`;
//   })
  

//   const [curSlide, setCurSlide] = useState(0)

//   const handleClick = () => {

//     // console.log(curSlide)
//     // setCurSlide(curSlide + 1);
//     // console.log(curSlide)

//     // setCurSlide(curSlide + 1);
//     slides.forEach((slide, indx) => {
//       slide.style.transform = `translateX(${(indx - 1) * 100}%)`
//     })
//   }



//   // // current slide counter
//   // let curSlide = 0;

//   // // select next slide button
//   // const nextSlide = document.querySelector(".btn-next");

//   // // add event listener and next slide functionality
//   // nextSlide.addEventListener("click", function () {
//   //     curSlide++;

//   //   slides.forEach((slide, indx) => {
//   //     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   //   });
//   // });


//   // const [curSlideIndx, setCurSlideIndx] = useState(0)


//   // function handleAdvanceSlide(){
//   //   // Add 1 to curSlideIndx
//   //   let nextSlide = curSlideIndx + 1;
//   //   // Set that as the current slide indx
//   //   setCurSlideIndx(nextSlide)

//   //   // For each slide, update the translateX to be -100% it's previouds value
//   //   // slides.forEach((slide, indx) => {
//   //   //   slide.setAttribute('style', `transform: translateX(${(indx-curSlideIndx)*100}%)`)
//   //   // });

//   //   slides.forEach((slide, indx) => {
//   //     const curX = slide.getAttribute('style');
//   //     console.log(curX)
//   //     slide.setAttribute('style', `transform: translateX(${(indx-curSlideIndx)*100}%)`)
//   //     console.log(`transform: translateX(${(indx-curSlideIndx)*100}%)`)
//   //   });

//   // }


//   return (
//     <div className="carouselPage">
//       <div className="slider">
//         {/* First Slide */}
//         <div className="slide armory" >
//           <img
//             src="/assets/images/nik-shuliahin-JOzv_pAkcMk-unsplash.jpg"
//             alt=""
//           />
//           <h2 className="slide-title">ARMORY</h2>
//         </div>

//         {/* Second Slide */}
//         <div className="slide cocktail-generator">
//           <img
//             src="/assets/images/tomas-jasovsky-ZLZ88BR5NTk-unsplash.jpg"
//             alt=""
//           />
//           <h2 className="slide-title">Cocktail Generator</h2>
//         </div>

//         {/* Third Slide */}
//         <div className="slide other3">
//           <img
//             src="https://source.unsplash.com/random?landscape"
//             alt=""
//           />
//           <h2 className="slide-title">Other 3</h2>
//         </div>

//         {/* Fourth Slide */}
//         <div className="slide other4">
//           <img
//             src="https://source.unsplash.com/random?cars"
//             alt=""
//           />
//           <h2 className="slide-title">Other 4</h2>
//         </div>

//         {/* Fifth Slide */}
//         <div className="slide other5">
//           <img
//             src="https://source.unsplash.com/random?night"
//             alt=""
//           />
//           <h2 className="slide-title">Other 5</h2>
//         </div>

//         {/* Sixth Slide */}
//         <div className="slide other6">
//           <img
//             src="https://source.unsplash.com/random?city"
//             alt=""
//           />
//           <h2 className="slide-title">Other 6</h2>
//         </div>

//         {/* Next and Prev Buttons */}
//         <button className="btn btn-next" onClick={handleClick}>&gt;</button>
//         <button className="btn btn-prev">&lt;</button>
//       </div>



//     </div>
//   );
// }