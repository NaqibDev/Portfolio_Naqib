"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Menu,
  X,
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  Database,
  Cpu,
  Layers,
  Code2,
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

interface ProjectItem {
  id: string;
  num: string;
  category: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  tech: string[];
  badge?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "juristech-fintech",
    num: "01",
    category: "Fintech & Banking",
    year: "2025",
    title: "JurisTech Enterprise Lending & Workflow Engine",
    subtitle: "Software Engineer — JurisTech",
    description:
      "Structured and optimized mission-critical relational databases through advanced normalization. Partnered across engineering squads to deliver high-throughput web solutions enabling new loan offerings and supporting a customer base exceeding 100,000 monthly users.",
    outcome: "Engineered scalable microservices and normalized schema serving 100,000+ monthly users",
    tech: ["PHP", "SQL Server", "JavaScript", "Microservices", "Agile/Scrum", "REST APIs"],
    badge: "Fintech Enterprise",
  },
  {
    id: "sapura-mis",
    num: "02",
    category: "Enterprise MIS & Infrastructure",
    year: "2025 – Present",
    title: "Sapura Industrial Infrastructure & ERP Operations",
    subtitle: "Management Information System — Sapura Industrial Berhad (Dec 2025 – Present)",
    description:
      "Administering mission-critical IT infrastructure and enterprise systems across automotive manufacturing environments. Managing Kingdee ERP inventory modules, MES server connectivity, TP-Link Omada network topologies (VLAN, DHCP, static routing), AlmaLinux remote services, and vendor equipment procurement.",
    outcome: "High network stability, seamless ERP operations, and resilient MES server connectivity",
    tech: ["ERP (Kingdee)", "MES Systems", "TP-Link Omada", "Linux (AlmaLinux)", "TCP/IP & VLAN", "SQL Server"],
    badge: "Current Role",
  },
  {
    id: "multivendor-ecommerce",
    num: "03",
    category: "AI & Soft Computing",
    year: "2024",
    title: "Multi-Vendor Marketplace & Recommendation System",
    subtitle: "UiTM Final Year Capstone Project",
    description:
      "Architected and deployed a multi-vendor e-commerce platform incorporating soft computing recommendation algorithms. Designed automated product categorization, intelligent search filtering, vendor store dashboards, and personalized customer recommendations.",
    outcome: "Full-scale multi-vendor system with personalized recommendation engine",
    tech: ["PHP", "MySQL", "JavaScript", "Soft Computing", "Bootstrap", "Apache"],
    badge: "FYP Capstone",
  },
  {
    id: "it-chenta-dotnet",
    num: "04",
    category: "Enterprise .NET / Blazor",
    year: "2024",
    title: "Enterprise Client Management Applications",
    subtitle: "Software Developer — IT Chenta Enterprise",
    description:
      "Developed modular web applications using C#, .NET, and Blazor with MudBlazor, Radzen, and Telerik component libraries. Led the architectural restructuring of a legacy client codebase to boost maintainability and reduce debugging overhead.",
    outcome: "Led project restructuring, improving code maintainability and UX delivery across sprints",
    tech: ["C#", ".NET", "Blazor", "MudBlazor", "Radzen", "Telerik", "Git"],
    badge: "Software Developer",
  },
  {
    id: "taskmaster-mobile",
    num: "05",
    category: "Mobile & Cloud Sync",
    year: "2023",
    title: "TaskMaster Real-Time Productivity App",
    subtitle: "Mobile Application — UiTM Jasin",
    description:
      "Comprehensive mobile productivity and task orchestration application. Integrated Firebase cloud synchronization and offline data persistence to ensure uninterrupted real-time updates across multiple mobile and web devices.",
    outcome: "Seamless real-time synchronization across devices with offline data caching",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Android Studio"],
  },
  {
    id: "escooter-rental",
    num: "06",
    category: "Web & Payment Gateway",
    year: "2023",
    title: "E-Scooter Urban Rental & Booking System",
    subtitle: "Full-Stack Web Project",
    description:
      "Interactive urban mobility web portal featuring scooter fleet location tracking, real-time availability checks, user verification, and secure automated payment gateway integration for pay-per-minute rentals.",
    outcome: "Responsive booking platform with automated payment verification flow",
    tech: ["PHP", "MySQL", "JavaScript", "Payment Gateway API", "CSS3"],
  },
];

