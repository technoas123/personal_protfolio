import { useEffect } from "react";

function generateWavePoints() {
  const W = 900, H = 48;
  const pts = [];
  for (let x = 0; x <= W; x += 6) {
    const env = Math.sin((Math.PI * x) / W);
    const y =
      H / 2 +
      env * 16 * Math.sin(x * 0.022) * Math.cos(x * 0.009);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export default function WaveformStrip() {
  useEffect(() => {
    const el = document.getElementById("staticWaveLine");
    if (el) el.setAttribute("points", generateWavePoints());
  }, []);

  return (
    <div className="waveform-strip">
      <div className="waveform-strip-inner">
        <div className="waveform-label">BUILDING THE FUTURE</div>
        <div className="waveform-svg-wrap">
          <svg
            id="staticWave"
            width="100%"
            height="48"
            viewBox="0 0 900 48"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="15%" stopColor="#5483B3" />
                <stop offset="85%" stopColor="#7DA0CA" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline
              id="staticWaveLine"
              points=""
              fill="none"
              stroke="url(#wg)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="waveform-label">ECE · DSP · SDR</div>
      </div>
    </div>
  );
}