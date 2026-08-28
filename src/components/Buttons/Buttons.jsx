import './Buttons.css';
import { FaAddressCard, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Buttons() {
  return (
    <section className="buttons section">
      <article>
        <a
          href="/adrian-zabolitzki.vcf"
          download="Adrian-Zabolitzki.vcf"
          className="contact button"
        >
          <FaAddressCard />
          Save Contact
        </a>
      </article>
      <article>
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
      </article>
    </section>
  );
}

export default Buttons;
