import { Container, Navbar, Nav, Row, Col, Image } from "react-bootstrap";
import './App.css';

const Box = ({icon,label,color,size='80px'}) => (
  <div style={{width:size,height:size,background:color,borderRadius:20,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 12px rgba(0,0,0,0.15)',flexShrink:0}}>
    <div style={{fontSize:28,marginBottom:4}}>{icon}</div>
    <div style={{fontSize:11,fontWeight:700,color:'#fff',textAlign:'center',lineHeight:1.2}}>{label}</div>
  </div>
);

const Arrow=({direction='right',label})=>{
  const s={width:direction==='down'?3:40,height:direction==='down'?20:3,background:'#6b7280',position:'relative',flexShrink:0,margin:direction==='down'?'0 auto':'0 8px'}
  const tip={position:'absolute',width:0,height:0}
  if(direction==='right')Object.assign(tip,{right:-6,top:'50%',transform:'translateY(-50%)',borderTop:'4px solid transparent',borderBottom:'4px solid transparent',borderLeft:'8px solid #6b7280'})
  if(direction==='left')Object.assign(tip,{left:-6,top:'50%',transform:'translateY(-50%)',borderTop:'4px solid transparent',borderBottom:'4px solid transparent',borderRight:'8px solid #6b7280'})
  if(direction==='down')Object.assign(tip,{bottom:-6,left:'50%',transform:'translateX(-50%)',borderLeft:'4px solid transparent',borderRight:'4px solid transparent',borderTop:'8px solid #6b7280'})
  const isDown=direction==='down'
  return(
    <div style={{display:'flex',flexDirection:isDown?'column':'row',alignItems:'center',margin:isDown?'8px 0':'0 8px'}}>
      <div style={s}><div style={tip}/></div>
    </div>
  )}

const MCPDiagram = () => (
  <div style={{padding:12,background:'linear-gradient(135deg,#f8fafc,#e2e8f0)',borderRadius:16,boxShadow:'0 4px 12px rgba(0,0,0,0.15)',maxWidth:600}}>
    <h4 style={{textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#374151', marginBottom: 16}}>Excel-Agent MCP Workflow</h4>
    <div style={{textAlign:'left', fontWeight:500, fontSize:12, marginBottom:4, marginLeft:6, color:'#374151'}}>Input</div>
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:8}}>
      <Box icon="📄" label="Excel" color="#2563eb" size="80px"/>
      <Box icon="📊" label="PDF" color="#2563eb" size="80px"/>
      <Box icon="📑" label="PPT" color="#2563eb" size="80px"/>
      <Box icon="📝" label="Word" color="#2563eb" size="80px"/>
    </div>
    <Arrow direction="down" style={{margin:'4px 0'}}/>
    <div style={{textAlign:'left', fontWeight:500, fontSize:12, marginBottom:4, marginLeft:6, color:'#374151'}}>Parse & Extract</div>
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:8}}>
      <Box icon="🔍" label="Parse" color="#059669" size="80px"/>
      <Box icon="📐" label="Table Detect" color="#059669" size="80px"/>
      <Box icon="👁️" label="OCR" color="#059669" size="80px"/>
      <Box icon="✂️" label="Chunk" color="#059669" size="80px"/>
    </div>
    <Arrow direction="down" style={{margin:'4px 0'}}/>
    <div style={{textAlign:'left', fontWeight:500, fontSize:12, marginBottom:4, marginLeft:6, color:'#374151'}}>Embed</div>
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:8}}>
      <Box icon="⚡" label="Local Embed" color="#7c3aed" size="80px"/>
      <Box icon="🧠" label="GPU Batch" color="#7c3aed" size="80px"/>
      <Box icon="💾" label="FAISS Store" color="#7c3aed" size="80px"/>
    </div>
    <Arrow direction="down" style={{margin:'4px 0'}}/>
    <div style={{textAlign:'left', fontWeight:500, fontSize:12, marginBottom:4, marginLeft:6, color:'#374151'}}>Query</div>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:8}}>
      <Box icon="🔎" label="Semantic Search" color="#f59e0b" size="80px"/>
      <Arrow direction="right" />
      <Box icon="📄" label="Excel" color="#f59e0b" size="80px"/>
    </div>
  </div>
);

const ZohoDiagram = () => (
  <div style={{padding: 12 ,background: 'linear-gradient(135deg,#f8fafc,#e2e8f0)',borderRadius: 16,boxShadow: '0 4px 12px rgba(0,0,0,0.15)',width: '100%',   maxWidth: '100%', boxSizing: 'border-box' }}>
    <h4 style={{textAlign: 'center', fontSize:16, fontWeight: 600, color: '#374151', marginBottom: 16}}>Automated Invoicing & CRM Workflow</h4>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
      <Box icon="📅" label="Calendar" color="#3b82f6"/>
      <Arrow/>
      <Box icon="</>" label="Script" color="#10b981"/>
      <Arrow/>
      <Box icon="📋" label="Form" color="#f59e0b"/>
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row-reverse'}}>
      <Box icon="📧" label="Email" color="#f59e0b"/>
      <Arrow direction="left"/>
      <Box icon="🧾" label="Invoice" color="#10b981"/>
      <Arrow direction="left"/>
      <Box icon="💼" label="CRM" color="#3b82f6"/>
    </div>
  </div>
);

