"use client";

import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";
import chessImage from "../../assets/Chess Game.png";
import designReady1 from "../../assets/dsready1.png";
import designReady2 from "../../assets/dsready2.png";
import designReady3 from "../../assets/dsready3.png";
import eduProUi1 from "../../assets/EduProUI1.png";
import eduProUi2 from "../../assets/EduProUI2.png";
import eduProUi3 from "../../assets/EduProUI3.png";
import eduProUi4 from "../../assets/EduProUI4.png";
import flaskAnalytics1 from "../../assets/FlaskAnalytics1.png";
import flaskAnalytics2 from "../../assets/FlaskAnalytics2.png";
import flaskAnalytics3 from "../../assets/FlaskAnalytics3.png";
import flaskAnalytics4 from "../../assets/FlaskAnalytics4.png";
import jokikan1 from "../../assets/Jokikan1.png";
import jokikan2 from "../../assets/JokiKan2.png";
import jokikan3 from "../../assets/JokiKan3.png";
import mediaPembelajaran1 from "../../assets/MediaPembelajaran1.png";
import mediaPembelajaran2 from "../../assets/MediaPembelajaran2.png";
import mediaPembelajaran3 from "../../assets/MediaPembelajaran3.png";
import pfp from "../../assets/pfp.jpeg";
import pulseBoard from "../../assets/PulseBoard.png";
import gigRate1 from "../../assets/gigrate1.png";
import gigRate2 from "../../assets/gigrate2.png";
import gigRate3 from "../../assets/gigrate3.png";
import gigRate4 from "../../assets/gigrate4.png";
import gigRate5 from "../../assets/gigrate5.png";
import skillFlow1 from "../../assets/SkillFlow1.png";
import skillFlow2 from "../../assets/SkillFlow2.png";
import skillFlow3 from "../../assets/SkillFlow3.png";
import skillFlow4 from "../../assets/SkillFlow4.png";
import skillFlow5 from "../../assets/SkillFlow5.png";
import spendWise1 from "../../assets/spendws1.png";
import spendWise2 from "../../assets/spendws2.png";
import spendWise3 from "../../assets/spendws3.png";
import spendWise4 from "../../assets/spendws4.png";
import taskflow1 from "../../assets/Taskflow1.png";
import taskflow2 from "../../assets/TaskFlow2.png";
import weatherDash1 from "../../assets/WeatherDash1.png";
import weatherDash2 from "../../assets/WeatherDash2.png";
import weatherDash3 from "../../assets/WeatherDash3.png";
import seblakWsp1 from "../../assets/SeblakWSP1.png";
import seblakWsp2 from "../../assets/SeblakWSP2.png";
import seblakWsp3 from "../../assets/SeblakWSP3.png";
import seblakWsp4 from "../../assets/SeblakWSP4.png";
import seblakWsp5 from "../../assets/SeblakWSP5.png";
import seblakWsp6 from "../../assets/SeblaksWSP6.png";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

const techStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Flutter",
  "Dart",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
];

const backendStack = ["Laravel", "MySQL", "Python"];

const toolsStack = ["Gemini AI", "Git", "Basecamp"];

