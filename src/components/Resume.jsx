// https://bobbyhadz.com/blog/react-download-file

import resumePDF from '../assets/pdf/luke_wald_resume_2024.pdf'
import '../assets/css/resume.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


export default function Resume() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="resume-page">
      <div className="resumePage-resume">
        <a
          href={resumePDF}
          download="luke_wald_resume"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="success"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >Download Resume</Button>
        </a>
      </div>
      <div className="resumePage-tech-stack">
        <p className="aboutMe-list">Tech Stack at Bootcamp:</p>
        <ul>
          <li>HTML</li>
          <li>CSS / Bootstrap</li>
          <li>JavaScript / JQuery / JSON</li>
          <li>React</li>
          <li>MongoDb/Mongoose</li>
          <li>MySQL/Sequelize</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
};