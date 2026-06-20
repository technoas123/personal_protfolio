import { useEffect, useRef } from "react";
import { heroData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, EmailIcon } from "./Icons";
import profilePhoto from "../assets/profile.jpg";

const WaveCanvas = ({ theme }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const drawWave = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const isDark = theme === "dark";

      const waves = [
        {
          amp: 28,
          freq: 0.018,
          speed: 0.04,
          color: isDark ? "rgba(84,131,179,0.9)" : "rgba(84,131,179,0.8)",
          lw: 2.5,
        },
        {
          amp: 16,
          freq: 0.03,
          speed: 0.07,
          color: isDark ? "rgba(125,160,202,0.55)" : "rgba(125,160,202,0.5)",
          lw: 1.5,
        },
        {
          amp: 8,
          freq: 0.055,
          speed: 0.12,
          color: isDark ? "rgba(193,232,255,0.3)" : "rgba(84,131,179,0.25)",
          lw: 1,
        },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.lineWidth = w.lw;
        ctx.strokeStyle = w.color;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        for (let x = 0; x <= W; x += 2) {
          const env = Math.sin((Math.PI * x) / W);
          const y =
            H / 2 +
            env *
              w.amp *
              Math.sin(x * w.freq + timeRef.current * w.speed) *
              Math.cos(x * w.freq * 0.4 + timeRef.current * w.speed * 0.6);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      const cx = W / 2 + Math.sin(timeRef.current * 0.05) * 30;
      const cy = H / 2 + Math.sin(timeRef.current * 0.08) * 12;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 14);
      grd.addColorStop(
        0,
        isDark ? "rgba(84,131,179,0.9)" : "rgba(84,131,179,0.7)"
      );
      grd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      timeRef.current++;
      frameRef.current = requestAnimationFrame(drawWave);
    };

    drawWave();
    return () => cancelAnimationFrame(frameRef.current);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      id="waveCanvas"
      width={480}
      height={110}
      style={{
        position: "absolute",
        bottom: "-20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "block",
      }}
    />
  );
};

export default function Hero({ theme }) {
  const { eyebrow, firstName, lastName, initials, role, tags, description, socials } =
    heroData;

  return (
    <section id="home">
      <div className="hero-inner">
        {/* Left: Text */}
        <div className="hero-content">
          <div className="hero-eyebrow reveal visible">{eyebrow}</div>

          <h1 className="hero-name reveal visible">
            <span className="name-line">{firstName}</span>
            <span className="name-line">{lastName}</span>
            <span className="name-ny">{initials}</span>
          </h1>

          <p className="hero-role reveal visible">{role}</p>

          <div className="hero-tags reveal visible">
            {tags.map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
          </div>

          <p className="hero-desc reveal visible">{description}</p>

          <div className="hero-actions reveal visible">
            <a href="#projects" className="btn-primary">
              Explore Projects
            </a>
            <a href="https://drive.google.com/file/d/1B7a1YGz-yO9u8CqwXMxspbwbkpSgKX-s/view?usp=sharing" className="btn-secondary" target="_blank">
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials reveal visible">
            <a
              href={socials.github}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
            <div className="social-sep" />
            <a
              href={socials.linkedin}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <div className="social-sep" />
            <a href={socials.email} className="social-link">
              <EmailIcon />
              Email
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual reveal visible">
          <div className="photo-frame-wrap">
            <div className="orbit orbit-1">
              <div className="orbit-dot orbit-dot-1" />
              <div className="orbit-dot orbit-dot-2" />
            </div>
            <div className="orbit orbit-2" />

            <div className="photo-container" id="photoContainer">
                <img
                    src={profilePhoto}
                    alt="Ahammed Salahuddeen N Y"
                />
            </div>

            <div className="tech-node node-1">📡 SDR</div>
            <div className="tech-node node-2">⚡ MATLAB</div>
            <div className="tech-node node-3">🔌 Embedded</div>
            <div className="tech-node node-4">📊 Signal Processing</div>
          </div>

          <WaveCanvas theme={theme} />
        </div>
      </div>
    </section>
  );
}