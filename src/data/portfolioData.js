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
  {
    title: "Core Competencies",
    icon: "tools",
    badges: ["Wireless Communications", "Signal Processing", "Embedded Systems", "Software Development", "AI & Intelligent Systems"],
  },
];

export const projectsData = [
  {
    title: "SDR Receiver Chain",
    tag: "Wireless Communications",

    desc: "Designed and developed a complete software-defined radio receiver chain for wireless communication systems, focusing on synchronization, signal processing, channel coding, and receiver-side algorithm development for reliable data recovery.",

    overview:
    "Developed as part of my internship at Gypsy Cores Innovations Pvt. Ltd., this project focused on the design and validation of a complete software-defined radio receiver chain for wireless communication systems. The work involved receiver-side signal processing, synchronization, channel coding, and system validation to enable reliable signal acquisition and data recovery under practical communication conditions",

    contributions: [
    "Receiver-side algorithm development",
    "Synchronization and signal acquisition",
    "Signal processing implementation",
    "MATLAB simulation and validation",
    "System-level testing and performance evaluation"
    ],

    highlights: [
    "Professional R&D internship project",
    "Software-defined radio receiver development",
    "Synchronization and signal acquisition",
    "Digital signal processing algorithms",
    "Channel coding and decoding",
    "Wireless communication system validation"
    ],

    tech: [
    "MATLAB",
    "SDR",
    "DSP",
    "Wireless Systems"
    ],

    icon: "📡",
    pvLabel: "SDR · MATLAB",
    pvClass: "pv-1",

    featured: true,

    github: null,
    demo: null,

    demoLabel: "Overview →",
  },
  {
    title: "ResQBot",
    tag: "Embedded AI Systems",

    desc: "Developed an intelligent disaster response rover integrating computer vision, thermal sensing, acoustic analysis, and long-range communication to assist in victim detection and situational awareness.",

    overview:
    "ResQBot is a multi-modal disaster response rover developed to assist search and rescue operations in challenging environments. The system combines computer vision, thermal sensing, acoustic analysis, and long-range LoRa communication to improve victim detection and situational awareness. The project was developed collaboratively with Angel, Hanna, and Harikesh under the guidance of Ebin M Manuel.",

    contributions: [
    "Led system integration and overall hardware-software coordination.",
    "Researched and implemented LoRa-based long-range communication.",
    "Devoloped the Acoustic and Thermal AI model for human detection",
    "Integrated sensing subsystems and communication interfaces.",
    "Contributed to system testing, validation, and deployment on embedded hardware."
    ],

    highlights: [
    "Multi-modal human detection system",
    "Computer vision, thermal, and acoustic sensing",
    "Long-range LoRa communication",
    "Raspberry Pi based deployment",
    "Real-time disaster response application",
    "Collaborative engineering project"
    ],

    technologies: [
    "Python",
    "Raspberry Pi",
    "LoRa",
    "Computer Vision",
    "Machine Learning",
    "Embedded Systems"
    ],

    team: [
    "Ahammed Salahuddeen N Y",
    "Angel Joy",
    "Fathima Hanna",
    "Harikesh S"
    ],

    mentor: "Ebin M Manuel",

    tech: [
    "Python",
    "Raspberry Pi",
    "LoRa",
    "Computer Vision"
    ],

    icon: "🤖",
    pvLabel: "AI · Embedded",
    pvClass: "pv-2",

    github: "github.com/technoas123/ResQBot",
    demo: "https://drive.google.com/file/d/1Zl4EiLEOgPHKKaejkdf_jzNLJ2pTcOUw/view?usp=sharing",

    demoLabel: "Overview →",
  },
  {
    title: "Rotating Shaft Digital Twin",
    tag: "Industry 4.0",

    desc: "Designed a digital twin framework for rotating machinery, combining simulation models and intelligent analytics to support predictive maintenance and operational monitoring.",

    overview:
    "Developed a digital twin framework for rotating shaft systems to support predictive maintenance and condition monitoring applications. The project combined virtual system modeling, simulation, and analytics to replicate machine behavior and enable early fault identification in industrial environments.",

    contributions: [
    "Developed simulation models for rotating shaft dynamics.",
    "Implemented a virtual representation of physical machinery using MATLAB and Simulink.",
    "Integrated monitoring and analytics concepts for predictive maintenance.",
    "Evaluated system behavior under different operating conditions."
    ],

    highlights: [
    "Industry 4.0 application",
    "Digital twin architecture",
    "Predictive maintenance concepts",
    "Rotating machinery simulation",
    "Condition monitoring",
    "MATLAB & Simulink development"
    ],

    technologies: [
    "MATLAB",
    "Simulink",
    "Digital Twin",
    "Predictive Maintenance",
    "Simulation",
    "Analytics"
    ],

    tech: [
    "MATLAB",
    "Digital Twin",
    "Simulation",
    "Analytics"
    ],

    icon: "⚙️",
    pvLabel: "Industry 4.0",
    pvClass: "pv-3",

    github: "https://github.com/technoas123/Rotating-Shaft-Digital-Twin",
    demo: null,

    demoLabel: "Overview →",
  },
  {
    title: "Learning Dashboard",
    tag: "Full Stack Development",

    desc: "Built a MERN-powered learning platform featuring course management, progress tracking, and an interactive user experience for streamlined learning workflows.",

    overview:
    "Developed a full-stack learning management platform designed to help users organize courses, track learning progress, and manage educational content through an intuitive and responsive web interface.",

    contributions: [
    "Built responsive frontend interfaces using React.",
    "Developed backend APIs and application logic using Node.js and Express.",
    "Integrated MongoDB for data storage and management.",
    "Implemented authentication and user-specific learning workflows."
    ],

    highlights: [
    "Full-stack MERN application",
    "Course management system",
    "Progress tracking",
    "Authentication and user management",
    "Responsive web design",
    "REST API integration"
    ],

    technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "REST APIs"
    ],

    tech: [
    "React",
    "Node.js",
    "MongoDB",
    "MERN"
    ],

    icon: "📚",
    pvLabel: "MERN Stack",
    pvClass: "pv-4",

    github: "https://github.com/technoas123/learning_dashboard",
    demo: null,

    demoLabel: "Overview →",
  },
  {
    title: "Crypto-Lib",
    tag: "Systems Programming",

    desc: "Implemented core cryptographic algorithms in C to explore secure data handling, encryption techniques, and low-level software development concepts.",

    overview:
    "Developed a cryptography-focused library in C to study the implementation of fundamental encryption concepts, secure data handling techniques, and algorithm design. The project provided hands-on experience with low-level programming, memory management, and systems-oriented software development.",

    contributions: [
    "Implemented cryptographic algorithms in C.",
    "Designed modular and reusable library components.",
    "Explored secure data processing and encryption workflows.",
    "Practiced low-level programming and memory management techniques."
    ],

    highlights: [
    "Cryptographic algorithm implementation",
    "Systems programming in C",
    "Memory management",
    "Algorithm design",
    "Modular software development",
    "Low-level software engineering"
    ],

    technologies: [
    "C",
    "Cryptography",
    "Algorithms",
    "Systems Programming",
    "Data Structures"
    ],

    tech: [
    "C",
    "Cryptography",
    "Algorithms",
    "Systems"
    ],

    icon: "🔐",
    pvLabel: "C · Security",
    pvClass: "pv-5",

    github: "https://github.com/technoas123/crypto-lib",
    demo: null,

    demoLabel: "Overview →",
  },
  {
    title: "Wearable Device for Dementia Patients",
    tag: "Healthcare IoT",

    desc: "Developed a smart wearable prototype leveraging Raspberry Pi and sensor integration to support patient monitoring, safety assistance, and location-aware notifications.",

    overview:
    "Developed a healthcare-focused wearable system designed to improve the safety and quality of life of dementia patients. The device combines face recognition, location tracking, emergency assistance features, and intelligent monitoring capabilities to support both patients and caregivers. The project was developed collaboratively with Angel, Hanna, and Harikesh under the guidance of Ebin M Manuel.",

    contributions: [
    "Developed the face recognition module for patient identification and information retrieval.",
    "Contributed to system design and hardware-software integration.",
    "Worked with Raspberry Pi-based embedded system development.",
    "Integrated sensing, monitoring, and communication functionalities.",
    "Participated in testing, validation, and system refinement."
    ],

    highlights: [
    "Face recognition based patient identification",
    "Healthcare IoT application",
    "Patient monitoring and assistance",
    "Location-aware notifications",
    "Embedded system development",
    "Raspberry Pi deployment"
    ],

    technologies: [
    "Python",
    "OpenCV",
    "Raspberry Pi",
    "IoT",
    "Healthcare Technology",
    "Embedded Systems"
    ],

    team: [
    "Ahammed Salahuddeen N Y",
    "Angel",
    "Hanna",
    "Harikesh"
    ],

    mentor: "Ebin M Manuel",

    tech: [
    "Python",
    "Raspberry Pi",
    "IoT",
    "Healthcare"
    ],

    icon: "⌚",
    pvLabel: "IoT · Healthcare",
    pvClass: "pv-6",

    github: "https://github.com/technoas123/wearable_device_for_dementia_patients",
    demo: null,

    demoLabel: "Overview →",
  }
];

export const experienceData = [
{
period: "2026 — Present",
role: "Wireless Communications & Signal Processing Intern",
org: "Gypsy Cores Innovations",
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