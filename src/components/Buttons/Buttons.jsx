import './Buttons.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Buttons() {
  return (
    <section className="buttons section">
      <a href="mailto:adrianzab@gmail.com" className="email button">
        <FaEnvelope />
        Email
      </a>

      <a
        href="https://www.linkedin.com/in/adrian-zabolitzki/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin button"
      >
        <FaLinkedin />
        LinkedIn
      </a>
    </section>
  );
}

export default Buttons;
