import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <section className="footer section">
      <a
        href="https://www.linkedin.com/in/adrian-zabolitzki/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="social-button" />
      </a>

      <a
        href="https://github.com/ganuza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social-button" />
      </a>
    </section>
  );
}
export default Footer;
