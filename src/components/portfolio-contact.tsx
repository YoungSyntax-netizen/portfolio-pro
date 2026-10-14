import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";

export const socialLinks = {
  email: "sthandolwethu30@gmail.com",
  linkedin: "https://www.linkedin.com/in/thandolwethu-sibiya-0047b222b",
  github: "https://github.com/YoungSyntax-netizen",
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(3000),
});

export function SocialLinks() {
  return <div className="hero-social">
    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" title="GitHub"><Github size={18} /></a>
    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={18} /></a>
    <a href={`mailto:${socialLinks.email}`} className="social-link" aria-label="Email Thandolwethu" title="Email"><Mail size={18} /></a>
  </div>;
}

export function PortfolioContact() {
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = contactSchema.safeParse(Object.fromEntries(data));
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Please check your details."); return; }
    setError("");
    const { name, email, message } = result.data;
    window.location.href = `mailto:${socialLinks.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
    setOpened(true);
  }
  return <section id="contact" className="section-band">
    <div className="page-width grid gap-12 md:grid-cols-2 md:gap-24">
      <div>
        <p className="eyebrow text-muted-foreground"><span className="section-index">05 /</span> Get in touch</p>
        <h2 className="section-title mt-5">Great things start<br />with a <span className="text-primary">conversation.</span></h2>
        <p className="section-copy mt-6">Have an opportunity, a project idea, or just want to say hello? I’d love to hear from you.</p>
        <a className="mt-9 inline-flex items-center gap-3 text-sm hover:text-primary break-all" href={`mailto:${socialLinks.email}`}><Mail className="size-4 text-primary shrink-0" />{socialLinks.email}<ArrowUpRight className="size-4 shrink-0" /></a>
        <div className="mt-7 flex gap-6">
          <a className="social-link inline-flex gap-2 text-xs" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={15} />LinkedIn<ArrowUpRight size={13} /></a>
          <a className="social-link inline-flex gap-2 text-xs" href={socialLinks.github} target="_blank" rel="noopener noreferrer"><Github size={15} />GitHub<ArrowUpRight size={13} /></a>
        </div>
      </div>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label className="contact-label" htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" className="contact-input" placeholder="Alex Morgan" minLength={2} maxLength={100} required /></div>
          <div><label className="contact-label" htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" className="contact-input" placeholder="alex@example.com" maxLength={255} required /></div>
        </div>
        <div><label className="contact-label" htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" className="contact-input min-h-36 resize-y" placeholder="Let’s build something meaningful…" minLength={10} maxLength={3000} required /></div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        {opened && <p role="status" className="text-xs text-primary flex gap-2"><Check size={15} />Your email draft is ready. Send it from your email app.</p>}
        <div className="flex flex-wrap items-center justify-between gap-4"><span className="text-[11px] text-muted-foreground">Opens in your email app.</span><Button type="submit" className="h-11 px-6">Let’s connect <Send /></Button></div>
      </form>
    </div>
  </section>;
}