import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../assets/css/aboutMe.css'


export default function AboutMe() {
  return (
    <div className="aboutMe-page">
      <Row>
        <div className="aboutMe-top-container">
          <img className="headshot" src="/assets/images/lukewald-headshot.jpg" alt="Headshot photo of Luke Wald" />
          <h1>About Me:</h1>
        </div>
      </Row>
      <Row>
        <div className="about-me-info">
          <p>I'm a former Senior Manufacturing Technology Engineer who transitioned into a Software Engineer role after completing the Full Stack Web Development bootcamp at the University of Minnesota. I have over 9+ years of experience in critical thinking, data analysis, communication, leadership, creativity, and customer service. </p>
          <p>I graduated in 2014 with a degree in Biology from St. John’s University, MN. After graduation, I started working as an Analytical Chemist in 3M's Manufacturing Forensics Lab. I had never heard of FTIR analysis before this job and had to self-teach myself. I quickly climbed the ladder and became one of the company’s experts in the field. My overall responsibility was to bridge the gap between the manufacturing and chemistry worlds. I solved a wide range code red manufacturing problems, many that involved legacy products.</p>
          <p>In May of 2023, after 9 amazing years, I was laid off from 3M. The thing I miss most is the people, they were what made the job exciting. </p>
          <p>The career change to Full-stack Web Development is both nerve-racking and exciting. The University of Minnesota's Full Stack Web Development Bootcamp was a welcomed challenge. I immediately fell in love with coding, especially the problem-solving aspect. In this course we started with HTML/CSS/JavaScript and worked up to producing multiple MERN stack web apps. </p>
          <p>Since the bootcamp, I've continued to develop my skill set. Most recently I've been freelancing for a client, developing him a prototype for an auto maintenance scheduling app. I've also spent time working on passion projects, such as a site for the men's hockey team I captain. Building this allowed me to continue to develop my skills in building RESTful API's</p>
          <p>When it comes to coding, I enjoy both the frontend and backend aspects. On the frontend I enjoy focusing on user experience, making sure everything is very simple to use, because if it's difficult, nobody will use it. On the backend, I enjoy the figuring out how to organize the data in the most logical way to meet the frontend's needs. </p>
        </div>
      </Row>
    </div>
  );
};