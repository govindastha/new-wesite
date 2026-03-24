import { useState, useEffect, useRef, useCallback } from "react";

const resumeData = {
  basics: {
    name: "Govinda Shrestha",
    initials: "GS",
    title: "Senior Network & Infrastructure Engineer",
    tagline: "CCNA Certified | Azure | Firewalls | Cloud & Security | MSP Experience",
    summary: "Senior Network & Infrastructure Engineer with strong experience designing, securing, and supporting enterprise environments across hybrid and cloud platforms. Specializing in resilient networks, infrastructure optimization, and security posture for modern businesses.",
    location: "Auckland, New Zealand",
    email: "shresthagovinda619@gmail.com",
    linkedin: "www.linkedin.com/in/govindastha",
  },
  passions: [
    "Network architecture & security",
    "Cloud-enabled infrastructure",
    "Modern workplace technologies",
    "Automation and operational efficiency",
    "MSP and multi-site environments",
  ],
  experience: [
    {
      company: "Chaudhary Group",
      role: "Senior Network / Infrastructure Engineer",
      dates: "April 2022 – March 2025",
      duration: "3 years",
      location: "Kathmandu, Nepal",
      bullets: [
        "Designed, implemented, and supported enterprise network infrastructure supporting 500+ users, improving uptime and operational resilience.",
        "Led firewall deployments and security enhancements, reducing security risks and strengthening perimeter protection.",
        "Delivered infrastructure modernization projects including cloud adoption and hybrid networking solutions.",
        "Acted as an escalation point for complex Layer 2–7 issues, restoring services rapidly during critical incidents.",
        "Optimized network performance through proactive monitoring, capacity planning, and root cause analysis.",
        "Collaborated with stakeholders and leadership to align infrastructure strategy with business objectives.",
        "Mentored junior engineers, fostering technical capability across the team.",
      ],
    },
    {
      company: "Chaudhary Group",
      role: "Network / Systems Engineer",
      dates: "Within tenure",
      duration: "",
      location: "Kathmandu, Nepal",
      bullets: [
        "Administered Windows Server, Active Directory, DNS, DHCP, and Microsoft 365 environments.",
        "Implemented secure VPN connectivity enabling reliable remote workforce operations.",
        "Supported virtualization platforms including VMware and Hyper-V.",
        "Delivered technical support across multi-site environments while maintaining high SLA performance.",
        "Participated in infrastructure projects from design through deployment.",
        "Improved backup and disaster recovery readiness to enhance business continuity.",
      ],
    },
    {
      company: "Solutions Consultant Pvt. Ltd",
      role: "System Network Administrator",
      dates: "December 2016 – April 2022",
      duration: "5 years 5 months",
      location: "",
      bullets: [],
    },
    {
      company: "Classic Tech",
      role: "Support",
      dates: "August 2015 – January 2016",
      duration: "6 months",
      location: "",
      bullets: [],
    },
    {
      company: "Iplus Pvt. Ltd.",
      role: "IT Support",
      dates: "2009 – March 2015",
      duration: "6 years",
      location: "",
      bullets: [],
    },
    {
      company: "Comtech Pvt. Ltd.",
      role: "Senior Field Technician",
      dates: "March 2006 – February 2009",
      duration: "3 years",
      location: "",
      bullets: [],
    },
  ],
  skills: {
    "Network Engineering": ["Routing & Switching", "Layer 2–7 Troubleshooting", "Network Design", "Firewall Deployments", "VPN Connectivity", "Network Security", "Capacity Planning", "Multi-site Environments"],
    "Cloud & Virtualization": ["Microsoft Azure", "VMware", "Hyper-V", "Hybrid Networking", "Cloud Adoption"],
    "Systems & Services": ["Windows Server", "Active Directory", "DNS & DHCP", "Microsoft 365", "Backup & DR", "SLA Management"],
    "Soft Skills": ["Stakeholder Collaboration", "Team Mentoring", "Solutions-focused", "Escalation Point", "Infrastructure Strategy"],
  },
  certifications: ["CCNA", "Microsoft Networking"],
  education: [
    {
      institution: "Prime College",
      degree: "Bachelor of Science (B.Sc.), Computer/Information Technology",
      dates: "2013 – 2016",
    },
    {
      institution: "Puspasadan Boarding High School",
      degree: "",
      dates: "",
    },
  ],
  achievements: [
    { metric: "500+", label: "Users Supported", context: "Enterprise network infrastructure at Chaudhary Group" },
    { metric: "3 yrs", label: "Senior Engineer Tenure", context: "Leading network & infrastructure at Chaudhary Group" },
    { metric: "18+", label: "Years Experience", context: "Spanning 2006 to present across multiple organizations" },
    { metric: "5+", label: "Companies Served", context: "Across ISP, IT support, consulting, and enterprise sectors" },
  ],
};

