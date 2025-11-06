import { Container, Navbar, Nav, Row, Col, Image } from "react-bootstrap";
import './App.css';

const Box = ({icon,label,color,size='80px'}) => (
  <div style={{width:size,height:size,background:color,borderRadius:20,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 12px rgba(0,0,0,0.15)',flexShrink:0}}>
    <div style={{fontSize:28,marginBottom:4}}>{icon}</div>
    <div style={{fontSize:11,fontWeight:700,color:'#fff',textAlign:'center',lineHeight:1.2}}>{label}</div>
  </div>
);

const Arrow=({direction='right',label})=>{
  const s={width:direction==='down'?2:40,height:direction==='down'?30:2,background:'#6b7280',position:'relative',flexShrink:0,margin:direction==='down'?'0 auto':'0 8px'}
  const tip={position:'absolute',width:0,height:0}
  if(direction==='right')Object.assign(tip,{right:-6,top:-4,borderTop:'4px solid transparent',borderBottom:'4px solid transparent',borderLeft:'8px solid #6b7280'})
  if(direction==='left')Object.assign(tip,{left:-6,top:-4,borderTop:'4px solid transparent',borderBottom:'4px solid transparent',borderRight:'8px solid #6b7280'})
  if(direction==='down')Object.assign(tip,{bottom:-8,left:-3,borderLeft:'4px solid transparent',borderRight:'4px solid transparent',borderTop:'8px solid #6b7280'})
  return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'8px 0'}}>
      <div style={s}><div style={tip}/></div>
      {label&&<div style={{fontSize:10,color:'#475569',fontWeight:600,marginTop:4,textAlign:'center'}}>{label}</div>}
    </div>
  )
}


const MCPDiagram=()=>(
  <div style={{p:32,background:'linear-gradient(135deg,#f8fafc,#e2e8f0)',borderRadius:16,boxShadow:'0 4px 12px rgba(0,0,0,0.15)',maxWidth:600}}>
    <div style={{fontSize:20,fontWeight:800,color:'#1e293b',mb:24,textAlign:'center'}}>Document Processing Pipeline</div>
    
    <div style={{textAlign:'center',fontWeight:700,color:'#334155',marginBottom:8}}>Input</div>
    <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center',mb:20}}>
      <Box icon="📄" label="Excel" color="#2563eb"/><Box icon="📊" label="PDF" color="#2563eb"/><Box icon="📑" label="PPT" color="#2563eb"/><Box icon="📝" label="Word" color="#2563eb"/>
    </div>
    <Arrow direction="down" label="Parse & Extract"/>
    
    <div style={{textAlign:'center',fontWeight:700,color:'#334155',margin:'12px 0 8px'}}>Processing</div>
    <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center',mb:20}}>
      <Box icon="🔍" label="Parse" color="#059669" size="90px"/><Box icon="📐" label="Table Detect" color="#059669" size="90px"/><Box icon="👁️" label="OCR" color="#059669" size="90px"/><Box icon="✂️" label="Chunk 4k" color="#059669" size="90px"/>
    </div>
    <Arrow direction="down" label="Embed"/>
    
    <div style={{textAlign:'center',fontWeight:700,color:'#334155',margin:'12px 0 8px'}}>Vectorization</div>
    <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center',mb:20}}>
      <Box icon="🧠" label="BGE Embed" color="#7c3aed" size="100px"/><Box icon="⚡" label="GPU Batch" color="#7c3aed" size="100px"/><Box icon="💾" label="FAISS Store" color="#7c3aed" size="100px"/>
    </div>
    <Arrow direction="down" label="Query"/>
    
    <div style={{textAlign:'center',fontWeight:700,color:'#334155',margin:'12px 0 8px'}}>Output</div>
    <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center'}}>
      <Box icon="🔎" label="Semantic Search" color="#dc2626" size="110px"/><Box icon="📝" label="Excel Updates" color="#dc2626" size="110px"/>
    </div>
    <div style={{mt:20,p:12,background:'#f1f5f9',borderRadius:12,fontSize:11,color:'#475569',textAlign:'center'}}><b>MCP Server</b> • 20 workers • Parallel processing • Context-aware retrieval</div>
  </div>
)


