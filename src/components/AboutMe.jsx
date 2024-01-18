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
          <p>I'm a former Senior Manufacturing Technology Engineer who transitioned into a Software Engineer role after completing theFull Stack Development Web Certification at the University of Minnesota. I have over 9+ years of experience in critical thinking, data analysis, communication, leadership, creativity, and customer service. </p>
          <p>I graduated in 2014 with a degree in Biology from St. John’s University, MN. After graduation, I started working as an Analytical Chemist for 3M. I had never heard of FTIR analysis before this job and had too self-teach myself both this and some chemistry. I quickly climbed the ladder and became one of the company’s experts in this field, along with multiple other analytical techniques. While I moved up the ladder at 3M, my overall responsibility didn't change: I was to bridge the gap between the manufacturing and chemistry worlds. I used analytical chemistry tools to solve a wide range code red manufacturing problems, many that involved legacy products</p>
          <p>In May of 2023, after 9 amazing years at 3M, I was laid off. The thing I miss most about 3M is the people, they were what made the job exciting. </p>
          <p>The career change to Full-stack Web Development is both nerve-racking and exciting. In September of 2022 (exactly one year prior to the start of my bootcamp) I talked with a software engineer about making the career change. I tried the free 'Harvard CS50 - Intro to Computer Science' course to get my feet wet. I immediately fell in love with coding, especially the problem-solving aspect. The University of Minnesota's Full Stack Web Development Bootcamp was a welcome challenge. I enjoyed learning from the ground up. Starting with HTML/CSS/JavaScript and working up to producing multiple MERN stack web apps. </p>
          <p>When it comes to coding, I enjoy both the frontend and backend aspects. On the frontend I like making things user friendly because if it's difficult to use, nobody will use it. On the backend, I enjoy the figuring out how to organize the data in the most logical way to meet the frontend's needs. </p>
        </div>
      </Row>
    </div>
  );
};