const projects = [
  {
    title: "Chess Game",
    summary:
      "Interactive browser-based chess game featuring legal move validation, checkmate detection, and responsive board interactions.",
    stack: ["JavaScript", "React", "Game Logic"],
    images: [chessImage],
    demoUrl: "https://ahmad-farhan14.github.io/chess-game/",
    githubUrl: "https://github.com/ahmad-farhan14/chess-game",
  },
  {
    title: "Taskflow",
    summary:
      "Productivity-focused task management tool featuring clean workspace interactions and custom task categories.",
    stack: ["UI/UX", "Web App", "Productivity"],
    images: [taskflow1, taskflow2],
    demoUrl: "https://ahmad-farhan14.github.io/landing-page/",
    githubUrl: "https://github.com/ahmad-farhan14/landing-page",
  },
  {
    title: "Seblak WSP",
    summary:
      "Smart POS & self-service ordering platform for culinary business featuring custom menu options, real-time order tracking, and Midtrans payment gateway.",
    stack: ["Laravel", "Tailwind CSS", "Midtrans API", "MySQL"],
    images: [seblakWsp1, seblakWsp2, seblakWsp3, seblakWsp4, seblakWsp5, seblakWsp6],
    demoUrl: "#",
    githubUrl: "https://github.com/ahmad-farhan14/seblak-app",
  },
  {
    title: "JokiKan",
    summary:
      "Gaming service platform UI concept featuring modular landing sections, service showcases, and modern gaming-themed UI.",
    stack: ["UI/UX", "Landing Page", "Branding"],
    images: [jokikan1, jokikan2, jokikan3],
    demoUrl:
      "https://www.figma.com/proto/DDwOffSx5u3MxbxTVW8chd/JokiKan?node-id=1-199&starting-point-node-id=1%3A199&t=3og9QUtxCPExmGaG-1",
    githubUrl: "#",
  },
  {
    title: "EduPro UI",
    summary: "Educational platform UI exploration designed in Figma with responsive layouts and structured design systems.",
    stack: ["Figma", "UI/UX", "Design System"],
    images: [eduProUi1, eduProUi2, eduProUi3, eduProUi4],
    demoUrl:
      "https://www.figma.com/make/nRBn4J5feZKxlaf1bXFG5k/Online-Learning-Platform-UI?t=RWP9IWxvRMougJHy-1",
    githubUrl: "#",
  },
  {
    title: "Flask Analytics",
    summary: "Data analytics dashboard built with Flask featuring interactive charts, statistics panels, and responsive data visualization.",
    stack: ["Flask", "Python", "Charts"],
    images: [flaskAnalytics1, flaskAnalytics2, flaskAnalytics3, flaskAnalytics4],
    demoUrl: "#",
    githubUrl: "https://github.com/ahmad-farhan14/flask-analyitcs",
  },
  {
    title: "Media Pembelajaran Seni Budaya Kelas X",
    summary: "Interactive educational platform designed to support engaging digital learning experiences for high school students.",
    stack: ["Next.js", "UI/UX", "Content"],
    images: [mediaPembelajaran1, mediaPembelajaran2, mediaPembelajaran3],
    demoUrl: "#",
    githubUrl: "https://github.com/ahmad-farhan14/media_pembelajaran_11",
  },
  {
    title: "PulseBoard",
    summary: "Modern dashboard interface featuring responsive layouts and interactive data visualization components.",
    stack: ["Tailwind", "React", "Data UI"],
    images: [pulseBoard],
    demoUrl: "https://ahmad-farhan14.github.io/datapulse/",
    githubUrl: "https://github.com/ahmad-farhan14/datapulse",
  },
  {
    title: "WeatherDash",
    summary: "Responsive weather dashboard interface with modern forecast cards and clean data presentation.",
    stack: ["UI/UX", "Dashboard", "Weather"],
    images: [weatherDash1, weatherDash2, weatherDash3],
    demoUrl: "https://ahmad-farhan14.github.io/Weather-Dash/",
    githubUrl: "https://github.com/ahmad-farhan14/Weather-Dash",
  },
  {
    title: "SkillFlow",
    summary:
      "Interactive daily micro-learning & skill roadmap tracking web app featuring split-view media readers and Proof of Learning modules.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    images: [skillFlow1, skillFlow2, skillFlow3, skillFlow4, skillFlow5],
    demoUrl: "https://skillflow-vert.vercel.app",
    githubUrl: null,
    privateRepository: true,
  },
  {
    title: "SpendWise",
    summary:
      "Global cash flow & personal finance tracker supporting real-time multi-currency exchange conversion and safe-to-spend balance calculations.",
    stack: ["Next.js", "TypeScript", "Supabase", "ExchangeRate API"],
    images: [spendWise1, spendWise2, spendWise3, spendWise4],
    demoUrl: "https://spend-wise-web-nine.vercel.app",
    githubUrl: null,
    privateRepository: true,
  },
  {
    title: "DesignReady",
    summary:
      "Interactive design handoff & quality-control tool featuring automated checklist generation, multi-tenant team workspaces, and image previewers.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    images: [designReady1, designReady2, designReady3],
    demoUrl: "https://designready-app-eta.vercel.app",
    githubUrl: null,
    privateRepository: true,
  },
  {
    title: "GigRate",
    summary:
      "Freelance rate & pricing strategy calculator supporting custom platform fee presets, tax buffers, and gross rate calculations across global currencies.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    images: [gigRate1, gigRate2, gigRate3, gigRate4, gigRate5],
    demoUrl: "https://gigrate-freelance-ca-7qqn.bolt.host/",
    githubUrl: null,
    privateRepository: true,
  },
];

const timeline = [
  {
    id: 1,
    title: "SF Group — Founder's Associate Intern / Web Developer",
    period: "Jul 2026 – Present",
    detail: "Founder's Associate Intern / Web Developer at SF Group.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    period: "2024 – Present",
    detail: "Freelance web development.",
  },
  {
    id: 3,
    title: "Huawei ICT Competition — Participant",
    period: "Oct 2026 – Present",
    detail: "Participant in the Huawei ICT Competition.",
  },
];

