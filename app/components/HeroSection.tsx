"use client";

import { FormEvent, useState, useEffect, useCallback } from "react";

const FLAP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function MiniFlap({ char, delay, x, y, size, rotate }: {
  char: string; delay: number; x: number; y: number; size: number; rotate: number;
}) {
  const [current, setCurrent] = useState(" ");
  const [flipping, setFlipping] = useState(false);
  const [visible, setVisible] = useState(false);

  const doFlip = useCallback((targetChar: string) => {
    setFlipping(true);
    let count = 0;
    const maxFlips = 4 + Math.floor(Math.random() * 6);
    const speed = 60 + Math.floor(Math.random() * 40);
    const interval = setInterval(() => {
      if (count < maxFlips) {
        setCurrent(FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)]);
        count++;
      } else {
        setCurrent(targetChar);
        setFlipping(false);
        clearInterval(interval);
      }
    }, speed);
  }, []);

  useEffect(() => {
    // Initial entrance
    const enterTimeout = setTimeout(() => {
      setVisible(true);
      doFlip(char);
    }, delay);

    // Periodic re-flip every 3-7 seconds
    const reflipInterval = setInterval(() => {
      const newChar = FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)];
      doFlip(newChar);
    }, 3000 + Math.random() * 4000);

    return () => {
      clearTimeout(enterTimeout);
      clearInterval(reflipInterval);
    };
  }, [char, delay, doFlip]);

  const scale = size / 32;

  return (
    <div
      className={`mini-flap ${flipping ? "flipping" : ""} ${visible ? "visible" : ""}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotate}deg) scale(${scale})`,
        animationDelay: `${delay + 500}ms`,
      }}
    >
      <span className="mini-flap-char">{current}</span>
      <div className="mini-flap-line" />
    </div>
  );
}

const SCATTERED_FLAPS = [
  // Left side
  { char: "R", x: 3,  y: 8,   delay: 100,  size: 36, rotate: -6 },
  { char: "E", x: 10, y: 4,   delay: 250,  size: 28, rotate: 3 },
  { char: "T", x: 18, y: 16,  delay: 400,  size: 32, rotate: -2 },
  { char: "3", x: 6,  y: 38,  delay: 600,  size: 24, rotate: 5 },
  { char: "O", x: 14, y: 55,  delay: 350,  size: 30, rotate: -4 },
  { char: "5", x: 2,  y: 70,  delay: 700,  size: 26, rotate: 8 },
  { char: "F", x: 11, y: 82,  delay: 500,  size: 34, rotate: -3 },

  // Right side
  { char: "V", x: 82, y: 6,   delay: 200,  size: 30, rotate: 4 },
  { char: "E", x: 90, y: 14,  delay: 450,  size: 36, rotate: -5 },
  { char: "S", x: 95, y: 3,   delay: 300,  size: 24, rotate: 2 },
  { char: "T", x: 84, y: 42,  delay: 550,  size: 28, rotate: -7 },
  { char: "A", x: 93, y: 50,  delay: 150,  size: 32, rotate: 6 },
  { char: "0", x: 88, y: 68,  delay: 650,  size: 26, rotate: -1 },
  { char: "P", x: 80, y: 80,  delay: 800,  size: 34, rotate: 3 },
  { char: "7", x: 94, y: 78,  delay: 380,  size: 28, rotate: -4 },

  // Top scattered
  { char: "L", x: 35, y: 2,   delay: 420,  size: 22, rotate: -8 },
  { char: "X", x: 62, y: 5,   delay: 580,  size: 24, rotate: 5 },

  // Bottom scattered
  { char: "K", x: 40, y: 90,  delay: 720,  size: 22, rotate: 6 },
  { char: "W", x: 58, y: 88,  delay: 480,  size: 26, rotate: -3 },
];

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="hero">
      <div className="hero-flaps-bg">
        {SCATTERED_FLAPS.map((flap, i) => (
          <MiniFlap key={i} {...flap} />
        ))}
      </div>

      <div className="hero-content">
        <h1>
          Turn any TV into a retro departure board
        </h1>

        <p className="subtitle">
          The iconic airport flip-board look, without the $3,500 hardware.
        </p>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={submitted ? "submitted" : ""}>
              {submitted ? "You're in ✓" : "Get early access →"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
