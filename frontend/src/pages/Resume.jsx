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
              <ion-icon name="document-text-outline"></ion-icon>
            </div>
            <h4 className="h4">Professional Summary</h4>
          </div>
          <p className="timeline-text">
            Cybersecurity and Networking professional with a solid foundation in network infrastructure, security principles, and
            enterprise network operations. Skilled in routing, switching, network monitoring, and maintaining secure network
            environments. Knowledgeable in network troubleshooting, access control, system hardening, and implementing
            cybersecurity best practices to protect organizational systems and data. Experienced in identifying potential
            vulnerabilities, resolving network and security issues, and ensuring reliable connectivity across enterprise
            environments. Also proficient in software development with expertise in full-stack web development using MERN stack technologies,
            experienced in building responsive web applications, implementing RESTful APIs, and working with modern
            development tools and frameworks to deliver high-quality software solutions. Dedicated to continuous learning and contributing to secure, scalable, and efficient IT infrastructures.
          </p>
        </section>

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
                <h3>Network and Infrastructure Intern</h3>
                <span>January 2026 - April 2026</span>
              </div>
              <strong>Beximco Communication (Akash Digital TV) | Gulshan Dhaka</strong>
              <p>
                As a Network and Infrastructure Intern at Beximco Communication (Akash Digital TV), I focused on maintaining and optimizing network infrastructure and IT operations:
              </p>
              <ul>
                <li>Configuring and managing Cambium & UniFi access points, routers, switches, and VLAN-based network setups.</li>
                <li>Monitoring and supporting network performance, DNS services, and LAN/WAN connectivity troubleshooting.</li>
                <li>Assisting in server operations, basic system administration, and port/service management.</li>
                <li>Supporting IT security practices including access control, network segmentation, and policy enforcement.</li>
                <li>Handling IT asset management, inventory tracking, and updating internal company records.</li>
                <li>Assisting in VoIP telephone setup, configuration, and troubleshooting for communication systems.</li>
                <li>Creating Power BI dashboards and reports for monitoring and operational insights.</li>
                <li>Participating in infrastructure documentation, network design support, and technical reporting.</li>
                <li>Collaborating with senior engineers and cross-functional teams to support daily IT operations.</li>
              </ul>
              <p>
                Skills: Network Administration, Cambium & UniFi Systems, VLAN Configuration, DNS Management, LAN/WAN Troubleshooting, Server Administration, IT Security, Asset Management, VoIP Systems, Power BI, Infrastructure Documentation, Technical Reporting
              </p>
            </div>

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
                <ion-icon name="link-outline"></ion-icon>
              </div>
              <div className="right-order">
                <h4 className="h4 timeline-item-title">
                  Research Publication
                </h4>
                <span>
                  Digital Repository Link
                </span>
                <p className="timeline-text">
                  Access the full research paper and thesis documentation at:{" "}
                  <a
                    href="http://hdl.handle.net/10361/27418"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://hdl.handle.net/10361/27418
                  </a>
                </p>
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
                Masters in Information and Cyber Security
              </h4>
              <p className="timeline-text">University of Dhaka</p>
              <span>January 2026 — Present</span>
            </li>
          </ol>
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
              <div className="courses-grid">
                <div className="course-item">
                  <div className="course-name">CSE470 - <strong>Software Engineering</strong></div>
                  <div className="course-grade">4.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE472 - <strong>System Analysis and Design</strong></div>
                  <div className="course-grade">4.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE490 - <strong>Computer Security</strong></div>
                  <div className="course-grade">4.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE461 - <strong>Intro to Robotics</strong></div>
                  <div className="course-grade">4.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE350 - <strong>Digital Electronics and Pulse Techniques</strong></div>
                  <div className="course-grade">4.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">PHY111 - <strong>Principles of Physics</strong></div>
                  <div className="course-grade">4.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE110 - <strong>Python</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE370 - <strong>Database System</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE421 - <strong>Computer Networks</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE321 - <strong>Operating System</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE341 - <strong>Microprocessor</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE361 - <strong>Computer Interfacing</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE341 - <strong>Automata & Computability</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">MAT110 - <strong>Mathematics - I</strong></div>
                  <div className="course-grade">3.70/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE447 - <strong>Cryptography and Cryptoanalysis</strong></div>
                  <div className="course-grade">3.00/4.00</div>
                </div>
                <div className="course-item">
                  <div className="course-name">CSE340 - <strong>Computer Architecture</strong></div>
                  <div className="course-grade">3.00/4.00</div>
                </div>
              </div>

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

        {/* Knowledge Areas */}
        <section className="timeline" data-aos="fade-up">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="school-outline"></ion-icon>
            </div>
            <h4 className="h4">Knowledge Areas</h4>
          </div>
          <ul className="bullet-list">
            {[
              "OWASP Top 10, SIEM (Splunk), NIST Cybersecurity Framework (NIST CSF), ISO 27001",
              "Discretionary Access Control (DAC), Mandatory Access Control (MAC), Role-Based Access Control (RBAC)",
              "Zero Trust Network Access (ZTNA), Demilitarized Zone (DMZ) Architecture",
              "Bell–LaPadula Model, Biba Integrity Model, CIA Triad, Network Security Principles",
              "Secure System Design, Vulnerability Assessment & Threat Modeling",
              "TCP/IP, DNS, DHCP, VLANs, Routing & Switching, Firewalls, VPN, NAT",
              "Wireless Networking, Network Troubleshooting, Active Directory",
              "Network Monitoring, Network Infrastructure Management"
            ].map((item, idx) => (
              <li key={idx} className="bullet-item">
                {item}
              </li>
            ))}
          </ul>
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

        {/* Online Judge & Technical Platforms */}
        <section className="timeline" data-aos="fade-up">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="trophy-outline"></ion-icon>
            </div>
            <h4 className="h4">Online Judge & Technical Platforms</h4>
          </div>
          <ul className="bullet-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                <a href="https://codeforces.com/profile/arnobshoeb" target="_blank" rel="noopener noreferrer">
                  Codeforces
                </a>
              </h4>
              <p className="timeline-text">30+ problems solved</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                <a href="https://play.picoctf.org/users/gratifiedkiller" target="_blank" rel="noopener noreferrer">
                  PicoCTF
                </a>
              </h4>
              <p className="timeline-text">50+ challenges solved</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                <a href="https://tryhackme.com/p/gratifiedkiller" target="_blank" rel="noopener noreferrer">
                  TryHackMe
                </a>
              </h4>
              <p className="timeline-text">37 rooms completed</p>
            </li>
          </ul>
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
