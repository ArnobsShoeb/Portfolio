import { useEffect } from "react";
import AOS from "aos";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="bodyy">
        <div className="boddy" data-aos="fade-up">
          
          <h5>
            &#128640;&nbsp;&nbsp;&nbsp;&nbsp;Software Development enthusiast with hands-on experience in <b>software
            development</b>, <b>networking</b>, and <b>robotics</b>. Skilled in designing,
            developing, and integrating intelligent systems across diverse
            domains. Proficient in building robust <b>software solutions</b>,
            configuring and maintaining <b>network infrastructures</b>, and creating
            functional robotic systems. Adept at <b>problem-solving</b>,
            troubleshooting, and applying emerging technologies to deliver
            efficient, real-world solutions.
          </h5>
        </div>
      </div>
    </section>
  );
}
