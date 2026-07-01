import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Wrench,
  Brain,
  Users,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Phone,
  User,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import profileAsset from "@/assets/kushagra.jpg.asset.json";
const profilePic = profileAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kushagra Tiwari — Software Engineer | Python & ML Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Kushagra Tiwari, B.Tech CSE (AI & ML) student. Python developer, machine learning enthusiast, open to internships.",
      },
      { property: "og:title", content: "Kushagra Tiwari — Portfolio" },
      {
        property: "og:description",
        content:
          "B.Tech CSE (AI & ML) student passionate about Python, Machine Learning, and Data Science.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <SkillMarquee />
        <Experience />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-primary via-primary/60 to-primary"
    />
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="animate-blob absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="animate-blob absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-3xl [animation-delay:-6s]" />
      <div className="animate-blob absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl [animation-delay:-3s]" />
    </div>
  );
}

function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="group text-lg font-bold tracking-tight">
          Kushagra<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="story-link text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="/resume.pdf"
          download
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_oklch(0.68_0.17_245/0.6)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Resume</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 120, damping: 12 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  }

  const title = "Kushagra Tiwari".split("");

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" /> Hi, I'm
          </motion.p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {title.map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.15 + i * 0.04, type: "spring", stiffness: 180, damping: 14 }}
                className={c === " " ? "inline-block w-3" : "inline-block text-gradient"}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-lg text-muted-foreground md:text-xl"
          >
            B.Tech Computer Science & Engineering (AI & ML)
          </motion.p>
          <TypingRoles />
          <motion.blockquote
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-6 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground md:text-base"
          >
            "Passionate about building intelligent software solutions and solving
            real-world problems through technology."
          </motion.blockquote>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 1.3 } } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="/resume.pdf" primary>
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
            <MagneticButton href="#projects">
              <Rocket className="h-4 w-4" /> View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={() => { mx.set(0); my.set(0); }}
          className="flex justify-center [perspective:1000px] md:justify-end"
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary via-transparent to-cyan-400/60 opacity-40 blur-2xl"
            />
            <div className="absolute -inset-1 animate-gradient rounded-full bg-gradient-to-r from-primary via-cyan-400 to-primary p-[3px]">
              <div className="h-full w-full rounded-full bg-background" />
            </div>
            <img
              src={profilePic}
              alt="Kushagra Tiwari"
              width={288}
              height={288}
              className="relative h-56 w-56 rounded-full object-cover object-top shadow-2xl md:h-72 md:w-72"
              style={{ transform: "translateZ(40px)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TypingRoles() {
  const roles = [
    "Aspiring Software Engineer",
    "Python Developer",
    "Machine Learning Enthusiast",
  ];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const full = roles[i];
    const delay = deleting ? 40 : 70;
    const t = setTimeout(() => {
      if (!deleting && text === full) { setTimeout(() => setDeleting(true), 1400); return; }
      if (deleting && text === "") { setDeleting(false); setI((i + 1) % roles.length); return; }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return (
    <p className="mt-3 text-base text-foreground/90 md:text-lg">
      <span className="text-primary">{text}</span>
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-primary align-middle" />
    </p>
  );
}

function MagneticButton({
  href, children, primary = false,
}: { href: string; children: React.ReactNode; primary?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.a
      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
      href={href}
      download={href.endsWith(".pdf") || undefined}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: sx, y: sy }}
      className={
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-md px-5 py-2.5 text-sm font-medium transition-colors " +
        (primary
          ? "bg-primary text-primary-foreground shadow-[0_0_32px_-8px_oklch(0.68_0.17_245/0.7)] hover:bg-primary/90"
          : "border border-border bg-card/60 backdrop-blur hover:border-primary hover:text-primary")
      }
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {children}
    </motion.a>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: typeof User; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-center gap-3"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <span className="ml-2 h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
    </motion.div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeader icon={User} title="About Me" />
      <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          I am a B.Tech Computer Science and Engineering (Artificial Intelligence &
          Machine Learning) student at{" "}
          <span className="text-foreground">
            Acropolis Institute of Technology and Research, Indore
          </span>
          .
        </p>
        <p>
          I am passionate about Python, Machine Learning, and Data Science, and I
          enjoy building projects from scratch. I am always eager to learn new
          technologies and improve my problem-solving skills by working on real-world
          applications.
        </p>
        <p>
          Currently, I am looking for{" "}
          <span className="text-primary">internship opportunities</span> where I can
          contribute, learn from experienced professionals, and grow as a Software
          Engineer. My long-term goal is to build innovative AI-powered solutions
          that make a positive impact on society.
        </p>
      </Reveal>
    </Section>
  );
}

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering (AI & ML)",
    school: "Acropolis Institute of Technology and Research, Indore",
    details: [
      "University: RGPV",
      "Current Semester: 4th Semester (2nd Year)",
      "Expected Graduation: 2028",
    ],
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    school: "Sahodra Rai Government Polytechnic College, Sagar",
    details: ["CGPA: 7.5", "Passing Year: 2025"],
  },
  {
    degree: "Class X",
    school: "Kendriya Vidyalaya No. 1, Sagar",
    details: ["Percentage: 65%", "Passing Year: 2022"],
  },
];

