import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import profilePic from "@/assets/profile-placeholder.jpg";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
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

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Kushagra<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Hi, I'm
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Kushagra Tiwari
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            B.Tech Computer Science & Engineering (AI & ML)
          </p>
          <p className="mt-2 text-base text-foreground/90 md:text-lg">
            Aspiring Software Engineer · Python Developer · Machine Learning Enthusiast
          </p>
          <blockquote className="mt-6 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground md:text-base">
            "Passionate about building intelligent software solutions and solving
            real-world problems through technology."
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-primary/20 blur-2xl" />
            {/* TODO: Replace src/assets/profile-placeholder.jpg with your own photo (keep the same filename, or update the import above). */}
            <img
              src={profilePic}
              alt="Kushagra Tiwari"
              width={288}
              height={288}
              className="relative h-56 w-56 rounded-full border-4 border-primary/40 object-cover shadow-xl md:h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: typeof User; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </div>
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
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
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
      </div>
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
        {education.map((e) => (
          <div
            key={e.degree}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <h3 className="font-semibold leading-snug">{e.degree}</h3>
            <p className="mt-2 text-sm text-primary">{e.school}</p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              {e.details.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </div>
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
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <div className="mb-4 flex items-center gap-2 text-primary">
              <g.icon className="h-5 w-5" />
              <h3 className="font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader icon={Briefcase} title="Experience" />
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="font-semibold">Fresher</h3>
        <p className="mt-2 text-muted-foreground">
          I am currently looking for internship opportunities where I can apply my
          programming and machine learning skills while gaining practical industry
          experience.
        </p>
      </div>
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
      <article className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border bg-secondary/40 p-6">
          <h3 className="text-xl font-bold md:text-2xl">
            Smart Secure Login Authentication System
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {projectTech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 p-6 text-muted-foreground">
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
            <a
              href="https://github.com/Kushuu12345/Secure-Login-RBA-MFA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub Repository
            </a>
            <a
              href="https://9e0362b552fd2297-47-247-173-78.serveousercontent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader icon={Award} title="Certifications" />
      <div className="rounded-lg border border-border bg-card p-6">
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
      </div>
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
        {profiles.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.handle}</p>
              </div>
            </div>
          </a>
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
        <a
          href="mailto:kushtiwari278@gmail.com"
          className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
        >
          <div className="flex items-center gap-3 text-primary">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Email
            </span>
          </div>
          <p className="mt-3 text-lg text-foreground">kushtiwari278@gmail.com</p>
        </a>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Location
            </span>
          </div>
          <p className="mt-3 text-lg text-foreground">
            Indore, Madhya Pradesh, India
          </p>
        </div>
      </div>

      <blockquote className="mt-10 rounded-lg border-l-4 border-primary bg-card p-6 text-muted-foreground">
        "Currently open to internships and collaborative projects in Software
        Development, Machine Learning, and Artificial Intelligence."
      </blockquote>

      <div className="mt-8 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" /> Download Resume
        </a>
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
