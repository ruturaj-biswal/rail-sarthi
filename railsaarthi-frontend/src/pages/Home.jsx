import SearchBox from "../components/SearchBox";
import Features from "../components/Features";
import { useEffect, useRef } from "react";

function Home() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      const sz = Math.random() * 2.5 + 0.8;
      p.style.cssText = `
        position: absolute;
        bottom: -5px;
        left: ${Math.random() * 100}%;
        width: ${sz}px;
        height: ${sz}px;
        border-radius: 50%;
        background: #F5A623;
        opacity: ${0.2 + Math.random() * 0.5};
        animation: rsFloat ${6 + Math.random() * 10}s ${Math.random() * 8}s linear infinite;
        pointer-events: none;
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

        @keyframes rsFloat {
          0%   { transform: translateY(0) scale(1);        opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        @keyframes rsDash {
          to { stroke-dashoffset: -80; }
        }
        @keyframes rsPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes rsSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .rs-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #F5A623;
          font-weight: 500;
          padding: 6px 20px;
          border: 0.5px solid rgba(245,166,35,0.35);
          border-radius: 20px;
          background: rgba(245,166,35,0.08);
          animation: rsSlideUp 0.7s ease both;
        }
        .rs-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 14vw, 130px);
          color: #ffffff;
          letter-spacing: 3px;
          line-height: 0.9;
          margin: 20px 0 0;
          animation: rsSlideUp 0.7s 0.15s ease both;
        }
        .rs-title-accent {
          color: #F5A623;
        }
        .rs-tagline {
          color: rgba(210,220,255,0.72);
          font-size: clamp(15px, 2.2vw, 20px);
          margin: 22px auto 0;
          max-width: 620px;
          line-height: 1.7;
          font-weight: 300;
          animation: rsSlideUp 0.7s 0.3s ease both;
        }
        .rs-tagline b {
          color: #00D4FF;
          font-weight: 500;
        }
        .rs-brand {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #F5A623;
          font-weight: 600;
          margin-top: 12px;
          animation: rsSlideUp 0.7s 0.45s ease both;
        }
        .rs-search-wrap {
          margin-top: 36px;
          width: 100%;
          max-width: 640px;
          animation: rsSlideUp 0.7s 0.6s ease both;
        }
      `}</style>

      <div className="relative min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* Background Video — unchanged */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/train.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay — unchanged */}
        <div className="fixed inset-0 bg-black/75 -z-10" />

        {/* Animated Railway Tracks SVG */}
        <svg
          className="fixed inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 800"
        >
          {/* Rails */}
          <line x1="0" y1="390" x2="1200" y2="390" stroke="rgba(245,166,35,0.12)" strokeWidth="2" />
          <line x1="0" y1="415" x2="1200" y2="415" stroke="rgba(245,166,35,0.12)" strokeWidth="2" />

          {/* Sleepers */}
          {[80, 200, 320, 440, 560, 680, 800, 920, 1040].map((x, i) => (
            <line
              key={x}
              x1={x} y1="378"
              x2={x} y2="427"
              stroke="rgba(245,166,35,0.22)"
              strokeWidth="2"
              strokeDasharray="4 6"
              style={{ animation: `rsDash 1.4s ${i * 0.15}s linear infinite` }}
            />
          ))}

          {/* Signal dots */}
          {[80, 320, 560, 800, 1040].map((x, i) => (
            <circle
              key={x}
              cx={x} cy="402" r="3.5"
              fill="#F5A623"
              opacity="0.55"
              style={{ animation: `rsPulse 2.2s ${i * 0.4}s ease-in-out infinite` }}
            />
          ))}

          {/* Subtle top accent line */}
          <line x1="0" y1="180" x2="1200" y2="180" stroke="rgba(0,212,255,0.05)" strokeWidth="1" />
        </svg>

        {/* Floating Particles */}
        <div
          ref={particlesRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 2 }}
        />

        {/* Hero Section */}
        <section
          className="min-h-screen flex flex-col justify-center items-center text-center px-6"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="rs-eyebrow">India's Smart Railway Assistant</div>

          <h1 className="rs-title">
            Rail<span className="rs-title-accent">Saarthi</span>
          </h1>

          <p className="rs-tagline">
            Smart Railway Assistant powered by{" "}
            <b>AI Crowd Prediction</b>,{" "}
            <b>Delay Prediction</b>{" "}
            and Travel Intelligence.
          </p>

          <div className="rs-brand">♾️ Powered By @RuturajBiswal</div>

          <div className="rs-search-wrap flex justify-center">
            <SearchBox />
          </div>
        </section>

        {/* Features — unchanged */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <Features />
        </div>

      </div>
    </>
  );
}

export default Home;