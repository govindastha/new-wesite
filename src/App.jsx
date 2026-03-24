import { useState, useEffect } from "react";

const data = {
  name: "Govinda Shrestha",
  title: "Senior Network & Infrastructure Engineer",
  location: "Auckland, New Zealand",
  phone: "+64 279 556 612",
  email: "Shresthagovinda619@gmail.com",
  linkedin: "linkedin.com/in/govindashrestha",
  linkedinUrl: "https://www.linkedin.com/in/govindashrestha",
  rights: "Full NZ Work Rights · Full Driver's Licence",
  summary: "Senior Network & Security Engineer with 7+ years of enterprise IT experience across firewall engineering, wireless infrastructure, endpoint security, identity management, and disaster recovery. At Chaudhary Group, supported 500+ users across 5+ sites — delivering a FortiGate firewall migration, Cambium/Aruba Wi-Fi optimisation, RADIUS-based SSO with VLAN segregation, CrowdStrike/Sophos Intercept X EDR, and DR using Veeam & NAKIVO. Currently pursuing Palo Alto NGFW Engineer (PCNSE) certification.",
  stats: [
    { value: "7+", label: "Years Experience" },
    { value: "500+", label: "Users Supported" },
    { value: "5+", label: "Sites Managed" },
    { value: "98%", label: "Patch Compliance" },
  ],
  competencies: [
    "Palo Alto NGFW (PCNSE – In Progress) | Fortinet | Sophos",
    "CrowdStrike Falcon & Sophos Intercept X (EDR)",
    "Microsoft 365 – Exchange, Teams, Admin Centre",
    "Veeam Backup & Replication | NAKIVO (DR)",
    "Windows Server 2012–2022 | Active Directory | Group Policy",
    "Cambium Networks / CnMaestro | Aruba Wireless",
    "DNS | DHCP | RADIUS | NPS | Mikrotik Cloud Core Router",
    "VLAN Segmentation | LAN / WAN / VPN | IDS/IPS",
    "Hyper-V Virtualisation | SSO / NAC Design",
    "L2/L3 Support | Incident Response | SOP Development",
  ],
  experience: [
    {
      company: "Chaudhary Group",
      role: "Network Infrastructure Engineer",
      dates: "Apr 2022 – Feb 2025",
      location: "Kathmandu, Nepal",
      categories: [
        {
          title: "Firewall & Perimeter Security",
          bullets: [
            "Led full Sophos XGS → FortiGate 200F migration across 3 sites, redesigning 200+ policies with zero production downtime; tuned IDS/IPS reducing false positives by ~35%.",
            "Hardened VPN access for 300+ remote users; conducted monthly firmware patching across 50+ devices achieving 98% patch compliance.",
            "Monitored logs across 5+ sites, led RCA on 15+ security incidents, and delivered management-level remediation reports.",
          ],
        },
        {
          title: "Wireless Infrastructure & Optimisation",
          bullets: [
            "Deployed and optimised 50+ Cambium APs via CnMaestro — RF surveys resolved dead zones and improved throughput by ~40% across high-density areas.",
            "Managed 5+ Aruba devices; administered SSID profiles, roaming policies, and security configurations for 500+ wireless users.",
          ],
        },
        {
          title: "SSO, Identity & Network Access Control",
          bullets: [
            "Architected SSO solution integrating Windows Server NPS (RADIUS), Active Directory, and Mikrotik CCR — eliminated separate Wi-Fi credentials for 500+ users, cutting helpdesk password resets by ~30%.",
            "Designed VLAN segregation across 8+ corporate business units; enforced 100% AD-authenticated network access via NPS RADIUS group policies.",
          ],
        },
        {
          title: "Endpoint Security",
          bullets: [
            "Deployed Sophos Intercept X (EDR) across 300+ endpoints achieving 100% coverage in 4 weeks; managed CrowdStrike Falcon averaging <30 min response time on 20+ alerts.",
            "Correlated IOCs across both platforms; incident reports contributed to a 25% reduction in repeat endpoint security events.",
          ],
        },
        {
          title: "Backup, Replication & Disaster Recovery",
          bullets: [
            "Designed DR strategy using Veeam Backup & Replication — configured offsite replication for 5+ VMs with defined RPO/RTO targets; maintained 100% backup success rate.",
            "Deployed NAKIVO as secondary backup; conducted quarterly DR drills and presented recovery readiness findings to management.",
          ],
        },
      ],
    },
    {
      company: "Solutions Consultant Pvt Ltd",
      role: "Network & Systems Administrator",
      dates: "Dec 2016 – Apr 2022",
      location: "Kathmandu, Nepal",
      categories: [
        {
          title: "Key Responsibilities",
          bullets: [
            "Administered multi-site LAN/WAN/VPN for 300+ users across 10+ client organisations, achieving 99.5%+ network uptime and resolving 95% of incidents within SLA.",
            "Managed M365 environments (Exchange Online, Teams, licensing) for 200+ users; led MDaemon → M365 migration for 150-user client in under 2 weeks with zero data loss.",
            "Maintained AD, DNS, DHCP, and Group Policy across client environments, reducing AD-related helpdesk tickets by ~20%.",
            "Reduced recurring network incidents by ~40% by overhauling preventative maintenance procedures; authored 30+ SOPs to standardise operations.",
            "Liaised with carriers and vendors to resolve WAN outages, reducing MTTR by ~25% through improved escalation and vendor management.",
          ],
        },
      ],
    },
  ],
  techStack: [
    "Microsoft 365", "Exchange Online", "Teams", "Windows Server 2012–2022",
    "Active Directory", "DNS / DHCP", "Group Policy", "Hyper-V",
    "Palo Alto NGFW", "Fortinet FortiGate", "Sophos XGS", "IDS/IPS",
    "CrowdStrike Falcon", "Sophos Intercept X", "Veeam B&R", "NAKIVO",
    "Cambium / CnMaestro", "Aruba", "NPS / RADIUS", "Mikrotik CCR",
    "LAN / WAN / VPN", "VLAN Segmentation",
  ],
  certifications: [
    { name: "Cisco Certified Network Associate (CCNA)", status: "Certified", color: "#2f81f7" },
    { name: "Palo Alto NGFW Engineer (PCNSE)", status: "In Progress – 2026", color: "#d29922" },
    { name: "Microsoft Technology Associate (MTA) – Networking Fundamentals", status: "Certified", color: "#2f81f7" },
    { name: "CompTIA A+", status: "Academic Study", color: "#8b949e" },
    { name: "CompTIA Security+", status: "Academic Study", color: "#8b949e" },
  ],
  education: [
    { degree: "Bachelor of Computer Science & Information Technology", institution: "Tribhuvan University, Kathmandu, Nepal" },
  ],
  softSkills: ["Technical Communication", "Stakeholder Management", "Structured Problem-Solving", "Cross-Team Collaboration", "Attention to Detail", "Adaptability", "Time Management", "Client Relationship Management"],
  languages: [
    { lang: "English", level: "Professional" },
    { lang: "Nepali", level: "Native" },
    { lang: "Newa", level: "Native" },
    { lang: "Hindi", level: "Conversational" },
  ],
};

