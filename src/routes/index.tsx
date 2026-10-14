import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Code2, Terminal, Wrench, Users, MapPin, GraduationCap, ShieldCheck, Menu, X, Heart, Sparkles } from "lucide-react";
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
  { title: "Tools & DevOps", icon: Wrench, subtitle: "A practical engineering toolkit", skills: ["Microsoft Defender XDR", "Microsoft Office Suite", "Computer-Aided Design", "Technical documentation", "Git & GitHub · learning"] },
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
          <div className="grid gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
            <div>
              <p className="about-lead">Thandolwethu Sibiya is an aspiring cybersecurity and technology professional based in the Braamontein area. My foundation is in Metallurgy and Materials Engineering, which I studied at the University of the Witwatersrand. It taught me to solve problems systematically, work with data and pay close attention to detail and safety.</p>
              <p className="about-copy mt-5">I’m now building my career at the intersection of engineering and technology. I’m currently part of the <span className="text-foreground">FNB App Academy</span>, where I’m learning app development and business. I’ve completed the <span className="text-foreground">Introduction to Cybersecurity</span> course with Cisco Networking Academy and I’m studying Networking Basics. I’ve also worked with <span className="text-foreground">Microsoft Defender XDR</span> and a <span className="text-foreground">SIEM platform</span> on TryHackMe, which gave me hands-on exposure to threat detection and security monitoring.</p>
              <p className="about-copy mt-5">My long-term goal is to become a <span className="text-foreground">Chief Information Security Officer (CISO)</span>. I want to bring an engineering mindset to protecting systems, people and data, and combine technical depth with business understanding and strong communication.</p>
              <p className="about-copy mt-5">Alongside my studies, I’ve built real-world experience in inspection support, sales, tutoring and media. I tutor high school Mathematics, worked as an Assistant Technician in non-destructive testing, and presented the award-winning documentary <span className="text-foreground">Koi in the Pond</span>, which won Best Documentary at the International Fun Film Festival in Madeira in 2026. These roles built my communication, adaptability and ability to work to targets and standards.</p>
              <p className="about-copy mt-5">I’m looking for internships, learnerships and entry-level opportunities in <span className="text-foreground">cybersecurity, IT and tech</span>, where I can keep learning and add value from day one.</p>
              <div className="mt-7 flex flex-wrap gap-2"><span className="pill"><MapPin size={12} />Johannesburg, South Africa</span><span className="pill"><GraduationCap size={13} />University of the Witwatersrand</span></div>
            </div>
            <div className="md:sticky md:top-28 md:self-start"><p className="eyebrow text-muted-foreground mb-7">Education & qualifications</p><div className="qualification"><div className="flex justify-between gap-3"><span className="text-xs text-primary">FNB App Academy</span><span className="text-[10px] text-muted-foreground whitespace-nowrap">In progress</span></div><h3 className="mt-3 text-lg">App Development<br />& Business</h3><p className="mt-3 text-xs text-muted-foreground">Building app development and business fundamentals</p></div><div className="qualification"><div className="flex justify-between gap-3"><span className="text-xs text-primary">University of the Witwatersrand</span><span className="text-[10px] text-muted-foreground whitespace-nowrap">2022 — 2026</span></div><h3 className="mt-3 text-lg">BScEng, Metallurgy &<br />Materials Engineering</h3><p className="mt-3 text-xs text-muted-foreground">Engineering studies · Johannesburg</p></div><div className="qualification"><div className="flex justify-between gap-3"><span className="text-xs text-primary">Netherland Park Secondary School</span><span className="text-[10px] text-muted-foreground whitespace-nowrap">2017 — 2021</span></div><h3 className="mt-3 text-lg">National Senior Certificate</h3><p className="mt-3 text-xs text-muted-foreground">Deputy Head Boy of Culture · Grade 12</p></div><div className="mt-7 border-t border-border pt-6"><p className="eyebrow text-muted-foreground mb-4">Right now</p><ul className="space-y-3 text-xs text-muted-foreground"><li className="flex gap-3"><ShieldCheck size={14} className="text-primary shrink-0 mt-0.5" /><span>Practising threat detection and security monitoring on TryHackMe</span></li><li className="flex gap-3"><Terminal size={14} className="text-primary shrink-0 mt-0.5" /><span>Working with Microsoft Defender XDR and a SIEM platform</span></li><li className="flex gap-3"><GraduationCap size={14} className="text-primary shrink-0 mt-0.5" /><span>Studying Networking Basics with Cisco Networking Academy</span></li></ul></div></div>
          </div>
        </div>
      </section>
      <section id="skills" className="section-band"><div className="page-width"><div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">02 /</span> My toolkit</p><h2 className="section-title">Skills with <span className="text-primary">purpose.</span></h2></div><p className="section-copy">A growing technical toolkit, backed by practical experience and human skills.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <article key={group.title} className="skill-card"><group.icon size={23} className="text-primary" /><h3 className="mt-5 text-base">{group.title}</h3><p className="mt-2 text-[10px] text-muted-foreground">{group.subtitle}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
      <section id="certifications" className="section-band bg-surface"><div className="page-width"><div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">03 /</span> Learning never stops</p><h2 className="section-title">Curiosity, <span className="text-primary">certified.</span></h2></div><p className="section-copy">Building knowledge, one milestone at a time.</p></div><div className="flex flex-col gap-4"><article className="credential-card"><div className="credential-icon"><ShieldCheck size={36} strokeWidth={1.5} /></div><div className="flex-1 min-w-48"><p className="eyebrow text-primary text-[9px]">Cisco Networking Academy</p><h3 className="mt-3 text-xl">Introduction to Cybersecurity</h3><p className="mt-3 text-xs text-muted-foreground">Issued September 2026 <span className="mx-2">·</span> Cybersecurity fundamentals</p></div><div className="flex flex-col items-start sm:items-end gap-3"><span className="pill text-primary"><ShieldCheck size={13} />Course completed</span><Button variant="ghost" size="sm" asChild><a href="https://www.netacad.com/courses/introduction-to-cybersecurity" target="_blank" rel="noopener noreferrer">Explore the course <ArrowUpRight /></a></Button></div></article><article className="credential-card"><div className="credential-icon"><Sparkles size={36} strokeWidth={1.5} /></div><div className="flex-1 min-w-48"><p className="eyebrow text-primary text-[9px]">Google</p><h3 className="mt-3 text-xl">Google AI Essentials</h3><p className="mt-3 text-xs text-muted-foreground">Practical AI skills <span className="mx-2">·</span> Generative AI, prompting and AI tools for everyday work</p></div><div className="flex flex-col items-start sm:items-end gap-3"><span className="pill text-primary"><ShieldCheck size={13} />Course completed</span><Button variant="ghost" size="sm" asChild><a href="https://www.coursera.org/learn/google-ai-essentials" target="_blank" rel="noopener noreferrer">Explore the course <ArrowUpRight /></a></Button></div></article></div></div></section>
      <PortfolioProjects />
      <PortfolioContact />
    </main>
    <footer className="footer"><div className="page-width flex flex-wrap items-center justify-between gap-5"><a href="#home" aria-label="Back to top" className="brand-mark text-xl">ts<span className="text-primary">.</span></a><p className="text-[10px] text-muted-foreground">© 2026 Thandolwethu Sibiya. Crafted with curiosity <Heart size={10} className="inline ml-1 text-primary" /></p><SocialLinks /></div></footer>
  </>;
}
