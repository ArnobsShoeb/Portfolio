import "../styles/Contact.css";
import { useEffect } from "react";
// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import specific brand icons
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  // Replace these with your actual profile links
  const facebookUrl = "https://www.facebook.com/arnob.shoeb";
  const instagramUrl = "https://www.instagram.com/gratified_killer/";
  const linkedInUrl = "https://www.linkedin.com/in/shoebmahfuz";
  const githubUrl = "https://github.com/ArnobsShoeb";

  return (
    <section>
      <div className="bodyy" >
        
        {/* Map Container - Now wrapped in a div */}
        <div className="map-container" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.819221094198!2d90.41543045426165!3d23.784623658349826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bd92b5fe8f%3A0x930815d7bdffdd30!2sNorth%20Badda%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1763146827809!5m2!1sen!2sbd"
            title="Location Map"
            width="50%" // Set to 100% to ensure it takes full width
            height="200"
            style={{ border: 10 } }
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          
        </div>
        <div >
        <p className="mail"  data-aos="fade-left">
            📧 arnobshoeb@gmail.com
          </p>
          <p className="mail" data-aos="fade-right">
            📞 +880 1737208993
          </p>
      </div>

        {/* Social Icons Container */}
        <div className="contact-icons-container" data-aos="fade-up">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon facebook-icon"
            />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icon instagram-icon"
            />
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon linkedin-icon"
            />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icon github-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