const ZohoDiagram = () => (
  <div style={{padding:32,background:'linear-gradient(135deg,#f8fafc,#e2e8f0)',borderRadius:16,boxShadow:'0 4px 12px rgba(0,0,0,0.15)',maxWidth:600}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:16}}>
      <Box icon="📅" label="Calendar" color="#3b82f6"/>
      <Arrow/>
      <Box icon="</>" label="Script" color="#10b981"/>
      <Arrow/>
      <Box icon="📋" label="Form" color="#8b5cf6"/>
      <Arrow/>
      <Box icon="👤" label="User" color="#f59e0b"/>
    </div>
    
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,flexDirection:'row-reverse'}}>
      <Box icon="📧" label="Email" color="#8b5cf6"/>
      <Arrow direction="left"/>
      <Box icon="🧾" label="Invoice" color="#dc2626"/>
      <Arrow direction="left"/>
      <Box icon="💼" label="CRM" color="#3b82f6"/>
    </div>
  </div>
);

const projects = [
    {title: "Transformer-Based Portfolio Optimizer",
    tech: "PyTorch, Adam Optimizer, Python",
    description:"A fully custom-built deep-learning system designed to allocate capital across major tech stocks like AAPL, MSFT, and NVDA. The model uses a transformer architecture trained to directly optimize the Sharpe ratio while minimizing overfitting. The full pipeline includes feature engineering with rolling statistics, volatility, and volume signals; a differentiable loss function that penalizes poor returns and excessive leverage; and walk-forward testing across rolling time windows. Training, validation, and backtesting are all GPU-accelerated, and over 1,000 hyperparameter combinations are tested through parallelized grid search. Final outputs include daily portfolio weights, performance visualizations, and backtest analytics compared to benchmarks. Achieved 2.6x six-year outperformance in backtesting when compared against an equal-weight benchmark, all while maintaining a 25% smallr maximum drawdown.",
    image: `${process.env.PUBLIC_URL}/images/algo_trader.png`,
    alt: "Trader",
    repoLink: "https://github.com/diegomontemayor123/algo_trader"},
    {title: "Excel-Agent MCP Server",
    tech: "Machine Context Protocol (MCP), HuggingFace, LangChain, Retreival Augmented Generation (RAG), Facebook AI Similarity Search (FAISS), Optical Character Recognition (OCR)",
    description: "A MCP server implementing RAG pipelines with FAISS vector stores for intelligent Excel data extraction and querying. The system reduces manual data-entry time by ~90% through semantic search over structured context from unstructured sources, enabling natural language queries against financial datasets. Built with modular RAG components, efficient embedding caching, and context-aware retrieval strategies.",
    customContent: <MCPDiagram />,
    alt: "MCP",
    repoLink: "https://github.com/diegomontemayor123/excel_mcp"},
  {title: "LetsFeast – Social Recipe Sharing Platform",
    tech: "React Native, Node.js, MongoDB",
    description:"LetsFeast is a prototype full-stack mobile social platform for sharing and discovering user-generated recipes. The app supports likes, bookmarks, threaded comments, and direct messaging. I built the entire stack with a Node.js/Express backend (Joi validation, JWT auth, MongoDB), and a modular React Native frontend with image uploads, real-time feed filtering, and interactive UI components. Messaging includes push notifications, user avatars, and shared recipe previews via chat. Features like following, commenting, and personalized feeds encourage organic community engagement.",
    image: `${process.env.PUBLIC_URL}/images/lets_feast-portrait.png`,
    image2: `${process.env.PUBLIC_URL}/images/lets_feast_3-portrait.png`,
    alt: "LetsFeast App",
    repoLink: "https://github.com/diegomontemayor123/letsfeast"},
  {title: "Automated Invoicing & CRM Sync",
    tech: "Google Apps Script, Zoho API",
    description:"An end-to-end automation system that connects Google Calendar, Forms, Sheets, and Zoho Invoice to streamline service scheduling and billing. The workflow parses upcoming appointments, sends pre-filled service selection forms, and auto-generates structured invoices based on user input.\n\nBuilt with custom regex parsers, contact matching logic, and OAuth token refresh flows, the system includes error handling, duplicate protection, and dynamic email generation. Designed to reduce manual overhead and improve billing accuracy through modular, maintainable code.",
    customContent: <ZohoDiagram />,
    alt: "Invoicing System"},
  {title: "ShareIt Marketplace",
    tech: "React Native, Node.js, MongoDB",
    description:"ShareIt is a full-stack mobile marketplace for peer-to-peer rental of outdoor equipment. The platform supports real-time gear listings with images, availability calendars, and category-based filtering. Users can like, comment on, and bookmark gear; all data syncs with a custom Node.js/Express backend and MongoDB. On the frontend, I'm building the app in React Native with modular UI components, form validation, and real-time state updates. ShareIt also features early-stage escrow logic and a secure messaging system for renters and owners to coordinate transactions.",
    image: `${process.env.PUBLIC_URL}/images/share_it-portrait.png`,
    image2: `${process.env.PUBLIC_URL}/images/share_it_3-portrait.png`,
    alt: "ShareIt App",
    repoLink: "https://github.com/diegomontemayor123/shareit"
  }
]

