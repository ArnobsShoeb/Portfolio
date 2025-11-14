import profilePic from "../assets/images/IMG_8622.jpg";
import '../styles/Header.css';

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import specific brand icons

export default function Header() {
  // Replace these with your actual links
  const linkedInUrl = "https://www.linkedin.com/in/shoebmahfuz";
  const githubUrl = "https://github.com/ArnobsShoeb";

  return (
    <section className="hero-section d-flex align-items-center text-light ">
      <div className="d-flex hero-content align-items-center ">
        
        {/* Profile Circle on the left */}
        <div className="profile-circle" data-aos="fade-right">
          <img src={profilePic} alt="Shoeb Mahfuz" />
        </div>

        {/* Text content */}
        <div className="hero-text" data-aos="fade-left">
          
          {/* New div for name and icons */}
          <div className="name-and-icons">
            <h1 className="im">
              Hi, I’m <span className="name">Shoeb Mahfuz</span>
            </h1>
            <div className="social-icons">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon-github" />
                </a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" />
                </a>
            </div>
          </div>
          {/* End of new div */}

          <p className="lead">
            Software Developer <b>-</b> Network Engineer <b>-</b> Cybersecurity Enthusiast <b>-</b> Robotics Innovator
          </p>
          <p className="mail">
            📧 arnobshoeb@gmail.com
          </p>
          <p className="mail">
            📞 +880 1737208993
          </p>
          
        </div>

      </div>
    </section>
  );
}