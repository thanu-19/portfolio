// import React from 'react';
// import './Portfolio.css';
// import profilePhoto from './profile-photo.jpg'; // Import the image directly

// const Portfolio = () => {
//   return (
//     <div className="portfolio">
//       <header className="header">
//         <h1>Thanusree Nagaladinne</h1>
//         {/* The imported image is used here */}
//         <img
//           src={profilePhoto}
//           alt="Thanusree Nagaladinne Profile"
//           className="profile-photo"
//         />
//         <p>Full Stack MERN Developer</p>
//       </header>

//       <section className="section">
//         <h2>About Me</h2>
//         <p>
//           I am a passionate Full Stack MERN Developer with strong knowledge in building scalable web applications. Through projects and internship, I have gained good skills in React.js, Node.js, Express.js, and MongoDB, along with experience in real-world application development. My journey has helped me improve problem-solving abilities, logical thinking, and technical expertise, and I am eager to apply these skills in solving real-world challenges while continuously learning and growing.
//         </p>
//       </section>

//       <section className="section">
//         <h2>Technical Skills</h2>
//         <ul className="skills-list">
//           <li><strong>Programming:</strong> C, Python (familiar), Java</li>
//           <li><strong>Development:</strong> HTML, CSS, JavaScript, MERN Stack</li>
//           <li><strong>Databases:</strong> MySQL (familiar), MongoDB (familiar)</li>
//           <li><strong>Core Concepts:</strong> Data Structures and Algorithms, OOPs concepts, Operating System</li>
//           <li><strong>Version Control:</strong> Git, GitHub</li>
//         </ul>
//       </section>

//       <section className="section">
//         <h2>Experience</h2>
//         <div className="experience-item">
//           <h3>MERN Stack Intern</h3>
//           <p className="company">Exell Private Limited | June 2025 - Aug. 2025</p>
//           <ul>
//             <li>Completed a full-term internship in Full Stack Development using the MERN stack.</li>
//             <li>Built responsive web modules with authentication and API integration.</li>
//           </ul>
//         </div>
//         <div className="experience-item">
//           <h3>Data Science Intern</h3>
//           <p className="company">Skilloft Technology | Jan 2024 - Mar. 2024</p>
//           <ul>
//             <li>Worked on a Computer Vision project (Age and Gender Detection) using Python, OpenCV, and Deep Learning.</li>
//             <li>Gained hands-on exposure to data preprocessing, model training, and visualization.</li>
//           </ul>
//         </div>
//       </section>

//       <section className="section">
//         <h2>Projects</h2>
//         <div className="project-item">
//           <h3>Realtime Chat Application with Socket.io</h3>
//           <p className="project-details">Full Stack Web App | Jan. 2024 - Mar. 2024</p>
//           <ul>
//             <li>Developed a realtime chat application enabling users to send/receive instant messages using Socket.io for bidirectional communication.</li>
//             <li>Implemented authentication, user sessions, and chat room features with a React frontend and Node.js backend.</li>
//           </ul>
//         </div>
//         <div className="project-item">
//           <h3>Campus Placement Portal</h3>
//           <p className="project-details">MERN Stack Application | Aug. 2024 - Oct. 2024</p>
//           <ul>
//             <li>Developed a placement portal where students can register, upload resumes, and apply for campus jobs.</li>
//             <li>Built an admin dashboard to manage job postings, shortlist candidates, and send email notifications.</li>
//           </ul>
//         </div>
//         <div className="project-item">
//           <h3>Shopping Cart Application</h3>
//           <p className="project-details">Full-Stack Web App | Nov. 2024 - Feb. 2025</p>
//           <ul>
//             <li>Architected and developed a full-stack shopping cart application using the MERN stack, enabling users to browse products, add items to cart, and proceed to checkout.</li>
//             <li>Integrated PayPal payment gateway for secure online transactions.</li>
//           </ul>
//         </div>
//       </section>