function App() {return (<>
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
            </Nav></Navbar.Collapse></Container></Navbar>

      <header className="bg-gradient pt-5 pb-2 text-center text-black"><Container>
        <h1 className="display-4">Hi, I'm Diego</h1>
        <p className="lead">AI Research Engineer | Retrieval & Transformer Systems | Ex–Wall Street VP, Yale Econ (Distinction)</p>
      </Container></header>

      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <Row className="justify-content-center">
            <Col md={10} lg={10} className="text-center">

<p>I'm a self-taught Full-Stack Engineer and AI researcher, and a former Vice President in Structured Credit investing on Wall Street. I leverage my background in both high-stakes finance and technology to design AI systems that solve real-world problems with precision and reliability. A graduate of Yale University, I bring a pragmatic, problem-solving mindset to every project, focusing on scalable, efficient systems that automate complex workflows.</p>
<p>I've built transformer-based models leveraging PyTorch and RandomForest for portfolio optimization, RAG (retrieval-augmented generation) pipelines using FAISS vector stores, and full-stack mobile applications. I'm particularly passionate about creating AI systems that prioritize accuracy, transparency, and performance, with a strong emphasis on reducing hallucinations and ensuring factual grounding—especially in high-stakes fields like finance.</p>
<p>My research interests lie at the intersection of AI and practical applications, including adaptive retrieval systems, context-aware factual grounding, and efficient context compression. In the world of finance—where inaccuracies can be costly, I'm committed to designing systems that balance cutting-edge innovation with rigorous verification and real-world accuracy. My goal is to push the boundaries of AI while ensuring that the solutions I develop remain trustworthy, scalable, and transparent.</p>

 <p><a href={`${process.env.PUBLIC_URL}/images/Montemayor_Diego_CV.pdf`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: '600', color: '#007bff', textDecoration: 'underline' }}>
                  Download my Resume (PDF)</a></p></Col></Row></Container>
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
      <p><strong>Tech Stack:</strong> {project.tech}</p>
      <p>{project.description}</p>

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
              <p>Email: <a href="mailto:diegomontemayor.f@gmail.com">diegomontemayor.f@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/diegomontemayor123" target="_blank" rel="noreferrer">github.com/diegomontemayor123</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/diego-montemayor-6589132b6" target="_blank" rel="noreferrer">linkedin.com/in/diego-montemayor-6589132b6</a></p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <Container><p>Last Updated November 2025</p></Container>
      </footer>
    </>
  );
}
export default App;