const particles = [
  { top: "12%", left: "8%", size: 8, delay: 0 },
  { top: "18%", left: "72%", size: 6, delay: 0.6 },
  { top: "40%", left: "88%", size: 5, delay: 0.2 },
  { top: "64%", left: "12%", size: 7, delay: 0.4 },
  { top: "72%", left: "78%", size: 6, delay: 0.8 },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [bootDone, setBootDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const syncMouseTracking = () => {
      if (media.matches) {
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };

    syncMouseTracking();
    media.addEventListener("change", syncMouseTracking);

    return () => {
      media.removeEventListener("change", syncMouseTracking);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const doneTimeout = setTimeout(() => setBootDone(true), 800);
    const timeout = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(doneTimeout);
      clearTimeout(timeout);
    };
  }, []);

  const playBeep = () => {
    if (typeof window === "undefined") {
      return;
    }

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 620;
    gain.gain.value = 0.05;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.08);

    oscillator.onended = () => {
      audioContext.close();
    };
  };

  const toggleSfx = () => {
    setSfxEnabled((prev) => {
      const next = !prev;
      if (next) {
        playBeep();
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="scanlines" />

      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
            <div className="text-center">
              <div className="mt-6 h-2 w-56 overflow-hidden rounded-full border border-emerald-500/40">
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              </div>

              <div className="relative mt-3 h-4 w-56">
                <span
                  className={`absolute inset-0 flex items-center justify-center font-press text-[10px] uppercase tracking-[0.45em] text-emerald-300/90 whitespace-nowrap transition-opacity duration-200 ${
                    bootDone ? "opacity-0" : "opacity-100"
                  }`}
                >
                  INITIALIZING...
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center font-press text-[10px] uppercase tracking-[0.45em] text-emerald-300/90 whitespace-nowrap transition-opacity duration-200 ${
                    bootDone ? "opacity-100" : "opacity-0"
                  }`}
                >
                  DONE!!
                </span>
              </div>
            </div>
        </motion.div>
      )}

      <motion.div
        className="fine-pointer-only pointer-events-none fixed z-40 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded border border-emerald-300/60 bg-emerald-300/10 shadow-[0_0_16px_rgba(0,255,153,0.6)]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />

      <motion.div
        className="fixed left-0 top-0 z-40 h-1 w-full origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500"
        style={{ scaleX: progressX }}
      />

      {particles.map((particle, index) => (
        <motion.span
          key={particle.left + index}
          className="absolute rounded-full bg-emerald-300/40"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-emerald-500/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-press text-[10px] text-emerald-300">AFZ</span>
            <div>
              <p className="text-sm font-semibold">Ahmad Farhan Zilwansyah</p>
              <p className="text-xs text-emerald-300/70">
                Frontend Developer | Web Developer
              </p>
            </div>
          </div>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "location" : undefined}
                className={`text-xs uppercase tracking-[0.2em] transition ${
                  activeSection === section.id
                    ? "text-emerald-300"
                    : "text-zinc-400 hover:text-emerald-300"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSfx}
              className="rounded-full border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-emerald-300 hover:border-emerald-300"
              aria-pressed={sfxEnabled}
            >
              SFX {sfxEnabled ? "ON" : "OFF"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-emerald-300 hover:border-emerald-300 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="grid gap-1 border-t border-emerald-500/10 px-6 py-3 md:hidden"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "location" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded px-3 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  activeSection === section.id
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-zinc-400 hover:bg-white/5 hover:text-emerald-300"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <motion.main
        className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 flicker"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <section id="hero" className="min-h-[85vh] scroll-mt-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="font-press text-xs uppercase tracking-[0.4em] text-cyan-300">
                SYSTEM INITIALIZATION COMPLETE
              </p>
              <h1 className="glitch font-press text-3xl leading-snug text-white md:text-4xl">
                DEVELOPER ARCHIVE
              </h1>
              <p className="font-press text-[10px] uppercase tracking-[0.2em] text-emerald-300 md:text-xs">
                Frontend Developer | Web Developer
              </p>
              <p className="text-sm text-zinc-400 md:text-base">
                Informatics student at ITENAS Bandung & Web Developer experienced in building production-ready web applications using Next.js, React, TypeScript, Supabase, and AI-assisted workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="rounded border border-emerald-400/60 bg-emerald-400/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_12px_rgba(0,255,153,0.35)] transition hover:translate-y-[-2px]"
                >
                  [ Enter System ]
                </a>
                <a
                  href="#projects"
                  className="rounded border border-cyan-400/60 bg-cyan-400/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_12px_rgba(0,217,255,0.35)] transition hover:translate-y-[-2px]"
                >
                  [ View Projects ]
                </a>
                <a
                  href="/CV_Ahmad_Farhan_Zilwansyah.pdf"
                  download
                  className="rounded border border-violet-400/60 bg-violet-400/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.3)] transition hover:translate-y-[-2px]"
                >
                  [ Download CV ]
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="rounded-3xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400/70" />
                  <span className="h-2 w-2 rounded-full bg-violet-400/70" />
                  <span className="ml-auto text-emerald-300/70">CRT Monitor</span>
                </div>
                <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-black/70 p-5">
                  <motion.p
                    className="font-vt text-2xl text-emerald-300 crt-text"
                    animate={{ opacity: [1, 0.85, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    SYSTEM STATUS: ONLINE
                  </motion.p>
                  <div className="mt-4 space-y-3 text-sm text-emerald-200">
                    <p>INTERFACE MODE: ACTIVE</p>
                    <p>RENDER ENGINE: NEXT.JS</p>
                    <p>THEME ENGINE: SYNTHWAVE UI</p>
                  </div>
                </div>

                <div className="mt-5 flex justify-center">
                  <motion.div
                    className="relative h-24 w-24 overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/60 shadow-[0_0_18px_rgba(0,255,153,0.16)]"
                    animate={{ rotate: [0, 0.4, 0, -0.4, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={pfp}
                      alt="Profile photo"
                      className="h-full w-full object-cover contrast-125 saturate-125"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)]" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-black/40" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader subtitle="About Me" title="Developer Profile" />
          <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              <span className="h-2 w-2 rounded-full bg-cyan-400/70" />
              <span className="h-2 w-2 rounded-full bg-violet-400/70" />
              <span className="ml-auto text-emerald-300/70">about.exe</span>
            </div>
            <p className="mt-6 text-sm text-zinc-300 md:text-base">
              Informatics student at ITENAS Bandung & Web Developer experienced in building production-ready web applications using Next.js, React, TypeScript, Supabase, and AI-assisted workflows.

            </p>
          </div>
        </motion.section>

        <motion.section
          id="tech"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader subtitle="Skills" title="Tech Stack" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-emerald-500/20 bg-white/5 p-5 text-center text-sm text-emerald-200 shadow-[0_0_18px_rgba(0,255,153,0.12)]"
              >
                <p className="font-press text-[11px] uppercase tracking-[0.3em]">
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-5 text-center text-sm text-violet-200 shadow-[0_0_18px_rgba(139,92,246,0.12)]">
              <p className="font-press text-[11px] uppercase tracking-[0.3em]">
                Backend
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
                {backendStack.map((item) => (
                  <span key={item} className="rounded border border-violet-400/30 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-amber-400/20 bg-white/5 p-5 text-center text-sm text-amber-200 shadow-[0_0_18px_rgba(255,179,71,0.12)]">
              <p className="font-press text-[11px] uppercase tracking-[0.3em]">
                Tools
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
                {toolsStack.map((item) => (
                  <span key={item} className="rounded border border-amber-400/30 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader subtitle="Projects" title="Arcade Gallery" />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            A selection of web apps, dashboards, and interface explorations. Open
            a live demo or source repository when one is available.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="timeline"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader subtitle="Timeline" title="Experience Log" />
          <div className="mt-8 space-y-6 border-l border-emerald-500/20 pl-6">
            {timeline.map((item) => (
              <div key={item.id} className="relative">
                <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(0,255,153,0.6)]" />
                <div className="rounded-2xl border border-emerald-500/20 bg-white/5 p-5 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-emerald-300/70">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader subtitle="Contact Me" title="Contact Terminal" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4 text-sm text-zinc-300">
              <p className="text-emerald-300">
                Feel free to connect for projects, collaboration, or development opportunities.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:ahmadfarhn14@gmail.com"
                  className="block rounded border border-emerald-500/30 bg-white/5 px-4 py-3 transition hover:border-emerald-300"
                >
                  Email: ahmadfarhn14@gmail.com
                </a>
                <a
                  href="https://github.com/ahmad-farhan14"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded border border-cyan-500/30 bg-white/5 px-4 py-3 transition hover:border-cyan-300"
                >
                  GitHub: github.com/ahmad-farhan14
                </a>
                <a
                  href="https://www.instagram.com/adfrhnz_"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded border border-violet-500/30 bg-white/5 px-4 py-3 transition hover:border-violet-300"
                >
                  Instagram: @adfrhnz_
                </a>
              </div>
            </div>

            <form
              className="space-y-4 rounded-3xl border border-emerald-500/20 bg-black/60 p-6"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const name = String(formData.get("name") ?? "").trim();
                const email = String(formData.get("email") ?? "").trim();
                const message = String(formData.get("message") ?? "").trim();
                const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                const body = encodeURIComponent(
                  `${message}\n\nFrom: ${name}\nEmail: ${email}`
                );

                window.location.href = `mailto:ahmadfarhn14@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Type your name..."
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded border border-emerald-500/30 bg-black/60 px-4 py-3 text-sm text-emerald-200 outline-none focus:border-emerald-300"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Type your email..."
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded border border-cyan-500/30 bg-black/60 px-4 py-3 text-sm text-cyan-200 outline-none focus:border-cyan-300"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.2em] text-violet-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Type your message..."
                  rows={4}
                  required
                  className="mt-2 w-full rounded border border-violet-500/30 bg-black/60 px-4 py-3 text-sm text-violet-200 outline-none focus:border-violet-300"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded border border-emerald-400/60 bg-emerald-400/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-emerald-300 shadow-[0_0_16px_rgba(0,255,153,0.4)]"
              >
                Send Transmission
              </button>
              <p className="text-xs text-zinc-500">
                This opens your email app with the message ready to send.
              </p>
            </form>
          </div>
        </motion.section>
      </motion.main>

      <footer className="border-t border-emerald-500/10 bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-zinc-500 md:flex-row">
          <p>Designed & Developed by Ahmad Farhan Zilwansyah</p>
          <p>Retro Futuristic Portfolio • Next.js • Tailwind CSS • Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
        {subtitle}
      </p>
      <h2 className="font-press text-lg text-white md:text-xl">{title}</h2>
    </div>
  );
}

type Project = {
  title: string;
  summary: string;
  stack: string[];
  images: StaticImageData[];
  demoUrl: string | null;
  githubUrl: string | null;
  privateRepository?: boolean;
};

function ProjectCard({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur"
    >
      <div className="relative h-40 overflow-hidden bg-black/60">
        {project.images.length > 0 ? (
          <>
            <Image
              src={project.images[index]}
              alt={`${project.title} preview ${index + 1}`}
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.25),transparent_70%)]" />
            <div className="absolute inset-0 flex items-end justify-start p-3 opacity-0 transition group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="relative z-10 font-press text-[9px] uppercase tracking-[0.2em] text-emerald-300">
                Project preview
              </p>
            </div>
            <div className="absolute bottom-2 right-2 rounded border border-emerald-400/40 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              {index + 1}/{project.images.length}
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.12),transparent_68%),linear-gradient(135deg,#090d0d,#050505_55%,#0d0814)] p-5">
            <div className="w-full border border-emerald-400/30 bg-black/60 p-4 shadow-[0_0_24px_rgba(0,255,153,0.08)]">
              <p className="font-vt text-sm tracking-[0.25em] text-cyan-300">
                PROJECT FILE // ONLINE
              </p>
              <p className="mt-2 font-press text-xs uppercase tracking-[0.18em] text-emerald-300">
                {project.title}
              </p>
              <div className="mt-4 flex gap-1">
                <span className="h-1.5 w-8 bg-emerald-400/70" />
                <span className="h-1.5 w-5 bg-cyan-400/60" />
                <span className="h-1.5 w-10 bg-violet-400/50" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-base font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded border border-emerald-400/40 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-emerald-300 transition hover:bg-emerald-400/10"
            >
              Demo
            </a>
          ) : (
            <span className="flex-1 cursor-not-allowed rounded border border-zinc-700 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
              Demo unavailable
            </span>
          )}
          {project.privateRepository ? (
            <button
              type="button"
              onClick={(event) => event.preventDefault()}
              title="Private Repository (NDA)"
              aria-disabled="true"
              className="flex-1 cursor-not-allowed rounded border border-cyan-400/40 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-cyan-300 opacity-50"
            >
              GitHub
            </button>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded border border-cyan-400/40 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-cyan-300 transition hover:bg-cyan-400/10"
            >
              GitHub
            </a>
          ) : (
            <span className="flex-1 cursor-not-allowed rounded border border-zinc-700 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
              GitHub unavailable
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