// Animated Canvas Background
function AnimatedBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 90;

    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", resize);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Gradient mesh background
      const grad = ctx.createRadialGradient(W * 0.3, H * 0.2, 0, W * 0.3, H * 0.2, W * 0.8);
      grad.addColorStop(0, "rgba(0, 212, 255, 0.04)");
      grad.addColorStop(0.5, "rgba(99, 102, 241, 0.03)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const grad2 = ctx.createRadialGradient(W * 0.8, H * 0.7, 0, W * 0.8, H * 0.7, W * 0.6);
      grad2.addColorStop(0, "rgba(0, 255, 163, 0.03)");
      grad2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, W, H);

      if (!prefersReduced) {
        particles.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        });
      }

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
    }} />
  );
}

// Splash Screen
function SplashScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 8;
      if (p >= 100) { p = 100; clearInterval(interval); setTimeout(() => { setFadeOut(true); setTimeout(onDone, 500); }, 200); }
      setProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#020408", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", zIndex: 9999,
      transition: "opacity 0.5s ease", opacity: fadeOut ? 0 : 1,
    }}>
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        {/* Monogram */}
        <div style={{
          width: 96, height: 96, borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(99,102,241,0.15))",
          border: "1.5px solid rgba(0,212,255,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 40px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)",
          animation: "pulse 2s ease-in-out infinite",
        }}>
          <span style={{ fontFamily: "'Orbitron', monospace", fontSize: 32, fontWeight: 700, color: "#00d4ff", letterSpacing: 2 }}>GS</span>
        </div>
        <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <div style={{ width: "100%", height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #00d4ff, #6366f1)", borderRadius: 2, transition: "width 0.1s ease", boxShadow: "0 0 8px rgba(0,212,255,0.6)" }} />
          </div>
          <span style={{ fontFamily: "'Orbitron', monospace", fontSize: 10, color: "rgba(0,212,255,0.5)", letterSpacing: 3 }}>INITIALIZING {Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}

// Nav
function Nav({ activeSection }) {
  const sections = ["home", "about", "experience", "skills", "achievements", "education", "contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(2,4,8,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,212,255,0.08)",
        padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60,
      }}>
        <span style={{ fontFamily: "'Orbitron', monospace", fontSize: 16, fontWeight: 700, color: "#00d4ff", letterSpacing: 2 }}>GS</span>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, "@media(max-width:768px)": { display: "none" } }} className="desktop-nav">
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "6px 12px",
              fontFamily: "'Orbitron', monospace", fontSize: 10, letterSpacing: 2,
              color: activeSection === s ? "#00d4ff" : "rgba(255,255,255,0.4)",
              textTransform: "uppercase", transition: "color 0.2s",
            }}>{s}</button>
          ))}
        </div>
        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          background: "none", border: "none", cursor: "pointer", color: "#00d4ff", display: "none",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: "rgba(2,4,8,0.97)", borderBottom: "1px solid rgba(0,212,255,0.1)",
          display: "flex", flexDirection: "column", padding: "12px 0",
        }}>
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "14px 24px", textAlign: "left",
              fontFamily: "'Orbitron', monospace", fontSize: 11, letterSpacing: 2,
              color: activeSection === s ? "#00d4ff" : "rgba(255,255,255,0.5)", textTransform: "uppercase",
            }}>{s}</button>
          ))}
        </div>
      )}
    </>
  );
}