const archiveProjects = [
  {
    year: "2026",
    title: "Automotive Plant MIS & Metrics Dashboard",
    company: "Sapura Industrial Berhad",
    role: "MIS Engineer",
    tech: ["Next.js", "SQL Server", "PowerBI"],
  },
  {
    year: "2025",
    title: "Core Banking Loan Origination Module",
    company: "JurisTech",
    role: "Software Engineer",
    tech: ["PHP", "SQL Server", "Microservices"],
  },
  {
    year: "2025",
    title: "Debt Recovery & Compliance Audit Engine",
    company: "JurisTech",
    role: "Software Engineer",
    tech: ["PHP", "SQL Server", "REST APIs"],
  },
  {
    year: "2024",
    title: "Multi-Vendor Marketplace Recommendation Engine",
    company: "UiTM Capstone",
    role: "Lead Developer",
    tech: ["PHP", "MySQL", "Soft Computing"],
  },
  {
    year: "2024",
    title: "Modular Client Portal & Component Refactor",
    company: "IT Chenta Enterprise",
    role: "Software Developer",
    tech: ["C#", ".NET", "Blazor", "MudBlazor"],
  },
  {
    year: "2023",
    title: "TaskMaster Cloud Task Management",
    company: "UiTM Project",
    role: "Mobile App Developer",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    year: "2023",
    title: "E-Scooter Rental & Payment Gateway System",
    company: "Web Project",
    role: "Full Stack Developer",
    tech: ["PHP", "MySQL", "Payment API"],
  },
];

const awardsData = [
  {
    title: "Gold Medal",
    event: "Virtual Asia Innovation Show 2023",
    desc: "Recognized for innovative software solution and technological execution.",
  },
  {
    title: "Finalist & Competitor",
    event: "rAKSASA CTF & iHack Capture The Flag",
    desc: "CyberSecurity hacking, web vulnerabilities identification, defense strategies.",
  },
  {
    title: "Dual Participant",
    event: "Oracle Data Hackathon 2021",
    desc: "Smart City Challenge & Fun Challenge applying SQL and data analytics.",
  },
  {
    title: "Certified Specialist",
    event: "Industry 4.0 AI & Machine Learning (FSTC / KISMEC)",
    desc: "Comprehensive program focused on AI, Neural Networks & Smart Manufacturing.",
  },
];