const C = {
  bg: "#0d1117",
  surface: "#161b22",
  border: "#21262d",
  accent: "#2f81f7",
  accentDim: "rgba(47,129,247,0.1)",
  accentBorder: "rgba(47,129,247,0.3)",
  text: "#e6edf3",
  muted: "#8b949e",
  faint: "#484f58",
  success: "#3fb950",
  warning: "#d29922",
};

function ScrollBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      setP(t > 0 ? (window.scrollY / t) * 100 : 0);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div style={{ position: "fixed", top: 60, left: 0, right: 0, height: 2, zIndex: 200, background: C.border }}>
      <div style={{ height: "100%", width: `${p}%`, background: C.accent, transition: "width 0.1s" }} />
    </div>
  );
}

function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Experience", "Skills", "Certifications", "Contact"];
  const go = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(13,17,23,0.97)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${C.border}`, height: 60,
      display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, background: C.accent,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "system-ui",
        }}>GS</div>
        <span style={{ color: C.text, fontWeight: 600, fontSize: 15, fontFamily: "system-ui" }}>Govinda Shrestha</span>
      </div>
      <div style={{ display: "flex", gap: 2 }} className="desk-nav">
        {links.map(l => (
          <button key={l} onClick={() => go(l)} style={{
            background: active === l.toLowerCase() ? C.accentDim : "none",
            border: `1px solid ${active === l.toLowerCase() ? C.accentBorder : "transparent"}`,
            borderRadius: 6, cursor: "pointer", padding: "5px 14px",
            fontSize: 13, fontFamily: "system-ui", fontWeight: 500,
            color: active === l.toLowerCase() ? C.accent : C.muted, transition: "all 0.15s",
          }}>{l}</button>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} className="mob-btn" style={{ background: "none", border: "none", cursor: "pointer", color: C.text, padding: 4 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
        </svg>
      </button>
      {open && (
        <div style={{ position: "absolute", top: 60, left: 0, right: 0, background: C.surface, borderBottom: `1px solid ${C.border}`, zIndex: 99 }}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              display: "block", width: "100%", background: "none", border: "none", cursor: "pointer",
              padding: "13px 24px", textAlign: "left", fontSize: 15, fontFamily: "system-ui",
              color: active === l.toLowerCase() ? C.accent : C.muted,
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <div style={{ width: 3, height: 20, background: C.accent, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: C.text, fontFamily: "system-ui" }}>{children}</h2>
    </div>
  );
}

function Badge({ children, color = C.accent }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "3px 10px", borderRadius: 20,
      background: `${color}18`, border: `1px solid ${color}40`,
      fontSize: 12, color: color, fontFamily: "system-ui", fontWeight: 500, whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function Home() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 0 60px" }}>
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: 16 }}>
          <Badge color={C.muted}>{data.location}</Badge>
        </div>
        <h1 style={{ margin: "0 0 8px", fontFamily: "system-ui", fontWeight: 800, fontSize: "clamp(30px, 5.5vw, 52px)", color: C.text, lineHeight: 1.15 }}>{data.name}</h1>
        <p style={{ margin: "0 0 6px", fontSize: "clamp(15px, 2vw, 20px)", color: C.accent, fontFamily: "system-ui", fontWeight: 600 }}>{data.title}</p>
        <p style={{ margin: "0 0 24px", fontSize: 13, color: C.muted, fontFamily: "system-ui" }}>{data.rights}</p>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: C.muted, fontFamily: "system-ui", lineHeight: 1.8, maxWidth: 700 }}>{data.summary}</p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
          {data.stats.map((s, i) => (
            <div key={i} style={{ padding: "14px 22px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, textAlign: "center", minWidth: 90 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: C.accent, fontFamily: "system-ui" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: C.muted, fontFamily: "system-ui", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "10px 22px", background: C.accent, border: "none", borderRadius: 8, color: "#fff", fontFamily: "system-ui", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>View Experience</button>
          <a href={`mailto:${data.email}`} style={{ padding: "10px 22px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontFamily: "system-ui", fontSize: 14, fontWeight: 500, cursor: "pointer", textDecoration: "none", display: "inline-block" }}>Contact Me</a>
          <a href={data.linkedinUrl} target="_blank" rel="noreferrer" style={{ padding: "10px 22px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontFamily: "system-ui", fontSize: 14, fontWeight: 500, cursor: "pointer", textDecoration: "none", display: "inline-block" }}>LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "80px 0" }}>
      <SectionLabel>Core Competencies</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8, marginBottom: 48 }}>
        {data.competencies.map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "11px 14px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent, flexShrink: 0, marginTop: 7 }} />
            <span style={{ fontSize: 13, color: C.text, fontFamily: "system-ui", lineHeight: 1.5 }}>{c}</span>
          </div>
        ))}
      </div>
      <SectionLabel>Technical Stack</SectionLabel>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {data.techStack.map((t, i) => (
          <span key={i} style={{ padding: "5px 12px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, fontSize: 13, color: C.muted, fontFamily: "system-ui" }}>{t}</span>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [expanded, setExpanded] = useState(0);
  const [openCats, setOpenCats] = useState({});
  const toggleCat = (ei, ci) => {
    const k = `${ei}-${ci}`;
    setOpenCats(p => ({ ...p, [k]: p[k] === false ? true : false }));
  };
  return (
    <section id="experience" style={{ padding: "80px 0" }}>
      <SectionLabel>Professional Experience</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {data.experience.map((exp, i) => (
          <div key={i} style={{ background: C.surface, border: `1px solid ${expanded === i ? C.accentBorder : C.border}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
            <div onClick={() => setExpanded(expanded === i ? -1 : i)} style={{ padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, fontFamily: "system-ui", marginBottom: 3 }}>{exp.role}</div>
                <div style={{ fontSize: 14, color: C.accent, fontFamily: "system-ui", fontWeight: 500 }}>{exp.company} · {exp.location}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Badge>{exp.dates}</Badge>
                <span style={{ color: C.muted, fontSize: 14, display: "inline-block", transition: "transform 0.2s", transform: expanded === i ? "rotate(180deg)" : "none" }}>▾</span>
              </div>
            </div>
            {expanded === i && (
              <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${C.border}` }}>
                {exp.categories.map((cat, j) => {
                  const k = `${i}-${j}`;
                  const isOpen = openCats[k] !== false;
                  return (
                    <div key={j} style={{ marginTop: 16 }}>
                      <button onClick={() => toggleCat(i, j)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 8, marginBottom: isOpen ? 10 : 0 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, fontFamily: "system-ui", letterSpacing: 0.8, textTransform: "uppercase" }}>{cat.title}</span>
                        <span style={{ color: C.faint, fontSize: 11 }}>{isOpen ? "▴" : "▾"}</span>
                      </button>
                      {isOpen && (
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                          {cat.bullets.map((b, k2) => (
                            <li key={k2} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                              <span style={{ color: C.accent, flexShrink: 0, fontSize: 10, marginTop: 5 }}>●</span>
                              <span style={{ fontSize: 14, color: C.muted, fontFamily: "system-ui", lineHeight: 1.75 }}>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 0" }}>
      <SectionLabel>Skills & Languages</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, fontFamily: "system-ui", marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.8 }}>Soft Skills</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {data.softSkills.map((s, i) => (
              <span key={i} style={{ padding: "4px 10px", background: C.accentDim, border: `1px solid ${C.accentBorder}`, borderRadius: 6, fontSize: 12, color: C.text, fontFamily: "system-ui" }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, fontFamily: "system-ui", marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.8 }}>Languages</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.languages.map((l, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: C.text, fontFamily: "system-ui" }}>{l.lang}</span>
                <Badge color={l.level === "Native" ? C.success : C.accent}>{l.level}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" style={{ padding: "80px 0" }}>
      <SectionLabel>Certifications</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 48 }}>
        {data.certifications.map((c, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, padding: "14px 18px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: c.color, flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: C.text, fontFamily: "system-ui", fontWeight: 500 }}>{c.name}</span>
            </div>
            <Badge color={c.color}>{c.status}</Badge>
          </div>
        ))}
      </div>
      <SectionLabel>Education</SectionLabel>
      {data.education.map((e, i) => (
        <div key={i} style={{ padding: "18px 22px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.text, fontFamily: "system-ui", marginBottom: 4 }}>{e.degree}</div>
          <div style={{ fontSize: 13, color: C.muted, fontFamily: "system-ui" }}>{e.institution}</div>
        </div>
      ))}
    </section>
  );
}

function Contact() {
  const items = [
    { icon: "✉", label: "Email", value: data.email, href: `mailto:${data.email}` },
    { icon: "📞", label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    { icon: "🔗", label: "LinkedIn", value: data.linkedin, href: data.linkedinUrl },
    { icon: "📍", label: "Location", value: data.location, href: null },
  ];
  return (
    <section id="contact" style={{ padding: "80px 0 100px" }}>
      <SectionLabel>Contact</SectionLabel>
      <p style={{ fontSize: 15, color: C.muted, fontFamily: "system-ui", marginBottom: 24, lineHeight: 1.7 }}>
        Open to senior network & infrastructure engineering opportunities in New Zealand.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
        {items.map((item, i) => (
          <div key={i} style={{ padding: "16px 18px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10 }}>
            <div style={{ fontSize: 18, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontSize: 11, color: C.faint, fontFamily: "system-ui", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.8 }}>{item.label}</div>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ fontSize: 13, color: C.accent, fontFamily: "system-ui", textDecoration: "none", wordBreak: "break-all" }}>{item.value}</a>
            ) : (
              <span style={{ fontSize: 13, color: C.text, fontFamily: "system-ui" }}>{item.value}</span>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <span style={{ fontSize: 13, color: C.faint, fontFamily: "system-ui" }}>© 2025 Govinda Shrestha · Auckland, New Zealand</span>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = ["home", "about", "experience", "skills", "certifications", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0d1117; color: #e6edf3; }
        .desk-nav { display: flex !important; }
        .mob-btn { display: none !important; }
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: flex !important; }
        }
      `}</style>
      <ScrollBar />
      <Nav active={active} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <Home />
        <div style={{ height: 1, background: "#21262d" }} />
        <About />
        <div style={{ height: 1, background: "#21262d" }} />
        <Experience />
        <div style={{ height: 1, background: "#21262d" }} />
        <Skills />
        <div style={{ height: 1, background: "#21262d" }} />
        <Certifications />
        <div style={{ height: 1, background: "#21262d" }} />
        <Contact />
      </div>
    </>
  );
}
