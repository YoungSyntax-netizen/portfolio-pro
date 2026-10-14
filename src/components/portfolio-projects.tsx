import { ArrowUpRight, Github, Code2, Terminal, ChartNoAxesCombined } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "./portfolio-contact";

const projects = [
  { title: "Personal Portfolio", category: "01 / WEB DEVELOPMENT", description: "A personal corner of the web, bringing my engineering background, skills, and journey into technology together.", tags: ["React", "Tailwind CSS", "TypeScript"], status: "You’re here", theme: "web", icon: Code2, code: ["const engineer = {", "  name: 'Thandolwethu',", "  curiosity: Infinity,", "  nextChapter: 'software'", "};"], live: true },
  { title: "Engineering Data Explorer", category: "02 / PROJECT IDEA", description: "An exploration of Python and data analysis: turning engineering datasets into clear, useful insights.", tags: ["Python", "Data analysis"], status: "In planning", theme: "data", icon: ChartNoAxesCombined, code: ["# From data to discovery", "import pandas as pd", "", "data = pd.read_csv('materials.csv')", "print(data.describe())"], live: false },
  { title: "Maths Learning Companion", category: "03 / PROJECT IDEA", description: "A future learning tool inspired by my tutoring experience, making mathematical concepts more approachable.", tags: ["HTML", "Python", "Education"], status: "In planning", theme: "code", icon: Terminal, code: ["> learning_companion", "", "  Think. Explore. Understand.", "  One problem at a time.", "  _"], live: false },
];

export function PortfolioProjects() {
  return <section id="projects" className="section-band">
    <div className="page-width">
      <div className="section-heading"><div><p className="eyebrow text-muted-foreground"><span className="section-index">04 /</span> Selected work</p><h2 className="section-title">Ideas into <span className="text-primary">reality.</span></h2></div><Button variant="ghost" asChild><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">Explore GitHub <ArrowUpRight /></a></Button></div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => <article className="project-card" key={project.title}>
          <div className="project-preview" data-theme={project.theme}><div className="code-preview"><div className="mb-3 flex items-center gap-2 border-b border-border pb-3 text-muted-foreground"><project.icon size={13} /><span className="text-[9px]">{project.live ? "portfolio.tsx" : "concept / not yet built"}</span></div>{project.code.map((line, index) => <div key={index} className={index === 0 ? "text-primary" : ""}>{line || "\u00a0"}</div>)}</div></div>
          <div className="project-body"><p className="eyebrow text-muted-foreground text-[9px]">{project.category}</p><h3 className="mt-3 text-xl font-medium">{project.title}</h3><p className="mt-3 text-xs leading-6 text-muted-foreground min-h-18">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="pill !px-2 !py-1 text-[10px]">{tag}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-border pt-4"><span className="text-[10px] text-muted-foreground inline-flex gap-2 items-center">{project.live && <span className="status-dot" />}{project.status}</span>{project.live ? <Button variant="ghost" size="sm" asChild><a href="#home">View site <ArrowUpRight /></a></Button> : <span className="text-muted-foreground" title="Repository will be linked when this project is published"><Github size={16} /></span>}</div></div>
        </article>)}
      </div>
    </div>
  </section>;
}