const projects = [
    {
    title: "Financial Workflow Automation Engine",
    tech: "Reducing Manual Data Entry using RAG & LLMs",
    description: "Startups and funds lose countless hours to manual data extraction. I built this Model Context Protocol (MCP) server to automate that workflow. It doesn't just 'read' files; it understands them. I implemented a Retrieval Augmented Generation (RAG) pipeline that allows users to query unstructured PDFs (invoices, reports) using natural language inside Excel. To solve the 'hallucination' problem, I built a hybrid extraction pipeline—combining rule-based table detection with OCR fallback and semantic chunking.",
    customContent: <MCPDiagram />,
    alt: "MCP",
    repoLink: "https://github.com/diegomontemayor123/excel_mcp"
  }, 
  {
    title: "Share It – Scalable Mobile Marketplace",
    tech: "End-to-End Product Lifecycle: From Database Design to UI/UX",
    description: "To master the full product lifecycle, I architected and built a prototype Gear Rental Marketplace from scratch. Unlike simple prototypes, this project focused on handling complex data relationships—managing real-time threaded messaging, dynamic user feeds, and secure authentication. The build features a Node.js backend with JWT-based security and a MongoDB schema optimized for heavy read-operations. On the frontend, I solved complex state management challenges in React Native to deliver a seamless, zero-latency user experience.",
    image: `${process.env.PUBLIC_URL}/images/share_it-portrait.png`,
    image2: `${process.env.PUBLIC_URL}/images/share_it_3-portrait.png`,
    alt: "LetsFeast App",
    repoLink: "https://github.com/diegomontemayor123/letsfeast"
  },    

  {
    title: "AI-Driven Capital Allocation Model",
    tech: "Rigorous Regime Testing & Operational Risk Management",
    description: "I built a deep-learning pipeline utilizing Transformer architecture to optimize for Risk-Adjusted Return (Sharpe Ratio). The engineering focused on real-world constraints, implementing a custom loss function that heavily penalized excessive leverage and drawdown. While backtesting demonstrated significant potential, achieving 2.6x cumulative outperformance in stable regimes, the exercise's greatest value was the operational insight gained: the model's instability during distributional shift highlighted the essential need for rigorous Walk-Forward Optimization and advanced feature engineering before deployment in high-stakes environments.",
    image: `${process.env.PUBLIC_URL}/images/algo_trader.png`,
    alt: "Trader",
    repoLink: "https://github.com/diegomontemayor123/algo_trader"
  },
  {
    title: "Zero-Touch Invoicing & CRM Synchronization",
    tech: "End-to-End Business Logic Automation",
    description: "Operational friction kills speed. I built this system to eliminate the manual link between service delivery and billing. The workflow automatically parses calendar appointments, triggers service selection forms for clients, and auto-generates structured invoices in Zoho. Built with defensive coding—including custom regex parsers to catch data errors, duplicate transaction protection, and automated error-logging—it removes human error from the billing process and ensures 100% data consistency between the CRM and the Ledger.",
    customContent: <ZohoDiagram />,
    alt: "Invoicing System"
  },
]

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Diego Montemayor</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-collapse" />
          <Navbar.Collapse id="nav-collapse">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href={`${process.env.PUBLIC_URL}/images/Montemayor_Diego_CV.pdf`}>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <header className="bg-gradient pt-5 pb-2 text-center text-black">
        <Container>
          <h1 className="display-4">Hi, I'm Diego</h1>
          <p className="lead">Builder-Operator | Ex Wall St VP | Yale</p>
        </Container>
      </header>
      
      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <Row className="justify-content-center">
            <Col md={10} lg={10} className="text-center">
              <p>I combine nearly a decade of institutional finance rigor with a modern engineering toolkit to bridge the gap between <strong>business strategy and technical execution</strong>. Why leave a VP role to work at a startup? Because the best operators of the next decade won't just manage processes, but instead automate them. I am now seeking roles where I can apply my commercial experience solving complex problems and use my technical skillset to deliver immediate leverage.</p>
              <p>
                <a href={`${process.env.PUBLIC_URL}/images/Montemayor_Diego_CV.pdf`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: '600', color: '#007bff', textDecoration: 'underline' }}>
                  Download my Resume (PDF)
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          {projects.map((project, index) => (
            <Row key={index} className={`align-items-center mb-5 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
              <Col md={6} className={`d-flex justify-content-center ${index % 2 === 1 ? 'ps-md-5' : 'pe-md-5'} ${project.image2 ? 'stack-1000' : 'stack-768'}`}>
                <div className="project-images">
                  {project.customContent ? project.customContent : (
                    <>
                      <Image src={project.image} alt={project.alt} fluid rounded
                        style={{ boxShadow: project.image.endsWith("portrait.png") ? "none" : "0 4px 12px rgba(0,0,0,0.15)" }} />
                      {project.image2 && <Image src={project.image2} alt={project.alt} fluid rounded style={{ boxShadow: project.image2.endsWith("portrait.png") ? "none" : "0 4px 12px rgba(0,0,0,0.15)" }} />}
                    </>
                  )}
                </div>
              </Col>
              <Col md={6} className={`project-text ${index % 2 === 1 ? 'pe-md-5' : 'ps-md-5'}`}>
                <h3>{project.title}</h3>
                <p><strong>{project.tech}</strong></p>
                <p dangerouslySetInnerHTML={{ __html: project.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}></p>
                {project.repoLink && (
                  <p>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View on GitHub
                    </a>
                  </p>
                )}
              </Col>
            </Row>
          ))}
        </Container>
      </section>
      
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Contact</h2>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <p><a href="mailto:diegomontemayor.f@gmail.com">E-Mail</a></p>
              <p><a href="https://github.com/diegomontemayor123" target="_blank" rel="noreferrer">GitHub</a></p>
              <p><a href="https://www.linkedin.com/in/diego-montemayor-812335a5" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <footer className="bg-dark text-white text-center py-3">
        <Container><p>Last Updated December, 2025</p></Container>
      </footer>
    </>
  );
}
export default App;