//       <section className="section">
//         <h2>Contact</h2>
//         <ul className="contact-list">
//           <li><strong>Phone:</strong> +91 9885175403</li>
//           <li><strong>Email:</strong> <a href="mailto:thanu232005@gmail.com">thanu232005@gmail.com</a></li>
//           <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/thanusree-nagaldinne" target="_blank" rel="noopener noreferrer">linkedin.com/in/thanusree-nagaldinne</a></li>
//           <li><strong>GitHub:</strong> <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a></li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;




import React from 'react';
import './Portfolio.css';
import profilePhoto from './profile-photo.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="header">
        <h1>Thanusree Nagaladinne</h1>
        <img
          src={profilePhoto}
          alt="Thanusree Nagaladinne Profile"
          className="profile-photo"
        />
        <p>Full Stack MERN Developer</p>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a passionate Full Stack MERN Developer with a strong knowledge of building scalable web applications. Through projects and internships, I have gained solid skills in React.js, Node.js, Express.js, and MongoDB, along with experience in real-world application development. My journey has helped me improve problem-solving abilities, logical thinking, and technical expertise. I am eager to apply these skills to solve real-world challenges while continuously learning and growing.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li><strong>Programming:</strong> C, Python (familiar), Java</li>
            <li><strong>Development:</strong> HTML, CSS, JavaScript, MERN Stack</li>
            <li><strong>Databases:</strong> MySQL (familiar), MongoDB (familiar)</li>
            <li><strong>Core Concepts:</strong> Data Structures and Algorithms, OOPs, Operating Systems</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>ExcelR MERN Stack Intern</h3>
            <p className="company">Exell Private Limited | June 2025 - Aug. 2025</p>
            <ul>
              <li>Completed a full-term internship in Full Stack Development using the MERN stack.</li>
              <li>Built responsive web modules with authentication and API integration.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Data Science Intern</h3>
            <p className="company">Skilloft Technology | Jan 2024 - Mar. 2024</p>
            <ul>
              <li>Worked on a Computer Vision project (Age and Gender Detection) using Python, OpenCV, and Deep Learning.</li>
              <li>Gained hands-on exposure to data preprocessing, model training, and visualization.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>
              <a href="https://github.com/your-username/chat-app" target="_blank" rel="noopener noreferrer">
                Realtime Chat Application with Socket.io
              </a>
            </h3>
            <p className="project-details">Full Stack Web App | Jan. 2024 - Mar. 2024</p>
            <ul>
              <li>Developed a realtime chat application enabling users to send/receive instant messages using Socket.io for bidirectional communication.</li>
              <li>Implemented authentication, user sessions, and chat room features with a React frontend and Node.js backend.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>
              <a href="https://github.com/thanu-19/placement-portal" target="_blank" rel="noopener noreferrer">
                Campus Placement Portal
              </a>
            </h3>
            <p className="project-details">MERN Stack Application | Aug. 2024 - Oct. 2024</p>
            <ul>
              <li>Developed a placement portal where students can register, upload resumes, and apply for campus jobs.</li>
              <li>Built an admin dashboard to manage job postings, shortlist candidates, and send email notifications.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>
              <a href="https://github.com/thanu-19/mern-shopping-cart" target="_blank" rel="noopener noreferrer">
                Shopping Cart Application
              </a>
            </h3>
            <p className="project-details">Full-Stack Web App | Nov. 2024 - Feb. 2025</p>
            <ul>
              <li>Architected and developed a full-stack shopping cart application using the MERN stack.</li>
              <li>Integrated a PayPal payment gateway for secure online transactions.</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li><strong>Phone:</strong> +91 9885175403</li>
            <li><strong>Email:</strong> <a href="mailto:thanu232005@gmail.com">thanu232005@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/thanusree-nagaladinne" target="_blank" rel="noopener noreferrer">linkedin.com/in/thanusree-nagaladinne</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/thanu-19" target="_blank" rel="noopener noreferrer">github.com/thanu-19</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;