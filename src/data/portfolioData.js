export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  eyebrow: "Electronics & Communication Engineer",
  firstName: "Ahammed",
  lastName: "Salahuddeen",
  initials: "N Y",
  role: "Wireless Communications Engineer · SDR Developer · Embedded Engineer",
  tags: ["MATLAB", "Signal Processing", "Wireless Systems", "Embedded C"],
  description:
    "Building SDR and wireless communication systems through MATLAB, signal processing, and embedded engineering.",
  socials: {
    github: "https://github.com/technoas123",
    linkedin: "https://www.linkedin.com/in/ahammed-salahuddeen-4128bb229/",
    email: "mailto:ahammedsalahuddeen@gmail.com",
  },
};

export const aboutData = {
  title: "Building systems that connect theory with real-world applications.",
  paragraphs: [
    "I'm Ahammed Salahuddeen, an Electronics & Communication Engineering graduate with a strong interest in communication systems, signal processing, embedded engineering, and software development.",
    "I enjoy solving complex engineering problems and transforming ideas into practical solutions. My interests span wireless communications, SDR, embedded systems, and modern software technologies, allowing me to work across both hardware and software domains.",
    "Driven by curiosity and continuous learning, I aim to build reliable, efficient, and impactful technologies that bridge innovation with real-world needs.",
  ],
  expertise: [
    { label: "Wireless Communications", icon: "signal" },
    { label: "Digital Signal Processing", icon: "cpu" },
    { label: "Embedded Systems & Firmware", icon: "chip" },
    { label: "Software Engineering", icon: "code" },
  ],
  stats: [
    { value: 18, label: "Projects", desc: "Built & Documented" },
    { value: 5, label: "Domains", desc: "Communication • Embedded" },
    { value: 15, label: "Technologies", desc: "Across Hardware & Software" },
    { value: 25, label: "Repositories", desc: "Projects & Experiments" },
  ],
};

export const skillsData = [
  {
    title: "Programming",
    icon: "code",
    badges: ["MATLAB", "C", "C++", "Python", "JavaScript", "Verilog"],
  },
  {
    title: "Web Development",
    icon: "web",
    badges: ["React", "JavaScript", "Node.js", "Tailwind", "HTML5", "CSS3", "MERN"],
  },
  {
    title: "Communication Systems",
    icon: "signal",
    badges: ["SDR", "Synchronization", "Channel Coding", "BER Analysis", "Rayleigh Fading"],
  },
  {
    title: "Embedded Systems",
    icon: "chip",
    badges: ["Arduino", "ESP32", "Raspberry Pi", "I2C/SPI", "UART", "LoRa", "Embedded C"],
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    badges: ["Linux", "MATLAB", "Git", "KiCAD", "Vivado", "LTspice"],
  },
];

export const projectsData = [
  {
    title: "SDR Receiver Chain",
    tag: "Wireless Communications",
    desc: "Designed and developed a complete software-defined radio receiver chain for wireless communication systems, focusing on synchronization, signal processing, channel coding, and receiver-side algorithm development for reliable data recovery.",
    tech: ["MATLAB", "SDR", "DSP", "Wireless Systems"],
    icon: "📡",
    pvLabel: "SDR · MATLAB",
    pvClass: "pv-1",
    github: "#",
    demo: "#",
    demoLabel: "Overview →",
  },
  {
    title: "ResQBot",
    tag: "Embedded AI Systems",
    desc: "Developed an intelligent disaster response rover integrating computer vision, thermal sensing, acoustic analysis, and long-range communication to assist in victim detection and situational awareness.",
    tech: ["Python", "Raspberry Pi", "LoRa", "Computer Vision"],
    icon: "🤖",
    pvLabel: "AI · Embedded",
    pvClass: "pv-2",
    github: "#",
    demo: "#",
    demoLabel: "Overview →",
  },
  {
    title: "Rotating Shaft Digital Twin",
    tag: "Industry 4.0",
    desc: "Designed a digital twin framework for rotating machinery, combining simulation models and intelligent analytics to support predictive maintenance and operational monitoring.",
    tech: ["MATLAB", "Digital Twin", "Simulation", "Analytics"],
    icon: "⚙️",
    pvLabel: "Industry 4.0",
    pvClass: "pv-3",
    github: "#",
    demo: "#",
    demoLabel: "Overview →",
  },
  {
    title: "Learning Dashboard",
    tag: "Full Stack Development",
    desc: "Built a MERN-powered learning platform featuring course management, progress tracking, and an interactive user experience for streamlined learning workflows.",
    tech: ["React", "Node.js", "MongoDB", "MERN"],
    icon: "📚",
    pvLabel: "MERN Stack",
    pvClass: "pv-4",
    github: "#",
    demo: "#",
    demoLabel: "Overview →",
  },
  {
    title: "Crypto-Lib",
    tag: "Systems Programming",
    desc: "Implemented core cryptographic algorithms in C to explore secure data handling, encryption techniques, and low-level software development concepts.",
    tech: ["C", "Cryptography", "Algorithms", "Systems"],
    icon: "🔐",
    pvLabel: "C · Security",
    pvClass: "pv-5",
    github: "#",
    demo: "#",
    demoLabel: "Overview →",
  },
  {
    title: "Wearable Device for Dementia Patients",
    tag: "Healthcare IoT",
    desc: "Developed a smart wearable prototype leveraging Raspberry Pi and sensor integration to support patient monitoring, safety assistance, and location-aware notifications.",
    tech: ["Python", "Raspberry Pi", "IoT", "Healthcare"],
    icon: "⌚",
    pvLabel: "IoT · Healthcare",
    pvClass: "pv-6",
    github: "#",
    demo: "#",
    demoLabel: "Overview →",
  }
];

export const experienceData = [
{
period: "2026 — Present",
role: "Wireless Communications & Signal Processing Intern",
org: "Research & Development — Wireless Systems",
desc: "Contributing to the development of wireless communication waveforms and receiver-side signal processing algorithms. Working on SDR-based communication systems, synchronization techniques, channel modeling, algorithm validation, and system-level performance evaluation using MATLAB and software-defined radio platforms.",
tags: ["MATLAB", "Signal Processing", "Waveform Development", "SDR", "Wireless Systems", "Algorithm Development"],
active: true,
},
{
  period: "2022 — 2026",
  role: "Electronics & Communication Engineering Undergraduate",
  org: "RIT Kottayam",
  desc: "Built a strong foundation in communication systems, signal processing, embedded engineering, software development, and hardware design through academic coursework and hands-on projects.",
  tags: ["MATLAB", "Embedded Systems", "Signal Processing", "IoT", "Software Development"],
  active: false,
},
];

export const achievementsData = [
  { value: 18, label: "Projects", desc: "Built & Documented" },
  { value: 5, label: "Domains", desc: "Communication • Embedded • AI • Software • Hardware" },
  { value: 15, label: "Technologies", desc: "Across Hardware & Software" },
  { value: 20, label: "Repositories", desc: "Public & Private" },
];