function Education() {
  return (
    <Section id="education">
      <SectionHeader icon={GraduationCap} title="Education" />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-lg border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary/60"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="font-semibold leading-snug">{e.degree}</h3>
            <p className="mt-2 text-sm text-primary">{e.school}</p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              {e.details.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "C++"],
  },
  {
    icon: Brain,
    title: "Machine Learning & Data Science",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "TensorFlow",
      "Data Analysis",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["VS Code", "Google Colab", "Git & GitHub", "Jupyter Notebook"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Communication", "Quick Learner"],
  },
];

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader icon={Code2} title="Technical Skills" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-lg border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary/60"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="mb-4 flex items-center gap-2 text-primary">
              <g.icon className="h-5 w-5" />
              <h3 className="font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, j) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + j * 0.04 }}
                  whileHover={{ scale: 1.08, backgroundColor: "oklch(0.68 0.17 245 / 0.2)" }}
                  className="cursor-default rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function SkillMarquee() {
  const items = [
    "Python", "C++", "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
    "MySQL", "Flask", "Git", "GitHub", "VS Code", "Jupyter", "Matplotlib",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-4 py-4">
        {doubled.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="mr-2 text-primary">◆</span>{s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader icon={Briefcase} title="Experience" />
      <Reveal className="relative overflow-hidden rounded-lg border border-border bg-card/70 p-6 backdrop-blur">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <h3 className="font-semibold">Fresher</h3>
        <p className="mt-2 text-muted-foreground">
          I am currently looking for internship opportunities where I can apply my
          programming and machine learning skills while gaining practical industry
          experience.
        </p>
      </Reveal>
    </Section>
  );
}

const projectTech = [
  "Python",
  "Flask",
  "SQLite",
  "Argon2id",
  "Google Authenticator",
  "HTML",
  "CSS",
  "JavaScript",
];

const projectFeatures = [
  "Secure User Registration",
  "Login Authentication",
  "Risk-Based Authentication",
  "Multi-Factor Authentication",
  "Google Authenticator Integration",
  "Argon2id Password Hashing",
  "SQLite Database",
  "Flask Backend",
];

function Projects() {
  return (
    <Section id="projects">
      <SectionHeader icon={Rocket} title="Featured Project" />
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="group relative overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur"
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -inset-1 animate-gradient bg-gradient-to-r from-primary/20 via-cyan-400/10 to-primary/20 blur-2xl" />
        </div>
        <div className="relative border-b border-border bg-secondary/40 p-6">
          <h3 className="text-xl font-bold md:text-2xl">
            Smart Secure Login Authentication System
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {projectTech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-primary/20"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="relative space-y-4 p-6 text-muted-foreground">
          <p>
            Developed a Smart Secure Login Authentication System using{" "}
            <span className="text-foreground">Risk-Based Authentication (RBA)</span>{" "}
            and{" "}
            <span className="text-foreground">Multi-Factor Authentication (MFA)</span>.
          </p>
          <p>
            The system intelligently analyzes each login attempt based on factors
            such as:
          </p>
          <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
            {[
              "New Device Detection",
              "New Login Location",
              "Unusual Login Time",
              "Login Behavior",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
              </li>
            ))}
          </ul>
          <p>
            Instead of asking for OTP every time, it requests Google Authenticator
            verification only when suspicious activity is detected.
          </p>

          <div>
            <h4 className="mb-3 mt-6 font-semibold text-foreground">Features</h4>
            <div className="grid gap-2 text-sm sm:grid-cols-2">
              {projectFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <MagneticButton href="https://github.com/Kushuu12345/Secure-Login-RBA-MFA">
              <Github className="h-4 w-4" /> GitHub Repository
            </MagneticButton>
            <MagneticButton href="https://9e0362b552fd2297-47-247-173-78.serveousercontent.com" primary>
              <ExternalLink className="h-4 w-4" /> Live Demo
            </MagneticButton>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader icon={Award} title="Certifications" />
      <Reveal className="rounded-lg border border-border bg-card/70 p-6 backdrop-blur">
        <h3 className="font-semibold">Python Programming Certificate</h3>
        <p className="mt-2 text-muted-foreground">
          Successfully completed a Python Programming course. Available on my
          LinkedIn profile.
        </p>
        <a
          href="https://www.linkedin.com/in/kushagra-tiwari-289647384"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Linkedin className="h-4 w-4" /> View on LinkedIn
        </a>
      </Reveal>
    </Section>
  );
}

const profiles = [
  {
    name: "GitHub",
    href: "https://github.com/Kushuu12345",
    icon: Github,
    handle: "@Kushuu12345",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kushagra-tiwari-289647384",
    icon: Linkedin,
    handle: "Kushagra Tiwari",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/kushuu25/",
    icon: Code2,
    handle: "@kushuu25",
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/kushtiwari278",
    icon: Code2,
    handle: "@kushtiwari278",
  },
];

function CodingProfiles() {
  return (
    <Section id="profiles">
      <SectionHeader icon={Code2} title="Coding Profiles" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative overflow-hidden rounded-lg border border-border bg-card/70 p-5 backdrop-blur transition-colors hover:border-primary"
          >
            <div className="absolute -inset-x-4 -top-16 h-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.handle}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <SectionHeader icon={Phone} title="Contact" />
      <div className="grid gap-5 md:grid-cols-2">
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          href="mailto:kushtiwari278@gmail.com"
          className="group relative overflow-hidden rounded-lg border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
          <div className="flex items-center gap-3 text-primary">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Email
            </span>
          </div>
          <p className="mt-3 text-lg text-foreground">kushtiwari278@gmail.com</p>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card/70 p-6 backdrop-blur"
        >
          <div className="flex items-center gap-3 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Location
            </span>
          </div>
          <p className="mt-3 text-lg text-foreground">
            Indore, Madhya Pradesh, India
          </p>
        </motion.div>
      </div>

      <Reveal className="mt-10 rounded-lg border-l-4 border-primary bg-card/70 p-6 text-muted-foreground backdrop-blur">
        "Currently open to internships and collaborative projects in Software
        Development, Machine Learning, and Artificial Intelligence."
      </Reveal>

      <div className="mt-8 flex justify-center">
        <MagneticButton href="/resume.pdf" primary>
          <Download className="h-4 w-4" /> Download Resume
        </MagneticButton>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center">
        <p className="text-lg font-semibold">Kushagra Tiwari</p>
        <p className="text-sm text-muted-foreground">B.Tech CSE (AI & ML)</p>
        <div className="flex items-center gap-4 pt-2">
          {profiles.slice(0, 2).map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <p.icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href="mailto:kushtiwari278@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Made with <span className="text-primary">♥</span> using React, TanStack
          Start & Tailwind CSS
        </p>
        <p className="text-xs text-muted-foreground">
          © 2026 Kushagra Tiwari. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
