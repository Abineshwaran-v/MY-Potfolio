
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav>
        <h2>MyPortfolio.</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="home">
        <div>
          <p className="welcome">YOKOSO! TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Abineshwaran</span></h1>
          <h2>I'm a Computer Science Student</h2>
          <p>
            I am passionate about programming, web development
            and learning new technologies.
          </p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>

        <div className="profile">
  <img src="/profile.jpg.jpg" alt="My Profile" />
</div>
      </section>

      {/* About */}
      <section id="about">
        <h1>About Me</h1>
        <p>
          Hello! I'm Your Name, a Computer Science Engineering
          student. I enjoy creating websites and developing
          new applications.
        </p>
        <p>College: Mohamed Sathak AJ College of Engineering</p>
        <p>Department: Computer Science Engineering</p>
        <p>Registration No: 311824102301</p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h1>My Skills</h1>
        <div className="cards">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
          <div className="card">Python</div>
          <div className="card">Java</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h1>My Projects</h1>
        <div className="cards">
          <div className="card">
            <h3>Student Management System</h3>
            <p>A simple student management application.</p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>My personal portfolio created using React.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h1>Contact Me</h1>
        <p>Email: abineshwaranmechanical549@gmail.com</p>
        <p>GitHub: github.com/Abineshwaran-v</p>
        <p>LinkedIn: linkedin.com/in/abineshwaran-v</p>
      </section>

      <footer>
        <p>© 2026 Abineshwaran | My Portfolio</p>
      </footer>

    </div>
  );
}

export default App;
