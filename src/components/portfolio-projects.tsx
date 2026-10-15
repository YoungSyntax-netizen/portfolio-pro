import { ArrowUpRight, ShieldCheck, Radar, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TryHackMe SOC Alert Triage 1",
    category: "01 / TRYHACKME LAB",
    description: "A guided SOC lab where I worked a simulated alert queue end to end: reading each alert, prioritising by severity and age, investigating the context behind it, and closing it with a true or false positive verdict.",
    tags: ["SIEM", "Alert Triage", "SOC L1"],
    status: "TryHackMe room",
    theme: "code",
    icon: ShieldCheck,
    previewLabel: "soc-l1-alert-triage",
    code: ["# alert triage", "", "> review queue", "> prioritise", "> investigate", "> verdict", "_"],
    link: { label: "View room", href: "https://tryhackme.com/room/socl1alerttriage" },
  },
  {
    title: "Microsoft XDR",
    category: "02 / THREAT DETECTION",
    description: "Hands-on practice with Microsoft Defender XDR alongside a SIEM platform: investigating alerts, correlating signals across endpoints, and working through how an incident is detected, scoped and contained.",
    tags: ["Microsoft Defender XDR", "SIEM", "Threat Detection"],
    status: "Hands-on practice",
    theme: "data",
    icon: Radar,
    previewLabel: "experience / practice",
    code: ["> microsoft defender xdr", "", "  investigate alerts", "  correlate signals", "  respond to incidents", "  _"],
    link: null,
  },
  {
    title: "Mathematics Tutoring",
    category: "03 / EXPERIENCE",
    description: "Tutoring high-school Mathematics: breaking concepts down until they click, adapting the explanation to how each learner thinks, and keeping patience when a topic refuses to cooperate.",
    tags: ["Mathematics", "Mentoring", "Communication"],
    status: "Real-world experience",
    theme: "web",
    icon: GraduationCap,
    previewLabel: "experience / tutoring",
    code: ["> mathematics tutoring", "", "  grade 10 - 12", "  one concept at a time", "  _"],
    link: null,
  },
];

export function PortfolioProjects() {
  return <section id="projects" className="section-band">
    <div className="page-width">
      <div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">04 /</span> Selected work</p><h2 className="section-title">Ideas into <span className="text-primary">reality.</span></h2></div></div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => <article className="project-card" key={project.title}>
          <div className="project-preview" data-theme={project.theme}><div className="code-preview"><div className="mb-3 flex items-center gap-2 border-b border-border pb-3 text-muted-foreground"><project.icon size={13} /><span className="text-[9px]">{project.previewLabel}</span></div>{project.code.map((line, index) => <div key={index} className={index === 0 ? "text-primary" : ""}>{line || "\u00a0"}</div>)}</div></div>
          <div className="project-body"><p className="eyebrow text-muted-foreground text-[9px]">{project.category}</p><h3 className="mt-3 text-xl font-medium">{project.title}</h3><p className="mt-3 text-xs leading-6 text-muted-foreground min-h-18">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="pill !px-2 !py-1 text-[10px]">{tag}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-border pt-4"><span className="text-[10px] text-muted-foreground inline-flex gap-2 items-center">{project.link && <span className="status-dot" />}{project.status}</span>{project.link ? <Button variant="ghost" size="sm" asChild><a href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} <ArrowUpRight /></a></Button> : null}</div></div>
        </article>)}
      </div>
    </div>
  </section>;
}
