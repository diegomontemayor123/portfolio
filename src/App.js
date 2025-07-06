import React from "react";
import { Container, Navbar, Nav, Row, Col, Image } from "react-bootstrap";
import './App.css';

const projects = [
  {
    title: "ShareIt Marketplace",
    tech: "React Native, Node.js, MongoDB",
    description:
      "ShareIt is a full-stack mobile marketplace for peer-to-peer rental of outdoor equipment. The platform supports real-time gear listings with images, availability calendars, and category-based filtering. Users can like, comment on, and bookmark gear; all data syncs with a custom Node.js/Express backend and MongoDB. On the frontend, I’m building the app in React Native with modular UI components, form validation, and real-time state updates. ShareIt also features early-stage escrow logic and a secure messaging system for renters and owners to coordinate transactions.",
      image: "/images/share_it-portrait.png",
      image2: "/images/share_it_3-portrait.png",
    alt: "ShareIt App",
  },
  {
    title: "Automated Invoicing & CRM Sync",
    tech: "Google Apps Script, Zoho API",
    description:
      "An end-to-end automation system that connects Google Calendar, Forms, Sheets, and Zoho Invoice to streamline service scheduling and billing. The workflow parses upcoming appointments, sends pre-filled service selection forms, and auto-generates structured invoices based on user input.\n\nBuilt with custom regex parsers, contact matching logic, and OAuth token refresh flows, the system includes error handling, duplicate protection, and dynamic email generation. Designed to reduce manual overhead and improve billing accuracy through modular, maintainable code.",
    image: "/images/invoicing_workflow-portrait.png",
    alt: "Invoicing System",
  },
  {
    title: "Transformer-Based Algorithmic Trader",
    tech: "Python, PyTorch",
    description:
    "A fully custom-built deep learning system designed to allocate capital across major tech stocks like AAPL, MSFT, and NVDA. The model uses a transformer architecture trained to directly optimize the Sharpe ratio while minimizing overfitting. The full pipeline includes feature engineering with rolling statistics, volatility, and volume signals; a differentiable loss function that penalizes poor returns and excessive leverage; and walk-forward testing across rolling time windows. Training, validation, and backtesting are all GPU-accelerated, and over 1,000 hyperparameter combinations are tested through parallelized grid search. Final outputs include daily portfolio weights, performance visualizations, and backtest analytics compared to benchmarks.",
    image: "/images/algo_trader.png",
    alt: "Trader",
  },
  {
    title: "LetsFeast – Social Recipe Sharing Platform",
    tech: "React Native, Node.js, MongoDB",
    description:
      "LetsFeast is a full-stack mobile social platform for sharing and discovering user-generated recipes. The app supports likes, bookmarks, threaded comments, and direct messaging. I built the entire stack with a Node.js/Express backend (Joi validation, JWT auth, MongoDB), and a modular React Native frontend with image uploads, real-time feed filtering, and interactive UI components. Messaging includes push notifications, user avatars, and shared recipe previews via chat. Features like following, commenting, and personalized feeds encourage organic community engagement.",
      image: "/images/lets_feast-portrait.png",
      image2: "/images/lets_feast_3-portrait.png",
    alt: "LetsFeast – Mobile Recipe Sharing Platform"
  },
  {
    title: "Farmer Invasion Game",
    tech: "Python",
    description:
      "Farmer Invasion is a retro-inspired, configurable arcade shooter built in Python using Pygame. Features include automatic firing, ship and bullet customization, procedurally generated enemy waves, and scalable difficulty. Created as a self-directed learning project to deepen fluency in Python and object-oriented programming by architecting a clean, modular, and extendable codebase.",
    image: "/images/farmer_invasion.png",
    alt: "Farmer Invasion Game",
  },
];

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Diego Montemayor</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-collapse" />
          <Navbar.Collapse id="nav-collapse">
            <Nav className="ms-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}
      <header className="bg-gradient py-5 text-center text-black">
        <Container>
          <h1 className="display-4">Hi, I'm Diego</h1>
          <p className="lead">Full-Stack Engineer & AI Builder | Former Wall Street VP | Lean Tools & Automation Specialist</p>
        </Container>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          {projects.map((project, index) => (
            <Row
              key={index}
              className={`align-items-center mb-5 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Center image horizontally in its column */}
              <Col md={6} className="d-flex justify-content-center">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fluid
                  rounded
                  style={{
                    boxShadow: project.image.endsWith("portrait.png")
                      ? "none"
                      : "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                />
                   {project.image2 &&  <Image
                  src={project.image2}
                  alt={project.alt}
                  fluid
                  rounded
                  style={{
                    boxShadow: project.image.endsWith("portrait.png")
                      ? "none"
                      : "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                />}
              </Col>

              <Col md={6}>
                <h3>{project.title}</h3>
                <p><strong>Tech Stack:</strong> {project.tech}</p>
                <p>{project.description}</p>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
            <p>
  I’m a versatile Full-Stack Engineer and AI enthusiast with a solid foundation in finance and a track record as a Vice President in Structured Credit investing on Wall Street. I bring a pragmatic, problem-solving mindset to every project, building scalable tools that automate complex workflows and cut through inefficiencies like a hot knife through butter.
</p>
<p>
  My technical toolbox includes Python, React Native, Node.js, and MongoDB, along with practical experience using machine learning frameworks like PyTorch. I’m passionate about leveraging technology to fix real-world problems — whether that means streamlining invoicing processes, optimizing workflows, or tackling whatever curveballs come my way.
</p>
<p>
  Curiosity and a drive for lean, effective solutions keep me designing modular systems that emphasize user experience, data integrity, and maintainability. I’m comfortable working across both the business and technical sides of projects, moving between strategy and software development as needed.
</p>
<p>
  I’m excited to bring my unique blend of financial savvy and engineering skill to innovative teams focused on solving tough challenges. Remote collaboration? Absolutely — I’m always just a video call away.
</p>

            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Contact</h2>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <p>Email: <a href="mailto:diegomontemayor.f@gmail.com">diegomontemayor.f@gmail.com</a></p>
              <p>
                GitHub: <a href="https://github.com/diegomontemayor123" target="_blank" rel="noreferrer">github.com/diegomontemayor123</a>
              </p>
              <p>
                LinkedIn: <a href="https://linkedin.com/in/diego-montemayor-6589132b6" target="_blank" rel="noreferrer">linkedin.com/in/diego-montemayor-6589132b6</a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>Last Updated July 2025 </p>
        </Container>
      </footer>
    </>
  );
}
export default App;
