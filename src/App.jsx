import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Html, OrbitControls, useGLTF } from "@react-three/drei";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Menu,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

function IronManModel() {
  const { scene } = useGLTF("/models/iron-man.glb");
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  return (
    <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.35}>
      <primitive
        object={clonedScene}
        scale={2.2}
        position={[0, -1.5, 0]}
      />
    </Float>
  );
}

function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 38 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 5, 5]} intensity={3} />
      <pointLight position={[-3, 1, 2]} color="#51bfff" intensity={20} />
      <Suspense
        fallback={
          <Html center>
            <div className="model-loading">Loading 3D model...</div>
          </Html>
        }
      >
        <IronManModel />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.7}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}

const features = [
  {
    number: "01",
    icon: Atom,
    title: "Immersive 3D",
    description:
      "Explore a new dimension of digital experiences with interactive real-time 3D visuals.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Built for speed",
    description:
      "A carefully designed experience focused on responsive interactions and smooth motion.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Designed with purpose",
    description:
      "Thoughtful interfaces that balance futuristic aesthetics with usability and clarity.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-symbol"><Sparkles size={20} /></span>
          <span>NEXORA<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#vision" onClick={closeMenu}>Our vision</a>
          <a href="#features" onClick={closeMenu}>Technology</a>
          <a href="#showcase" onClick={closeMenu}>Experience</a>
        </nav>

        <a className="nav-cta" href="#showcase">
          Explore the future <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            THE NEXT DIMENSION OF THE WEB
          </div>

          <h1>
            Beyond
            <br />
            the <span className="gradient-text">ordinary.</span>
          </h1>

          <p className="hero-description">
            Step into a world where technology meets imagination.
            Discover a more immersive way to experience the digital future.
          </p>

          <div className="hero-actions">
            <a href="#showcase" className="button-primary">
              Enter the experience <ArrowRight size={18} />
            </a>
            <a href="#vision" className="button-secondary">
              Discover NEXORA <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span><span className="status-dot" /> REAL-TIME 3D</span>
            <span>INTERACTIVE BY DESIGN</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Interactive 3D model">
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="model-badge">
            <span className="badge-icon"><Sparkles size={15} /></span>
            <span>
              <strong>3D EXPERIENCE</strong>
              <small>Powered by Three.js</small>
            </span>
          </div>
          <div className="model-canvas">
            <ModelViewer />
          </div>
          <div className="model-caption">
            <span>FIG. 001</span>
            <span>INTERACTIVE MODEL <MousePointer2 size={13} /></span>
          </div>
          <div className="coordinate coordinate-top">N 40° 42' 46.8"</div>
          <div className="coordinate coordinate-bottom">SYSTEM / NX-01</div>
        </div>

        <a className="scroll-cue" href="#vision">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>

        <span className="hero-index">01 / 04</span>
      </section>

      <section className="vision section-pad" id="vision">
        <div className="section-kicker">
          <span>01 — THE VISION</span>
          <span>IMAGINATION, ENGINEERED</span>
        </div>

        <div className="vision-grid">
          <h2>
            The future isn't
            <br />
            something we <span className="muted-text">wait for.</span>
            <br />
            It's something we build.
          </h2>
          <div className="vision-copy">
            <p>
              NEXORA is a concept experience exploring the intersection of
              futuristic design, interactive 3D, and modern web technology.
            </p>
            <a className="text-link" href="#features">
              Explore our approach <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="vision-bottom">
          <span>CURIOUS MINDS. BOUNDLESS POSSIBILITIES.</span>
          <span>EST. 2026</span>
        </div>
      </section>

      <section className="features section-pad" id="features">
        <div className="section-kicker">
          <span>02 — WHAT POWERS US</span>
          <span>DESIGNED FOR TOMORROW</span>
        </div>

        <div className="section-heading">
          <h2>Technology with <span className="gradient-text">intention.</span></h2>
          <p>Every detail has a purpose. Every interaction opens a possibility.</p>
        </div>

        <div className="feature-grid">
          {features.map(({ number, icon: Icon, title, description }) => (
            <article className="feature-card" key={number}>
              <div className="feature-top">
                <span>{number} / 03</span>
                <Icon size={23} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="feature-arrow"><ArrowUpRight size={19} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase section-pad" id="showcase">
        <div className="section-kicker">
          <span>03 — STEP INSIDE</span>
          <span>MOVE YOUR CURSOR TO EXPLORE</span>
        </div>

        <div className="showcase-panel">
          <div className="showcase-copy">
            <span className="showcase-label"><span className="status-dot" /> LIVE 3D VIEW</span>
            <h2>A new perspective is waiting.</h2>
            <p>
              Rotate the model with your cursor and experience the power of
              real-time 3D on the modern web.
            </p>
            <div className="showcase-note">
              <MousePointer2 size={17} />
              <span>Click and drag the model to rotate it.</span>
            </div>
          </div>
          <div className="showcase-model">
            <div className="showcase-ring" />
            <ModelViewer />
            <span className="showcase-model-label">MODEL / 001</span>
          </div>
        </div>
      </section>

      <section className="closing section-pad">
        <div className="closing-glow" />
        <span className="closing-kicker">THE FUTURE IS INTERACTIVE</span>
        <h2>
          Ready to explore
          <br />
          <span className="gradient-text">what's next?</span>
        </h2>
        <p>Great experiences begin with curiosity. Keep exploring.</p>
        <a href="#home" className="button-primary">
          Back to the beginning <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-symbol"><Sparkles size={18} /></span>
          <span>NEXORA<span className="brand-dot">.</span></span>
        </a>
        <span>AN EXPERIMENT IN FUTURE-FACING WEB DESIGN.</span>
        <a href="#home" className="footer-top">BACK TO TOP ↑</a>
        <span className="footer-copy">© 2026 NEXORA 3D</span>
      </footer>
    </main>
  );
}

useGLTF.preload("/models/iron-man.glb");

export default App;
