import { useState } from 'react';

// import components
import Carousel from './Carousel'
import ProjectInfo from './ProjectInfo'

// import own css
import '../assets/css/portfolio.css'


export default function Portfolio() {

  // ----------------------------------------------
  // Controls background image of Portfolio page
  // ----------------------------------------------

  // Used to determine which index the carousel is on
  // Wan to display the image thats to the left of the first slide shown
  const [index, setIndex] = useState(0)

  // Create state for the background image
  const [bgImage, setBgImage] = useState("johannes-plenio-600dw3-1rv4-unsplash.jpg")

  const [projectData, setProjectData] = useState({
    title: "Armory",
    githubLink: "https://github.com/mollydotwhat/mvc-armory",
    deployedLink: "https://mvc-armory-project-3cbd4054ef3a.herokuapp.com/",
    techStack: "HTML / CSS / JavaScript / MySQL / Express / Sequelize / Handlebars / Bcrypt",
    description: "This was the second of three group projects from a coding bootcamp I took. For this project, I was the project manager. This project features an web applciation where the user can build an optimum character loadout. It features a drag and drop application where the user can drag various gear and weapons onto their character. Upon doing so, the characters stats are dynamically updated via JavaScript."
  })

  return (
    <>
      <div style={{
        backgroundImage: `url("/assets/images/${bgImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <ProjectInfo index={index} setIndex={setIndex} projectData={projectData} setProjectData={setProjectData}/>
        <Carousel index={index} setIndex={setIndex} bgImage={bgImage} setBgImage={setBgImage}/>
      </div>
    </>
  );
};