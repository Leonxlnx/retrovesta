"use client";

import { FormEvent, useState } from "react";

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
      <h1>
        Turn any TV into a retro
        <br />
        split-flap display.
      </h1>
      <p className="subtitle">
        The classic flip-board look, without the $3,500 hardware.
      </p>

      <form className="email-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          {submitted ? "You're in ✓" : "Get Early Access"}
        </button>
      </form>
    </section>
  );
}
