// import own css
import '../assets/css/footer.css'

export default function Footer() {

  return (
    <footer>
      <a href="https://github.com/Wald14/" target="_blank">
        <img className="footer-icon" src="/assets/icons/github-mark-white.png" />
      </a>
      <a href="https://www.linkedin.com/in/lucas-wald-37919b92/" target="_blank">
        <img className="footer-icon" src="/assets/icons/linkedin-white-icon.png" />
      </a>
      <p>
        copyright &copy; 2023 Lucas J Wald
      </p>
    </footer>
  );
};