export default function PortfolioView() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Form State for WhatsApp & Email Enquiry
  const [formName, setFormName] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formType, setFormType] = useState("Enterprise MIS / Software System");
  const [formBudget, setFormBudget] = useState("RM 3,000 - RM 8,000");
  const [formNotes, setFormNotes] = useState("");

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => carousel.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.72;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "601161000221"; // Naqib Aiman's real phone number
    const text = encodeURIComponent(
      `Hello Muhammad Naqib Aiman,\n\nI am contacting you from your portfolio website regarding an opportunity:\n` +
        `• Name: ${formName || "Not specified"}\n` +
        `• Organization: ${formCompany || "Not specified"}\n` +
        `• Opportunity Type: ${formType}\n` +
        `• Estimated Budget: ${formBudget}\n` +
        (formNotes ? `• Details: ${formNotes}\n\n` : "\n") +
        `Looking forward to speaking with you!`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(
      `Opportunity / Software Project Enquiry - ${formName || "New Contact"}`
    );
    const body = encodeURIComponent(
      `Dear Muhammad Naqib Aiman,\n\n` +
        `My name is ${formName || "[Your Name]"} from ${formCompany || "[Company]"}.\n\n` +
        `Project / Role: ${formType}\n` +
        `Estimated Budget: ${formBudget}\n\n` +
        `Context & Details:\n${formNotes || "Let's connect to discuss this further."}\n\n` +
        `Best regards,\n${formName || ""}`
    );
    window.location.href = `mailto:naqibaiman92@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--fg)] selection:text-[var(--bg)] font-sans antialiased">
      {/* ── Fixed Minimalist Header ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--hairline)] bg-[var(--bg)]/90 backdrop-blur-md py-4 shadow-xs"
            : "border-b border-transparent bg-transparent py-5 sm:py-6"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16"
          aria-label="Main Navigation"
        >
          <a
            href="#home"
            className="group flex items-center gap-2 text-sm font-semibold tracking-[-0.03em] text-[var(--fg)]"
          >
            <span>Muhammad Naqib Aiman</span>
            <span className="hidden sm:inline font-mono text-xs text-[var(--muted)] opacity-75">
              / MIS & SWE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#projects"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              Projects
            </a>
            <a
              href="#capabilities"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              Capabilities
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-1.5 border border-[var(--hairline-strong)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fg)] transition-all hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--fg)] md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-[var(--hairline)] bg-[var(--bg)] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4 text-base font-medium">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--fg)]"
              >
                Selected Work
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--fg)]"
              >
                Capabilities & Skills
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--fg)]"
              >
                Experience & Education
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--fg)]"
              >
                Contact & Enquiry
              </a>
              <div className="pt-4 border-t border-[var(--hairline)] flex flex-col gap-2 text-xs font-mono text-[var(--muted)]">
                <p>+6011-61000221</p>
                <p>naqibaiman92@gmail.com</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Section: Hero (`#home`) ── */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center border-b border-[var(--hairline)] px-6 pt-28 pb-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-x-12 gap-y-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] xl:gap-x-20">
          {/* Main Title & Role */}
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="inline-flex items-center gap-2 border border-[var(--hairline-strong)] bg-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Management Information Systems & Software Engineer
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--fg)] sm:text-7xl lg:text-7xl xl:text-8xl">
              From enterprise logic to resilient software systems.
            </h1>
          </div>

          {/* Hero Portrait with Editorial Hairline Border Frame */}
          <figure className="w-full max-w-[28rem] border border-[var(--hairline-strong)] bg-white/20 p-2 sm:p-3 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
              <Image
                src="/naqib-profile.jpg"
                alt="Portrait of Muhammad Naqib Aiman Bin Yusri"
                fill
                priority
                unoptimized
                className="object-cover object-[50%_18%] transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 34vw, (min-width: 640px) 60vw, 100vw"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-[var(--hairline-strong)] px-1 pt-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              <span>Muhammad Naqib Aiman</span>
              <span className="font-mono text-[var(--fg)]">UiTM CS (Hons) • MIS</span>
            </figcaption>
          </figure>

          {/* Hero Bio & Quick Actions */}
          <div className="lg:col-start-1 lg:row-start-2">
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Bachelor of Computer Science (Honours) graduate from{" "}
              <strong className="font-semibold text-[var(--fg)]">UiTM</strong> majoring in Soft Computing.
              Management Information Systems at{" "}
              <strong className="font-semibold text-[var(--fg)]">Sapura Industrial Berhad</strong> (Dec 2025 – Present),
              with proven enterprise software engineering experience from{" "}
              <strong className="font-semibold text-[var(--fg)]">JurisTech</strong> (Jun 2025 – Nov 2025) shipping
              platforms for 100,000+ monthly banking users.
            </p>

            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              Based in Malaysia. Driven to build scalable microservices, normalized database architectures, and
              modern web applications.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold">
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 border-b border-[var(--fg)] pb-1 transition-opacity hover:opacity-60"
              >
                <span>Explore selected work</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#experience"
                className="border-b border-[var(--fg)] pb-1 transition-opacity hover:opacity-60"
              >
                View experience & education
              </a>

              <a
                href="#contact"
                className="border-b border-[var(--fg)] pb-1 transition-opacity hover:opacity-60"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Selected Projects Showcase (`#projects`) ── */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="projects-section border-b border-[var(--hairline)] py-20 lg:min-h-screen lg:py-24"
      >
        <div className="px-6 pb-10 sm:px-10 lg:px-[10vw] lg:pb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)] font-mono">
            01 / Selected Work
          </p>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <h2
              id="projects-heading"
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl text-[var(--fg)]"
            >
              Enterprise software, shipped into production.
            </h2>

            {/* Slider Controls */}
            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden sm:inline mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] font-mono">
                Swipe to explore
              </span>
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Previous project"
                disabled={!canScrollLeft}
                className={`grid h-11 w-11 place-items-center border border-[var(--hairline-strong)] text-lg transition-all ${
                  canScrollLeft
                    ? "cursor-pointer hover:bg-[var(--fg)] hover:text-[var(--bg)] active:scale-95"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Next project"
                disabled={!canScrollRight}
                className={`grid h-11 w-11 place-items-center border border-[var(--hairline-strong)] text-lg transition-all ${
                  canScrollRight
                    ? "cursor-pointer hover:bg-[var(--fg)] hover:text-[var(--bg)] active:scale-95"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Snap Viewport */}
        <div
          ref={carouselRef}
          id="projects-carousel"
          className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth overscroll-x-contain pb-6 lg:pb-12"
        >
          <div className="flex w-max gap-6 pl-6 pr-[16vw] sm:gap-8 sm:pl-10 lg:gap-12 lg:pl-[10vw]">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className="group flex min-h-[32rem] w-[86vw] max-w-4xl shrink-0 snap-start flex-col justify-between border border-[var(--hairline-strong)] bg-white/40 p-6 backdrop-blur-xs transition-all duration-300 hover:border-[var(--fg)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.12)] sm:w-[72vw] sm:p-10 lg:min-h-[35rem] lg:w-[65vw] lg:p-12"
              >
                {/* Header Information */}
                <div>
                  <div className="mb-10 flex items-start justify-between gap-6 border-b border-[var(--hairline)] pb-5">
                    <div className="flex items-center gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] font-mono">
                        {project.num} / 06
                      </p>
                      {project.badge && (
                        <span className="border border-[var(--hairline-strong)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] bg-white/70">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-right text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)] font-mono">
                      <p className="font-semibold text-[var(--fg)]">{project.category}</p>
                      <p>{project.year}</p>
                    </div>
                  </div>

                  <h3 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl text-[var(--fg)]">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-7">
                    {project.description}
                  </p>
                </div>

                {/* Outcome & Tech Stack */}
                <div className="mt-12 grid gap-6 border-t border-[var(--hairline)] pt-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.8fr)]">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] font-mono">
                      Key Deliverable / Outcome
                    </p>
                    <p className="max-w-xl text-base font-medium leading-snug sm:text-lg text-[var(--fg)]">
                      {project.outcome}
                    </p>
                  </div>

                  <ul
                    aria-label={`${project.title} technologies`}
                    className="flex flex-wrap content-start items-center gap-2"
                  >
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="border border-[var(--hairline-strong)] bg-white/50 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--fg)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Capabilities & Metrics (`#capabilities`) ── */}
      <section
        id="capabilities"
        className="border-b border-[var(--hairline)] bg-[var(--bg)] px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            02 / Capabilities
          </p>

          <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.6fr)] md:items-end sm:mb-20">
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[var(--fg)]">
              Engineering expertise, end to end.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              From relational database normalization and microservice architectures to responsive web applications
              and soft computing models.
            </p>
          </div>

          {/* Capabilities 4-Row Breakdown */}
          <div className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
            <article className="grid gap-4 py-8 md:grid-cols-[5rem_1.4fr_1.6fr] items-baseline">
              <span className="font-mono text-xs tabular-nums text-[var(--muted2)]">01</span>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl text-[var(--fg)]">
                Fintech & Enterprise Microservices
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
                Proven experience at JurisTech building scalable components for enterprise loan origination and
                automated debt management supporting over 100,000 monthly active users.
              </p>
            </article>

            <article className="grid gap-4 py-8 md:grid-cols-[5rem_1.4fr_1.6fr] items-baseline">
              <span className="font-mono text-xs tabular-nums text-[var(--muted2)]">02</span>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl text-[var(--fg)]">
                Management Information Systems (MIS)
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
                Overseeing operational IT systems at Sapura Industrial Berhad, integrating production telemetry,
                database integrity, and automated operational reporting.
              </p>
            </article>

            <article className="grid gap-4 py-8 md:grid-cols-[5rem_1.4fr_1.6fr] items-baseline">
              <span className="font-mono text-xs tabular-nums text-[var(--muted2)]">03</span>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl text-[var(--fg)]">
                Database Engineering & Normalization
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
                Oracle, SQL Server, MySQL, and PostgreSQL expertise. Schema normalization, query optimization,
                transactional consistency, and automated ETL pipelines.
              </p>
            </article>

            <article className="grid gap-4 py-8 md:grid-cols-[5rem_1.4fr_1.6fr] items-baseline">
              <span className="font-mono text-xs tabular-nums text-[var(--muted2)]">04</span>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl text-[var(--fg)]">
                Full-Stack & Soft Computing
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
                Proficiency spanning C# / .NET / Blazor, PHP / Laravel, Next.js, and Python. Applied machine
                learning, neural network fundamentals, and Azure AI implementation.
              </p>
            </article>
          </div>

          {/* Stats Bar */}
          <div className="mt-14">
            <dl className="grid grid-cols-2 border-y border-[var(--hairline)] lg:grid-cols-4">
              <div className="py-7 lg:px-6 border-b border-[var(--hairline)] lg:border-b-0 lg:border-r">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] font-mono">
                  Scale & Traffic Supported
                </dt>
                <dd className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                  100K+ Users
                </dd>
              </div>

              <div className="py-7 lg:px-6 border-b border-[var(--hairline)] lg:border-b-0 lg:border-r">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] font-mono">
                  Innovation Recognition
                </dt>
                <dd className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                  Gold Medal 2023
                </dd>
              </div>

              <div className="py-7 lg:px-6 border-r border-[var(--hairline)]">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] font-mono">
                  Academic Degree
                </dt>
                <dd className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                  UiTM CS (Hons)
                </dd>
              </div>

              <div className="py-7 lg:px-6">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] font-mono">
                  Enterprise Roles
                </dt>
                <dd className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                  JurisTech & Sapura
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── Section: Experience & Education (`#experience`) ── */}
      <section
        id="experience"
        className="border-b border-[var(--hairline)] bg-[var(--bg)] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:mb-16">
            <span className="font-mono">03</span>
            <span className="h-px w-8 bg-[var(--muted2)]"></span>
            <span>Experience and education</span>
          </div>

          <h2 className="mb-16 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:mb-20 sm:text-6xl md:text-7xl lg:text-8xl text-[var(--fg)]">
            Systems shipped.
            <br />
            <span className="text-[var(--muted)]">Practice in progress.</span>
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Work Experience Column */}
            <div className="lg:col-span-8">
              <h3 className="mb-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-mono font-semibold">
                Work Experience
              </h3>

              <ol className="border-t border-[var(--hairline)]">
                {/* 01: Sapura Industrial */}
                <li className="border-b border-[var(--hairline)] py-8 sm:py-10">
                  <div className="grid grid-cols-12 gap-4">
                    <span className="col-span-1 pt-1 font-mono text-[11px] text-[var(--muted2)] font-semibold">
                      01
                    </span>
                    <div className="col-span-11 sm:col-span-7">
                      <h4 className="text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                        Management Information System (MIS)
                      </h4>
                      <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                        Sapura Industrial Berhad, Full-time
                      </p>
                    </div>
                    <p className="col-span-11 col-start-2 font-mono text-xs tabular-nums text-[var(--muted)] sm:col-span-4 sm:col-start-auto sm:text-right">
                      December 2025 – Present
                    </p>
                  </div>
                  <ul className="ml-[calc(8.333%+1rem)] mt-5 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-[var(--muted)]">
                    <li>
                      <strong className="font-semibold text-[var(--fg)]">Network Infrastructure & Diagnostics:</strong> Monitor and maintain network performance, ensuring stable connectivity across office and production environments. Configure and manage network infrastructure including routers, switches, and Wi-Fi systems (e.g., TP-Link Omada). Troubleshoot latency, connectivity drops, and IP configuration issues using tools like ping and traceroute.
                    </li>
                    <li>
                      <strong className="font-semibold text-[var(--fg)]">Enterprise Systems & MES Server Administration:</strong> Support ERP system operations (e.g., Kingdee), covering inventory-related tasks and system usage assistance. Assist in server and system administration, including MES server connectivity and deployment support. Setup remote access and remote desktop services on Linux/AlmaLinux systems via RDP.
                    </li>
                    <li>
                      <strong className="font-semibold text-[var(--fg)]">Data Operations & System Integration:</strong> Assist in data preparation and system data import processes following standardized database templates. Participate in plant-wide infrastructure setup including CCTV installation, IP configuration, and security monitoring.
                    </li>
                    <li>
                      <strong className="font-semibold text-[var(--fg)]">IT Support & Vendor Procurement:</strong> Coordinate with external vendors for IT equipment procurement and verification (e.g., firewall, NAS, SFP modules). Handle IT support tasks including laptop troubleshooting, hardware diagnostics (battery/charging), peripheral setup, and maintain comprehensive technical documentation.
                    </li>
                  </ul>

                  {/* Sapura Key Skills Badges */}
                  <div className="ml-[calc(8.333%+1rem)] mt-5 flex flex-wrap gap-1.5 pl-4">
                    {[
                      "Networking: TCP/IP, DHCP, Static IP, VLAN, Wi-Fi Bridge",
                      "TP-Link Omada",
                      "Remote Desktop (RDP)",
                      "Linux (AlmaLinux)",
                      "ERP (Kingdee)",
                      "MES Environment",
                      "Firewall & NAS",
                      "Hardware Diagnostics",
                      "Vendor Coordination",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--hairline)] bg-white/60 px-2 py-0.5 font-mono text-[11px] text-[var(--fg)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </li>

                {/* 02: JurisTech */}
                <li className="border-b border-[var(--hairline)] py-8 sm:py-10">
                  <div className="grid grid-cols-12 gap-4">
                    <span className="col-span-1 pt-1 font-mono text-[11px] text-[var(--muted2)] font-semibold">
                      02
                    </span>
                    <div className="col-span-11 sm:col-span-7">
                      <h4 className="text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                        Software Engineer
                      </h4>
                      <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                        JurisTech (Juris Technologies)
                      </p>
                    </div>
                    <p className="col-span-11 col-start-2 font-mono text-xs tabular-nums text-[var(--muted)] sm:col-span-4 sm:col-start-auto sm:text-right">
                      Jun 2025 – Nov 2025
                    </p>
                  </div>
                  <ul className="ml-[calc(8.333%+1rem)] mt-5 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[var(--muted)]">
                    <li>
                      Structured and optimized enterprise databases through normalization practices, driving smoother
                      workflows and improved query efficiency.
                    </li>
                    <li>
                      Partnered with diverse cross-functional teams to deliver web solutions enabling new loan
                      offerings and supporting a customer base exceeding 100,000 monthly users.
                    </li>
                    <li>
                      Engineered microservice components that strengthened system reliability, scalability, and overall
                      operational performance.
                    </li>
                    <li>
                      Coordinated Agile workflows, facilitating sprint planning, progress tracking, and successful
                      enterprise project releases.
                    </li>
                  </ul>
                </li>

                {/* 03: IT Chenta Enterprise */}
                <li className="border-b border-[var(--hairline)] py-8 sm:py-10">
                  <div className="grid grid-cols-12 gap-4">
                    <span className="col-span-1 pt-1 font-mono text-[11px] text-[var(--muted2)] font-semibold">
                      03
                    </span>
                    <div className="col-span-11 sm:col-span-7">
                      <h4 className="text-2xl font-bold tracking-tight sm:text-3xl text-[var(--fg)]">
                        Software Developer
                      </h4>
                      <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                        IT Chenta Enterprise
                      </p>
                    </div>
                    <p className="col-span-11 col-start-2 font-mono text-xs tabular-nums text-[var(--muted)] sm:col-span-4 sm:col-start-auto sm:text-right">
                      March 2024 – October 2024
                    </p>
                  </div>
                  <ul className="ml-[calc(8.333%+1rem)] mt-5 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[var(--muted)]">
                    <li>
                      Developed web applications using C#, .NET, and Blazor, integrating components from MudBlazor,
                      Radzen, and Telerik to enhance functionality and UX.
                    </li>
                    <li>
                      Collaborated via Git for smooth workflow with senior developers, tailoring features to client
                      preferences and requirements.
                    </li>
                    <li>
                      Applied Agile/Scrum practices including daily huddles, sprint planning, and retrospectives to
                      ensure effective project delivery.
                    </li>
                    <li>
                      Led the restructuring of an existing project to improve code maintainability and troubleshooting
                      efficiency.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Education, Awards & Skills Column */}
            <div className="lg:col-span-4">
              <h3 className="mb-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-mono font-semibold">
                Education
              </h3>

              <ul className="border-t border-[var(--hairline)]">
                <li className="border-b border-[var(--hairline)] py-8">
                  <h4 className="text-base font-semibold leading-snug text-[var(--fg)]">
                    Bachelor of Computer Science (Hons.)
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    Major in Computer Science, Soft Computing
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Universiti Teknologi MARA (UiTM) Jasin, Melaka
                  </p>
                  <p className="mt-3 font-mono text-xs tabular-nums text-[var(--muted)]">
                    2021 – 2024
                  </p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    FYP Supervisor: Mohd Taufik Mishan
                  </p>
                </li>

                <li className="border-b border-[var(--hairline)] py-8">
                  <h4 className="text-base font-semibold leading-snug text-[var(--fg)]">
                    Sijil Tinggi Persekolahan Malaysia (STPM)
                  </h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Business Study
                  </p>
                  <p className="mt-3 font-mono text-xs tabular-nums text-[var(--muted)]">
                    2018 – 2019
                  </p>
                </li>
              </ul>

              {/* Achievements & Enrollment */}
              <h3 className="mb-6 mt-12 text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-mono font-semibold">
                Awards & Certifications
              </h3>

              <div className="space-y-4">
                {awardsData.map((award, i) => (
                  <div
                    key={i}
                    className="border border-[var(--hairline)] bg-white/30 p-4 transition-all hover:border-[var(--fg)]"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[var(--fg)]" />
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
                        {award.title}
                      </p>
                    </div>
                    <p className="mt-1 text-xs font-medium text-[var(--fg)]">{award.event}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{award.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technical Arsenal Box */}
              <div className="mt-12 border border-[var(--hairline-strong)] bg-white/40 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] font-mono mb-4">
                  Languages & Technologies
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "ERP (Kingdee)",
                    "MES Systems",
                    "TP-Link Omada",
                    "Linux (AlmaLinux)",
                    "TCP/IP & VLAN",
                    "Remote Desktop (RDP)",
                    "C#",
                    ".NET",
                    "Blazor",
                    "PHP",
                    "Laravel",
                    "Java",
                    "Python",
                    "C++",
                    "SQL / Oracle",
                    "MySQL",
                    "SQL Server",
                    "JavaScript",
                    "TypeScript",
                    "Next.js",
                    "Flutter",
                    "Android Studio",
                    "Firebase",
                    "Azure AI",
                    "Git & GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="border border-[var(--hairline)] bg-white/70 px-2 py-0.5 text-[var(--fg)] font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Complete Project Archive (`#project-archive`) ── */}
      <section
        id="project-archive"
        className="border-b border-[var(--hairline)] bg-[var(--bg)] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 border-y border-[var(--hairline)] py-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                04 / Archive
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-[var(--fg)]">
                Complete project archive
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setArchiveOpen(!archiveOpen)}
              className="w-fit border-b border-[var(--fg)] pb-1 text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-60 flex items-center gap-2"
            >
              <span>{archiveOpen ? "Collapse archive" : "View complete project archive"}</span>
              <span className="font-mono">{archiveOpen ? "↑" : "↓"}</span>
            </button>
          </div>

          {archiveOpen && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--hairline)] text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted)]">
                    <th className="py-4 pr-6">Year</th>
                    <th className="py-4 pr-6">Project Title</th>
                    <th className="py-4 pr-6">Organization</th>
                    <th className="py-4 pr-6">Role</th>
                    <th className="py-4">Technologies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--hairline)]">
                  {archiveProjects.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/30 transition-colors">
                      <td className="py-4 pr-6 font-mono text-xs text-[var(--muted)]">{row.year}</td>
                      <td className="py-4 pr-6 font-semibold text-[var(--fg)]">{row.title}</td>
                      <td className="py-4 pr-6 text-[var(--muted)]">{row.company}</td>
                      <td className="py-4 pr-6 font-mono text-xs text-[var(--muted)]">{row.role}</td>
                      <td className="py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {row.tech.map((t) => (
                            <span
                              key={t}
                              className="border border-[var(--hairline)] px-2 py-0.5 text-[11px] font-mono text-[var(--fg)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ── Section: Contact & Direct Enquiry (`#contact`) ── */}
      <section
        id="contact"
        className="relative z-20 border-b border-[var(--hairline)] bg-[var(--bg)] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:mb-16">
            <span className="font-mono">05</span>
            <span className="h-px w-8 bg-[var(--muted2)]"></span>
            <span>Contact</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Direct Links & Bio */}
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl text-[var(--fg)]">
                Build or hire.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)]">
                Looking for a Software Engineer with fintech and enterprise MIS background, or discussing an
                innovative project? Reach out directly via WhatsApp or email.
              </p>

              <div className="mt-10 grid gap-px bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="bg-[var(--bg)] p-6 border border-[var(--hairline-strong)]">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Recruiters & Engineering Teams
                  </p>
                  <a
                    href="mailto:naqibaiman92@gmail.com?subject=Software%20Engineer%20/%20MIS%20Opportunity"
                    className="inline-flex items-center gap-1.5 border-b border-[var(--fg)] pb-1 text-sm font-semibold transition-opacity hover:opacity-60"
                  >
                    <span>Discuss an Opportunity</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                    <span>naqibaiman92@gmail.com</span>
                    <a
                      href="https://www.linkedin.com/in/naqibaimandev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--fg)] font-semibold underline hover:opacity-70 transition-opacity flex items-center gap-1"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="bg-[var(--bg)] p-6 border border-[var(--hairline-strong)]">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Direct WhatsApp
                  </p>
                  <a
                    href="https://wa.me/601161000221?text=Hi%20Muhammad%20Naqib%20Aiman,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20/%20role."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-[var(--fg)] pb-1 text-sm font-semibold transition-opacity hover:opacity-60"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="mt-3 text-xs font-mono text-[var(--muted)]">+6011-61000221</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Form: Immediate WhatsApp Enquiry Generator */}
            <form
              onSubmit={handleWhatsAppSubmit}
              id="project-enquiry"
              className="flex flex-col gap-4 lg:col-span-7 lg:border-l lg:border-[var(--hairline)] lg:pl-12"
            >
              <div className="mb-2">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">
                  Project or Opportunity Enquiry
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Fill in the details below to generate a pre-filled WhatsApp message or send directly via email.
                </p>
              </div>

              <div>
                <label htmlFor="project-name" className="sr-only">
                  Your name *
                </label>
                <input
                  id="project-name"
                  type="text"
                  autoComplete="name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Your name *"
                  required
                  className="w-full bg-transparent border-b border-[var(--hairline-strong)] py-4 text-base outline-none focus:border-[var(--fg)] transition-colors placeholder:text-[var(--muted2)]"
                />
              </div>

              <div>
                <label htmlFor="project-company" className="sr-only">
                  Company / Organization *
                </label>
                <input
                  id="project-company"
                  type="text"
                  autoComplete="organization"
                  value={formCompany}
                  onChange={(e) => setFormCompany(e.target.value)}
                  placeholder="Company / Organization *"
                  required
                  className="w-full bg-transparent border-b border-[var(--hairline-strong)] py-4 text-base outline-none focus:border-[var(--fg)] transition-colors placeholder:text-[var(--muted2)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project-type" className="sr-only">
                    Opportunity / Project Type *
                  </label>
                  <select
                    id="project-type"
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    required
                    className="w-full bg-[var(--bg)] border-b border-[var(--hairline-strong)] py-4 text-base outline-none focus:border-[var(--fg)] transition-colors text-[var(--fg)]"
                  >
                    <option value="Full-Time Software Engineer Role">Full-Time Software Engineer Role</option>
                    <option value="Management Information System (MIS) Position">
                      Management Information System (MIS) Position
                    </option>
                    <option value="Enterprise Web Application">Enterprise Web Application</option>
                    <option value="Fintech & Microservices Architecture">Fintech & Microservices Architecture</option>
                    <option value="Database Engineering & Normalization">Database Engineering & Normalization</option>
                    <option value="Technical Consulting & Project">Technical Consulting & Project</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project-budget" className="sr-only">
                    Estimated Budget / Compensation *
                  </label>
                  <select
                    id="project-budget"
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    required
                    className="w-full bg-[var(--bg)] border-b border-[var(--hairline-strong)] py-4 text-base outline-none focus:border-[var(--fg)] transition-colors text-[var(--fg)]"
                  >
                    <option value="RM 3,000 - RM 6,000">RM 3,000 - RM 6,000</option>
                    <option value="RM 6,000 - RM 12,000">RM 6,000 - RM 12,000</option>
                    <option value="RM 12,000 - RM 25,000">RM 12,000 - RM 25,000</option>
                    <option value="> RM 25,000">&gt; RM 25,000</option>
                    <option value="Permanent Salary Offer">Permanent Salary Offer</option>
                    <option value="Custom - Let's discuss">Custom - Let&apos;s discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="project-references" className="sr-only">
                  Details or Context
                </label>
                <textarea
                  id="project-references"
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="Share details regarding your tech stack, timeline, or position requirements (optional)"
                  rows={3}
                  className="w-full bg-transparent border-b border-[var(--hairline-strong)] py-4 text-base outline-none focus:border-[var(--fg)] transition-colors placeholder:text-[var(--muted2)] resize-none"
                ></textarea>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="group w-full sm:w-auto flex-1 flex items-center justify-between border border-[var(--fg)] bg-[var(--fg)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--fg)]"
                >
                  <span>Send via WhatsApp (+6011-61000221)</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full sm:w-auto px-6 py-4 border border-[var(--hairline-strong)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fg)] transition-colors hover:bg-white/40"
                >
                  Send via Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--hairline)] bg-[var(--bg)] px-6 pt-16 pb-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--fg)]">
                Muhammad Naqib Aiman Bin Yusri
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                Bachelor of Computer Science (Hons.) from UiTM. Management Information Systems at Sapura Industrial
                Berhad (Dec 2025 – Present) and former Software Engineer at JurisTech (Jun 2025 – Nov 2025).
              </p>
            </div>

            <nav aria-label="Footer" className="md:col-span-3">
              <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-mono font-semibold">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#projects" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                    Experience & Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="md:col-span-4">
              <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-mono font-semibold">
                Elsewhere
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/naqibaimandev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--fg)] transition-colors font-medium"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/NaqibDev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--fg)] transition-colors font-medium"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:naqibaiman92@gmail.com"
                    className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--fg)] transition-colors font-medium"
                  >
                    <span>Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/601161000221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--fg)] transition-colors font-medium"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-[var(--hairline)] pt-8 font-mono text-xs tabular-nums text-[var(--muted)] sm:flex-row items-center">
            <p>© {new Date().getFullYear()} MUHAMMAD NAQIB AIMAN BIN YUSRI — All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/naqibaimandev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--fg)] transition-colors underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/NaqibDev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--fg)] transition-colors underline"
              >
                GitHub
              </a>
              <span>•</span>
              <span>UiTM • JurisTech • Sapura Industrial Berhad</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