// Section wrapper
function Section({ id, children, style = {} }) {
  return (
    <section id={id} style={{
      position: "relative", zIndex: 1, minHeight: "100vh", padding: "100px 24px 60px",
      maxWidth: 1100, margin: "0 auto", ...style,
    }}>
      {children}
    </section>
  );
}

function SectionTitle({ children, accent = "#00d4ff" }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <div style={{ width: 40, height: 1, background: accent }} />
        <h2 style={{
          fontFamily: "'Orbitron', monospace", fontSize: "clamp(20px, 4vw, 28px)",
          fontWeight: 700, color: "#fff", letterSpacing: 4, margin: 0, textTransform: "uppercase",
        }}>{children}</h2>
      </div>
      <div style={{ height: 1, background: `linear-gradient(90deg, ${accent}33, transparent)`, marginLeft: 56 }} />
    </div>
  );
}

// Hero / Home
function HeroSection() {
  const [typed, setTyped] = useState("");
  const titles = ["Senior Network Engineer", "Infrastructure Architect", "CCNA Certified", "Cloud & Security Expert"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTyped(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIdx > 0) {
        setTyped(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1);
      } else {
        setDeleting(false); setTitleIdx(i => (i + 1) % titles.length); setCharIdx(0);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, titleIdx]);

  return (
    <section id="home" style={{
      position: "relative", zIndex: 1, minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px",
    }}>
      <div style={{ textAlign: "center", maxWidth: 800 }}>
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <span style={{
            fontFamily: "'Orbitron', monospace", fontSize: 11, letterSpacing: 6,
            color: "rgba(0,212,255,0.6)", textTransform: "uppercase",
            border: "1px solid rgba(0,212,255,0.2)", padding: "6px 18px", borderRadius: 2,
          }}>Auckland, New Zealand</span>
        </div>
        <h1 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "clamp(32px, 8vw, 72px)",
          fontWeight: 900, margin: "0 0 16px",
          background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #6366f1 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1.1, letterSpacing: 2,
        }}>
          GOVINDA<br />SHRESTHA
        </h1>
        <div style={{ height: 48, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: "clamp(14px, 3vw, 20px)",
            color: "#00d4ff", letterSpacing: 2,
          }}>
            {typed}<span style={{ animation: "blink 1s step-end infinite" }}>|</span>
          </span>
        </div>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 2vw, 17px)",
          color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px",
        }}>
          {resumeData.basics.summary}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} style={{
            padding: "14px 32px", background: "linear-gradient(135deg, #00d4ff, #6366f1)",
            border: "none", borderRadius: 3, color: "#000", fontFamily: "'Orbitron', monospace",
            fontSize: 11, letterSpacing: 3, fontWeight: 700, cursor: "pointer", textTransform: "uppercase",
            boxShadow: "0 0 20px rgba(0,212,255,0.3)",
          }}>View Experience</button>
          <a href={`mailto:${resumeData.basics.email}`} style={{
            padding: "14px 32px", background: "transparent",
            border: "1px solid rgba(0,212,255,0.4)", borderRadius: 3, color: "#00d4ff",
            fontFamily: "'Orbitron', monospace", fontSize: 11, letterSpacing: 3,
            fontWeight: 700, cursor: "pointer", textDecoration: "none", textTransform: "uppercase",
            display: "inline-block",
          }}>Contact Me</a>
        </div>
        {/* Scroll indicator */}
        <div style={{ marginTop: 64, display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 2s ease-in-out infinite" }}>
            <span style={{ fontFamily: "'Orbitron', monospace", fontSize: 9, letterSpacing: 3, color: "rgba(255,255,255,0.2)" }}>SCROLL</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5"/>
              <circle cx="8" cy="7" r="2" fill="#00d4ff" style={{ animation: "scrollDot 2s ease-in-out infinite" }}/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// About
function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="about-grid">
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 24 }}>
            Senior Network & Infrastructure Engineer with strong experience designing, securing, and supporting enterprise environments across hybrid and cloud platforms.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 24 }}>
            Certified in CCNA and Microsoft Networking, with academic exposure to CompTIA A+, bringing deep capability across routing, switching, firewalls, Microsoft 365, Azure, virtualization, and IT service delivery.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
            Currently open to senior engineering opportunities where I can contribute strategic technical expertise while continuing to grow toward architecture-level responsibilities.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, letterSpacing: 3, color: "rgba(0,212,255,0.6)", marginBottom: 20, textTransform: "uppercase" }}>Passionate About</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {resumeData.passions.map((p, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
                background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: 4,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4ff", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>✔ {p}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {resumeData.certifications.map((c, i) => (
              <span key={i} style={{
                padding: "6px 16px", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 2, fontFamily: "'Orbitron', monospace", fontSize: 10, letterSpacing: 2, color: "#6366f1",
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// Experience
function ExperienceSection() {
  const [expanded, setExpanded] = useState(0);

  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      {/* Impact strip */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16, marginBottom: 48,
      }}>
        {resumeData.achievements.map((a, i) => (
          <div key={i} style={{
            padding: "20px 16px", textAlign: "center",
            background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(99,102,241,0.06))",
            border: "1px solid rgba(0,212,255,0.12)", borderRadius: 6,
          }}>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 700, color: "#00d4ff" }}>{a.metric}</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: 4 }}>{a.label}</div>
          </div>
        ))}
      </div>
      {/* Timeline */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, #00d4ff33, transparent)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingLeft: 0 }}>
          {resumeData.experience.map((exp, i) => (
            <div key={i} style={{ paddingLeft: 52, position: "relative" }}>
              <div style={{
                position: "absolute", left: 12, top: 20, width: 17, height: 17, borderRadius: "50%",
                background: expanded === i ? "#00d4ff" : "rgba(0,212,255,0.2)",
                border: `2px solid ${expanded === i ? "#00d4ff" : "rgba(0,212,255,0.3)"}`,
                boxShadow: expanded === i ? "0 0 12px rgba(0,212,255,0.6)" : "none",
                transition: "all 0.3s ease",
              }} />
              <div
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                style={{
                  padding: "20px 24px", borderRadius: 6, cursor: "pointer",
                  background: expanded === i ? "rgba(0,212,255,0.06)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${expanded === i ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.06)"}`,
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{exp.role}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#00d4ff" }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{exp.dates}</div>
                    {exp.duration && <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(0,212,255,0.4)" }}>{exp.duration}</div>}
                    {exp.location && <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{exp.location}</div>}
                  </div>
                </div>
                {expanded === i && exp.bullets.length > 0 && (
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(0,212,255,0.1)" }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: 3, fontSize: 8 }}>▶</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {expanded === i && exp.bullets.length === 0 && (
                  <div style={{ marginTop: 12, fontFamily: "'Space Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
                    Role details not specified in resume
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Skills
function SkillsSection() {
  const colors = { "Network Engineering": "#00d4ff", "Cloud & Virtualization": "#6366f1", "Systems & Services": "#00ffa3", "Soft Skills": "#f59e0b" };

  return (
    <Section id="skills">
      <SectionTitle accent="#6366f1">Skills</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {Object.entries(resumeData.skills).map(([cat, items]) => (
          <div key={cat} style={{
            padding: "24px", borderRadius: 8,
            background: "rgba(255,255,255,0.02)", border: `1px solid ${colors[cat]}22`,
          }}>
            <div style={{
              fontFamily: "'Orbitron', monospace", fontSize: 10, letterSpacing: 3,
              color: colors[cat], marginBottom: 16, textTransform: "uppercase",
              borderBottom: `1px solid ${colors[cat]}33`, paddingBottom: 12,
            }}>{cat}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {items.map((skill, i) => (
                <span key={i} style={{
                  padding: "5px 10px", borderRadius: 2,
                  background: `${colors[cat]}11`, border: `1px solid ${colors[cat]}33`,
                  fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)",
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Achievements
function AchievementsSection() {
  return (
    <Section id="achievements">
      <SectionTitle accent="#00ffa3">Achievements</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
        {resumeData.achievements.map((a, i) => (
          <div key={i} style={{
            padding: "32px 24px", borderRadius: 8, textAlign: "center",
            background: "linear-gradient(135deg, rgba(0,255,163,0.05), rgba(0,212,255,0.03))",
            border: "1px solid rgba(0,255,163,0.15)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,255,163,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>🏆</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, color: "#00ffa3", marginBottom: 8 }}>{a.metric}</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 10, letterSpacing: 3, color: "rgba(255,255,255,0.7)", marginBottom: 12, textTransform: "uppercase" }}>{a.label}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{a.context}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Education
function EducationSection() {
  return (
    <Section id="education">
      <SectionTitle accent="#f59e0b">Education</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {resumeData.education.map((e, i) => (
          <div key={i} style={{
            padding: "24px 28px", borderRadius: 6,
            background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          }}>
            <div>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{e.institution}</div>
              {e.degree && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{e.degree}</div>}
            </div>
            {e.dates && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)", padding: "4px 14px", borderRadius: 2 }}>{e.dates}</span>}
          </div>
        ))}
        <div style={{ padding: "24px 28px", borderRadius: 6, background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.15)" }}>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 12, letterSpacing: 3, color: "rgba(99,102,241,0.7)", marginBottom: 12, textTransform: "uppercase" }}>Certifications</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {resumeData.certifications.map((c, i) => (
              <span key={i} style={{
                padding: "8px 20px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 3, fontFamily: "'Orbitron', monospace", fontSize: 11, letterSpacing: 2, color: "#6366f1",
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// Contact
function ContactSection() {
  return (
    <Section id="contact" style={{ minHeight: "auto", paddingBottom: 100 }}>
      <SectionTitle>Contact</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, maxWidth: 700 }}>
        {[
          { label: "Email", value: resumeData.basics.email, href: `mailto:${resumeData.basics.email}`, icon: "✉" },
          { label: "LinkedIn", value: "govindastha", href: `https://${resumeData.basics.linkedin}`, icon: "🔗" },
          { label: "Location", value: resumeData.basics.location, href: null, icon: "📍" },
        ].map((item, i) => (
          <div key={i} style={{
            padding: "24px", borderRadius: 6,
            background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.12)",
          }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 9, letterSpacing: 3, color: "rgba(0,212,255,0.5)", marginBottom: 8, textTransform: "uppercase" }}>{item.label}</div>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#00d4ff", textDecoration: "none", wordBreak: "break-all" }}>{item.value}</a>
            ) : (
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.value}</span>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 60, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          © 2025 Govinda Shrestha · Built with precision
        </span>
      </div>
    </Section>
  );
}

// Scroll progress bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 60, left: 0, right: 0, height: 2, zIndex: 101, background: "rgba(255,255,255,0.04)" }}>
      <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #00d4ff, #6366f1)", transition: "width 0.1s ease", boxShadow: "0 0 6px rgba(0,212,255,0.5)" }} />
    </div>
  );
}

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(false);

  const handleSplashDone = useCallback(() => {
    setShowSplash(false);
    setTimeout(() => setVisible(true), 50);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const sections = ["home", "about", "experience", "skills", "achievements", "education", "contact"];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [visible]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:ital@0;1&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #020408; color: #fff; overflow-x: hidden; }
        @keyframes pulse { 0%,100%{box-shadow:0 0 20px rgba(0,212,255,0.2)} 50%{box-shadow:0 0 40px rgba(0,212,255,0.4)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes scrollDot { 0%{transform:translateY(0);opacity:1} 80%{transform:translateY(8px);opacity:0} 100%{opacity:0} }
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      {!showSplash && (
        <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease" }}>
          <AnimatedBackground />
          <ScrollProgress />
          <Nav activeSection={activeSection} />
          <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <AchievementsSection />
            <EducationSection />
            <ContactSection />
          </main>
        </div>
      )}
    </>
  );
}
