import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Resume.css";
import thesispic from "../assets/images/thesis.jpg"
import ic5 from "../assets/images/ic5.jpg"
import soccerbot from "../assets/images/soccerbot.jpg"
import urc from "../assets/images/urc.jpg"
import ccna from "../assets/images/ccna.jpg"

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bodddy">
      <article className="resume" data-page="resume">
        <section className="timeline" data-aos="fade-up">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="bulb-outline"></ion-icon>
            </div>
            <h4 className="h4">Areas of Expertise</h4>
          </div>
          <ul className="bullet-list">
            {[
              "Networking",
              "Cybersecurity",
              "Software Development",
              "Database Management",
              "Digital Forensics",
            ].map((item, idx) => (
              <li key={idx} className="bullet-item">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Work Experience */}
        <section className="timeline" data-aos="fade-up">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h4 className="h4">Work Experience</h4>
          </div>

          <div className="experience-section">
            {/* Work Experience Entries */}
            <div className="experience-entry">
              <div className="position-header">
                <h3>Software Developer Intern</h3>
                <span>Apr 2025 - Sep 2025</span>
              </div>
              <strong>BitEncryptIT | Banasree, Dhaka</strong>
              <p>
                BitEncryptIT is a versatile software firm specializing in
                software development, web development, and mobile app
                development. As a software developer intern, I contributed to
                projects using TypeScript, MongoDB, MERN stack, Docker, REST,
                GraphQL, and SQL, helping build scalable and efficient
                applications.
              </p>
              <p>
                Skills: Software Development, MERN Stack, TypeScript, MongoDB,
                SQL, REST APIs, GraphQL, Docker, Web Development
              </p>
            </div>

            <div className="experience-entry">
              <div className="position-header">
                <h3>Mechanical & 3D Design Team Member</h3>
                <span>2023 - 2024</span>
              </div>
              <strong>BRACU Mongol Tori | Dhaka</strong>
              <p>
                Contributed to the design, modeling, and prototyping of rover
                mechanical systems, including structural components and
                drivetrain assemblies. Collaborated with cross-functional teams
                to integrate mechanical, electronics, and autonomous systems,
                ensuring functional performance for competitions and real-world
                testing.
              </p>
              <p>
                Skills: Mechanical Design, 3D Modeling, CAD, Prototyping, Team
                Collaboration, Systems Integration
              </p>
            </div>

            <div className="experience-entry">
              <div className="position-header">
                <h3>Secretary – IT Department</h3>
                <span>2022 - 2024</span>
              </div>
              <strong>Robotics Club of BRAC University | Dhaka</strong>
              <p>
                Served as Secretary of the IT Department in the BRAC University
                Robotics Club, coordinating club activities, managing
                documentation, and supporting the technical teams in software,
                networking, and project management tasks.
              </p>
              <p>
                Skills: Arduino, STM32, SoccerBot development, 3D modeling &
                mechanical design, rover systems, sensors & actuators
                integration, prototyping, electronics troubleshooting, robotics
                project development.
              </p>
            </div>

            <div className="experience-entry">
              <div className="position-header">
                <h3>Orgazinational Secretary</h3>
                <span>2016 - Present</span>
              </div>
              <strong>People Well-being Association Bangladesh | Rangpur</strong>
              <p>
                Non profit organization for helpless people.
              </p>
              <p>
                Skills: Team Coordination, Project Management, Event Planning, Communication, Strategic Decision-Making, Volunteer Management
              </p>
            </div>
            </div>

            

            
        </section>

        {/* Research Experience */}
        <section className="timeline" data-aos="fade-left">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="color-filter-outline"></ion-icon>
            </div>
            <h4 className="h4">Research Experience</h4>
          </div>
          <ol className="timeline-list">
            <li className="research-flex">
              <div className="icon-box-research">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <div className="left-order">
                <img id="thesispic" src={thesispic} alt="Thesis" />
              </div>
              <div className="right-order">
                <h4 className="h4 timeline-item-title">
                  Enhancing USB Security: A Multi-Layered Framework for
Detecting Vulnerabilities and Mitigating BadUSB Attacks
                </h4>
                <span>
                  BADUSB Attacks, Machine Learning,
                  Multi-Layered framework
                </span>
                <p className="timeline-text">
                  For my Undergraduate thesis, under the supervision of{" "}
                  <a
                    href="https://scholar.google.com/citations?hl=en&user=I69QEZQAAAAJ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Muhammad Iqbal Hossain, PhD
                  </a>
                  , we have worked on BADUSB and Digital Forensics to
                  Detect Vulnerabilities and mitigating attacks...
                </p>
              </div>
            </li>
            <li className="research-flex">
              <div className="icon-box-research">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              
            </li>
          </ol>
        </section>

        {/* Education */}
        <section className="timeline" data-aos="fade-up">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h4 className="h4">Education</h4>
          </div>
          <ol className="bullet-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                B.Sc. In Computer Science and Engineering
              </h4>
              <p className="timeline-text">BRAC University</p>
              <span>2021 — 2025</span>
              <p className="timeline-text">
                <b>CGPA:</b> 3.08/4.00
              </p>
              <p className="timeline-text">Notable Courses:</p>
              <table border="1">
  <tbody className="timeline-text">
    <tr>
      <td>CSE470 - <b>Software Engineering</b></td>
      <td>4.00/4.00</td>
      <td>CSE472 - <b>System Analysis and Design</b></td>
      <td>4.00/4.00</td>
    </tr>

    <tr>
      <td>CSE490 - <b>Computer Security</b></td>
      <td>4.00/4.00</td>
      <td>CSE461 - <b>Intro to Robotics</b></td>
      <td>4.00/4.00</td>
    </tr>

    <tr>
      <td>CSE350 - <b>Digital Electronics and Pulse Techniques</b></td>
      <td>4.00/4.00</td>
      <td>PHY111 - <b>Principles of Physics</b></td>
      <td>4.00/4.00</td>
    </tr>

    <tr>
      <td>CSE110 - <b>Python</b></td>
      <td>3.70/4.00</td>
      <td>CSE370 - <b>Database System</b></td>
      <td>3.70/4.00</td>
    </tr>

    <tr>
      <td>CSE421 - <b>Computer Networks</b></td>
      <td>3.70/4.00</td>
      <td>CSE321 - <b>Operating System</b></td>
      <td>3.70/4.00</td>
    </tr>

    <tr>
      <td>CSE341 - <b>Microprocessor</b></td>
      <td>3.70/4.00</td>
      <td>CSE361 - <b>Computer Interfacing</b></td>
      <td>3.70/4.00</td>
    </tr>

    <tr>
      <td>CSE341 - <b>Automata & Computability</b></td>
      <td>3.70/4.00</td>
      <td>MAT110 - <b>Mathematics - I</b></td>
      <td>3.70/4.00</td>
    </tr>

    <tr>
      <td>CSE447 - <b>Cryptography and Cryptoanalysis</b></td>
      <td>3.00/4.00</td>
      <td>CSE340 - <b>Computer Architecture</b></td>
      <td>3.00/4.00</td>
    </tr>
  </tbody>
</table>

            </li>
          </ol>
          <ol className="bullet-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                HSC (Dinajpur Board)
              </h4>
              <p className="timeline-text">Cantonment Public School and College, Rangpur</p>
              <span>2020</span>
              <p className="timeline-text">
                <b>GPA:</b> 5.00/5.00
              </p>
              </li>
          </ol>
          <ol className="bullet-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                SSC (Dinajpur Board)
              </h4>
              <p className="timeline-text">Cantonment Public School and College, Rangpur</p>
              <span>2018</span>
              <p className="timeline-text">
                <b>GPA:</b> 5.00/5.00
                <p>General Scholarship</p>
              </p>
              </li>
          </ol>
        </section>

        {/* Technical Skills */}
        <section className="timeline" data-aos="fade-up">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <h4 className="h4">Technical Skills</h4>
          </div>
          <ol className="bullet-list">
            {[
              {
                title: "Web Development",
                skills:
                  "HTML, CSS, JavaScript, MongoDB, React, NodeJS, Express, GraphQL, Bootstrap, Postman ",
              },
              {
                title: "Operating System",
                skills: "Windows, Kali Linux, Ubuntu, MacOS",
              },
              {
                title: "Programming Languages",
                skills:
                  "Python, Java, Javascript, x86 Assembly",
              },
              {
                title: "Database Management",
                skills:
                  "MySQL, Oracle, PostgreSQL",
              },
              {
                title: "Network & Penetration Testing",
                skills: "Wireshark, Nmap, Cisco Packet Tracer, Burp Suite, SQLmap, Autopsy, FTK Imager, Airmon-Ng",
              },
              { title: "Dev Tools", skills: "Visual Studio Code, Git, Docker" },
              {
                title: "Design Tools",
                skills: "Photoshop, Illustrator, Canva, Capcut",
              },
            ].map((skill, idx) => (
              <li key={idx} className="timeline-item">
                <h4 className="h4 timeline-item-title">{skill.title}</h4>
                <p className="timeline-text">{skill.skills}</p>
              </li>
            ))}
          </ol>
        </section>
        {/* Achievements */}
        <section className="timeline" data-aos="fade-left">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="color-filter-outline"></ion-icon>
            </div>
            <h4 className="h4">Achievements</h4>
            
          </div>
          <ol className="achievement-list">
  {[
    {
      title: "1st Position at University Innovation Hub Programme 2025, IC5",
      skills: "BUET, Dhaka",
      img: ic5,
    },
    {
      title: "1st Position in Soccerbot Segment, TechSpectra 2.0 (Robotics Competition)",
      skills: "BRAC University, Dhaka",
      img: soccerbot,
    },
    {
      title: "Finalist at University Rover Challenge 2024",
      skills: "Utah, USA",
      img: urc,
    },
    {
      title: "CCNA Certification",
      skills: "Cisco Networking Academy, United International University",
      img: ccna,
    },
  ].map((item, idx) => (
    <li key={idx} className="achievement-item">
      <div className="achievement-text">
        <h4 className="achievement-title">{item.title}</h4>
        <p className="achievement-sub">{item.skills}</p>
      </div>

      <div className="achievement-img-box">
        <img src={item.img} alt="achievement" className="achievement-img" />
      </div>
    </li>
  ))}
</ol>

          
        </section>
      </article>
    </div>
  );
}
