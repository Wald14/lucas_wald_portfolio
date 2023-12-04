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
          <p>I am fairly new to the web development space. In September of 2023, I decided it was time for a career change and enrolled in the University of Minnesota's Full Stack Web Development Bootcamp. I am set to complete this course in the middle of December.</p>
          <p>I graduated in 2014 with a degree in Biology from St. John’s University located in MN. After graduation, I worked for 3M as an "Analytical chemist". In May of 2023, after 9 amazing years, I was laid off. The final title I held was "Senior Manufacturing Technology Engineer". It was my responsibility to bridge the gap between the manufacturing and chemistry worlds. I used chemical analytical tools to solve various code red manufacturing problems, many that involved legacy products.</p>
          <p>The career change to Full-stack Web Development is both nerve-racking and exciting. In September of 2022 (exactly one year prior to the start of my bootcamp) I talked with a software engineer about making the career change. I tried the free 'Harvard CS50 - Intro to Computer Science' course to get my feet wet. I immediately fell in love with coding, especially the problem-solving aspect. </p>
          <p>This love only grew over while taking the University of Minnesota's bootcamp. I enjoy both the frontend and backend aspects. I look forward to a long career in coding.</p>
        </div>
      </Row>
    </div>
  );
};