import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Code2, Terminal, Wrench, Users, MapPin, GraduationCap, ShieldCheck, Menu, X, Heart, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioContact, SocialLinks } from "@/components/portfolio-contact";
import { PortfolioProjects } from "@/components/portfolio-projects";
import heroImage from "@/assets/chrome-knot.jpg";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Thandolwethu Sibiya | Aspiring Chief Information Officer" },
    { name: "description", content: "Meet Thandolwethu Sibiya: an aspiring Chief Information Officer with a foundation in metallurgy and materials engineering. Explore skills, qualifications, and the journey into technology." },
    { property: "og:title", content: "Thandolwethu Sibiya | Aspiring Chief Information Officer" },
    { property: "og:description", content: "An engineering mind. A builder’s curiosity. Discover Thandolwethu’s work, skills, and journey toward technology leadership." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [{ id: "about", label: "About" }, { id: "skills", label: "Skills" }, { id: "certifications", label: "Certifications" }, { id: "projects", label: "Projects" }];
const skillGroups = [
  { title: "Frontend", icon: Code2, subtitle: "Building my foundations", skills: ["HTML · foundational", "Web development · learning", "Accessible interfaces · exploring"] },
  { title: "Backend & Analysis", icon: Terminal, subtitle: "Logic meets problem-solving", skills: ["Python", "MATLAB", "Data analysis", "Technical reporting"] },
  { title: "Tools & DevOps", icon: Wrench, subtitle: "A practical engineering toolkit", skills: ["Microsoft Office Suite", "Computer-Aided Design", "Technical documentation", "Git & GitHub · learning"] },
  { title: "Human Skills", icon: Users, subtitle: "Better work, together", skills: ["Analytical problem-solving", "Communication & presentation", "Leadership & mentoring", "Teamwork & adaptability"] },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: "-15% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    <header className="site-header">
      <div className="page-width flex h-full items-center justify-between">
        <a href="#home" aria-label="Thandolwethu Sibiya home" className="brand-mark">ts<span className="text-primary">.</span></a>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">{navigation.map((item) => <a key={item.id} href={`#${item.id}`} className={`nav-link ${active === item.id ? "active" : ""}`}>{item.label}</a>)}</nav>
        <div className="flex gap-3 items-center"><Button variant="outline" asChild className="hidden sm:inline-flex h-10 px-5 text-xs"><a href="#contact">Let’s talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden border-b border-border bg-background px-5 py-5 flex flex-col gap-5">{[...navigation, { id: "contact", label: "Contact" }].map((item) => <a key={item.id} href={`#${item.id}`} className="nav-link" onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>}
    </header>
    <main>
      <section id="home" className="hero">
        <img src={heroImage} alt="Interconnected polished metal sculpture, reflecting engineering and creative problem-solving" className="hero-art" width={1536} height={1024} fetchPriority="high" />
        <div className="page-width hero-content reveal">
          <div className="availability"><span className="status-dot" /><span>OPEN TO OPPORTUNITIES</span></div>
          <p className="eyebrow mt-7 text-muted-foreground">Engineering mind. Builder’s curiosity.</p>
          <h1 className="hero-title">Thandolwethu<br /><span className="text-primary">Sibiya.</span></h1>
          <h2 className="text-base md:text-lg font-medium">Aspiring Chief Information Officer <span className="text-muted-foreground mx-1">/</span> Tech Professional</h2>
          <p className="hero-description mt-4">From understanding materials to exploring code. I bring an engineering mindset, a love for problem-solving, the drive to build things that make a difference, strong communication skills and a desire to find an intersection between tech and engineering.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Button asChild className="h-12 px-5 text-xs"><a href={resume.url} download="Thandolwethu-Sibiya-Resume.pdf" target="_blank" rel="noopener noreferrer"><ArrowDownToLine /> Download résumé</a></Button><Button asChild variant="outline" className="h-12 px-5 text-xs"><a href="#contact">Contact me <ArrowUpRight /></a></Button></div>
          <div className="hero-bottom"><div className="flex items-center gap-6"><SocialLinks /><span className="h-4 border-l border-border" /><span className="hidden sm:inline-flex gap-2 items-center text-[10px] text-muted-foreground"><MapPin size={13} /> Johannesburg, South Africa</span></div><a href="#about" className="flex items-center gap-3 text-[10px] text-muted-foreground">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
        </div>
      </section>
      <section id="about" className="section-band bg-surface">
        <div className="page-width">
          <div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">01 /</span> The person behind the code</p><h2 className="section-title">A little about <span className="text-primary">me.</span></h2></div><p className="section-copy">Rooted in engineering.<br />Driven by curiosity. Moving into tech.</p></div>
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div><p className="about-copy">I’m Thandolwethu Linda Sibiya, an aspiring software engineer with a foundation in <span className="text-foreground">Metallurgy and Materials Engineering</span> at the University of the Witwatersrand.</p><p className="about-copy mt-5">My journey spans hands-on technical inspections, mathematics tutoring, and creative storytelling. Each experience has shaped the way I think: analytically, collaboratively, and with attention to the details that matter.</p><p className="about-copy mt-5">Now, I’m bringing that mindset into technology—developing my programming skills and exploring how software can turn complex challenges into meaningful solutions.</p><div className="mt-7 flex flex-wrap gap-2"><span className="pill"><MapPin size={12} />Johannesburg, South Africa</span><span className="pill"><GraduationCap size={13} />University of the Witwatersrand</span></div></div>
            <div><p className="eyebrow text-muted-foreground mb-7">Education & qualifications</p><div className="qualification"><div className="flex justify-between gap-3"><span className="text-xs text-primary">University of the Witwatersrand</span><span className="text-[10px] text-muted-foreground whitespace-nowrap">2022 — 2026</span></div><h3 className="mt-3 text-lg">BScEng, Metallurgy &<br />Materials Engineering</h3><p className="mt-3 text-xs text-muted-foreground">Engineering studies · Johannesburg</p></div><div className="qualification"><div className="flex justify-between gap-3"><span className="text-xs text-primary">Netherland Park Secondary School</span><span className="text-[10px] text-muted-foreground whitespace-nowrap">2017 — 2021</span></div><h3 className="mt-3 text-lg">National Senior Certificate</h3><p className="mt-3 text-xs text-muted-foreground">Deputy Head Boy of Culture · Grade 12</p></div><div className="mt-5 flex gap-3 text-xs text-muted-foreground"><MoveUpRight size={17} className="text-primary shrink-0" /><p className="leading-6">Always learning. Always connecting the dots.</p></div></div>
          </div>
        </div>
      </section>
      <section id="skills" className="section-band"><div className="page-width"><div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">02 /</span> My toolkit</p><h2 className="section-title">Skills with <span className="text-primary">purpose.</span></h2></div><p className="section-copy">A growing technical toolkit, backed by practical experience and human skills.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <article key={group.title} className="skill-card"><group.icon size={23} className="text-primary" /><h3 className="mt-5 text-base">{group.title}</h3><p className="mt-2 text-[10px] text-muted-foreground">{group.subtitle}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
      <section id="certifications" className="section-band bg-surface"><div className="page-width"><div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">03 /</span> Learning never stops</p><h2 className="section-title">Curiosity, <span className="text-primary">certified.</span></h2></div><p className="section-copy">Building knowledge, one milestone at a time.</p></div><article className="credential-card"><div className="credential-icon"><ShieldCheck size={36} strokeWidth={1.5} /></div><div className="flex-1 min-w-48"><p className="eyebrow text-primary text-[9px]">Cisco Networking Academy</p><h3 className="mt-3 text-xl">Introduction to Cybersecurity</h3><p className="mt-3 text-xs text-muted-foreground">Issued September 2026 <span className="mx-2">·</span> Cybersecurity fundamentals</p></div><div className="flex flex-col items-start sm:items-end gap-3"><span className="pill text-primary"><ShieldCheck size={13} />Course completed</span><Button variant="ghost" size="sm" asChild><a href="https://www.netacad.com/courses/introduction-to-cybersecurity" target="_blank" rel="noopener noreferrer">Explore the course <ArrowUpRight /></a></Button></div></article></div></section>
      <PortfolioProjects />
      <PortfolioContact />
    </main>
    <footer className="footer"><div className="page-width flex flex-wrap items-center justify-between gap-5"><a href="#home" aria-label="Back to top" className="brand-mark text-xl">ts<span className="text-primary">.</span></a><p className="text-[10px] text-muted-foreground">© 2026 Thandolwethu Sibiya. Crafted with curiosity <Heart size={10} className="inline ml-1 text-primary" /></p><SocialLinks /></div></footer>
  </>;
}
