"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Config ─── */

const ROWS = 5;
const COLS = 16;
const CYCLE_INTERVAL = 9000;

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+-=,./ ";

interface Quote {
  lines: string[];
  color: "green" | "orange" | "purple";
}

const QUOTES: Quote[] = [
  {
    lines: [
      "",
      "  GOD IS IN   ",
      " THE DETAILS. ",
      " - LUDWIG MIES",
      "",
    ],
    color: "green",
  },
  {
    lines: [
      "",
      " STAY HUNGRY  ",
      " STAY FOOLISH ",
      " - STEVE JOBS ",
      "",
    ],
    color: "orange",
  },
  {
    lines: [
      "",
      "GOOD DESIGN IS",
      "GOOD BUSINESS ",
      "- THOMAS WATSON",
      "",
    ],
    color: "purple",
  },
];

const COLOR_PALETTES: Record<string, string[]> = {
  green: ["#059669", "#10b981", "#34d399", "#2dd4bf"],
  orange: ["#ea580c", "#f97316", "#fb923c", "#fcd34d"],
  purple: ["#7e22ce", "#a855f7", "#c084fc", "#f472b6"],
};

/* ─── Helpers ─── */

function getRandomChar(): string {
  return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
}

function padCenter(str: string, length: number): string {
  const padLen = Math.max(0, length - str.length);
  const padLeft = Math.floor(padLen / 2);
  const padRight = padLen - padLeft;
  return " ".repeat(padLeft) + str + " ".repeat(padRight);
}

/* ─── Individual Flap Animation ─── */

interface FlapRef {
  textEl: HTMLDivElement;
  parentEl: HTMLDivElement;
  currentChar: string;
}

function animateFlap(
  flap: FlapRef,
  targetChar: string,
  palette: string[],
  fastPhaseDuration: number
) {
  let currentDelay = 150;
  const minDelay = 25;
  const maxDelay = 350;
  let elapsedTime = 0;
  let phase: "accelerate" | "fast" | "decelerate" = "accelerate";

  function tick() {
    flap.textEl.innerText = getRandomChar();

    // Subtle color flashes on ~12% of ticks for non-empty cells
    const hasText = targetChar !== " " || flap.currentChar !== " ";
    if (hasText && Math.random() > 0.88) {
      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      flap.parentEl.style.backgroundColor = randomColor;
    } else {
      flap.parentEl.style.backgroundColor = "";
    }

    elapsedTime += currentDelay;

    if (phase === "accelerate") {
      currentDelay *= 0.6;
      if (currentDelay <= minDelay) {
        currentDelay = minDelay;
        phase = "fast";
      }
    } else if (phase === "fast") {
      if (elapsedTime > fastPhaseDuration) {
        phase = "decelerate";
      }
    } else if (phase === "decelerate") {
      currentDelay *= 1.25;
    }

    if (phase === "decelerate" && currentDelay >= maxDelay) {
      flap.textEl.innerText = targetChar;
      flap.currentChar = targetChar;
      flap.parentEl.style.backgroundColor = "";
      return;
    }

    setTimeout(tick, currentDelay);
  }

  tick();
}

/* ─── Component ─── */

export default function SplitFlapBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const flapsRef = useRef<FlapRef[]>([]);
  const quoteIndexRef = useRef(0);
  const initializedRef = useRef(false);

  const updateBoard = useCallback(() => {
    const quoteData = QUOTES[quoteIndexRef.current];
    const palette = COLOR_PALETTES[quoteData.color];

    // Update side-tab colors
    const tabs = boardRef.current?.querySelectorAll<HTMLDivElement>(".side-tab");
    tabs?.forEach((tab) => {
      const colorVar =
        quoteData.color === "green"
          ? "var(--accent-green)"
          : quoteData.color === "orange"
          ? "var(--accent-orange)"
          : "var(--accent-purple)";
      tab.style.backgroundColor = colorVar;
    });

    // Build target string
    let targetString = "";
    for (let i = 0; i < ROWS; i++) {
      targetString += padCenter(quoteData.lines[i], COLS);
    }

    flapsRef.current.forEach((flap, index) => {
      const targetChar = targetString[index] || " ";
      if (flap.currentChar === targetChar) return;

      const fastPhaseDuration =
        200 + index * 8 + Math.random() * 250;
      animateFlap(flap, targetChar, palette, fastPhaseDuration);
    });

    quoteIndexRef.current =
      (quoteIndexRef.current + 1) % QUOTES.length;
  }, []);

  useEffect(() => {
    if (initializedRef.current || !boardRef.current) return;
    initializedRef.current = true;

    const board = boardRef.current;
    const flaps: FlapRef[] = [];

    // Build the board DOM
    for (let r = 0; r < ROWS; r++) {
      const rowEl = document.createElement("div");
      rowEl.className = "board-row";

      const leftTab = document.createElement("div");
      leftTab.className = "side-tab";
      leftTab.style.backgroundColor = "var(--accent-green)";
      rowEl.appendChild(leftTab);

      for (let c = 0; c < COLS; c++) {
        const flapEl = document.createElement("div");
        flapEl.className = "flap";

        const textEl = document.createElement("div");
        textEl.className = "flap-text";
        textEl.innerText = " ";

        flapEl.appendChild(textEl);
        rowEl.appendChild(flapEl);
        flaps.push({ textEl, parentEl: flapEl, currentChar: " " });
      }

      const rightTab = document.createElement("div");
      rightTab.className = "side-tab";
      rightTab.style.backgroundColor = "var(--accent-green)";
      rowEl.appendChild(rightTab);

      board.appendChild(rowEl);
    }

    flapsRef.current = flaps;

    // Start cycling
    const startTimeout = setTimeout(() => {
      updateBoard();
      const interval = setInterval(updateBoard, CYCLE_INTERVAL);
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(startTimeout);
  }, [updateBoard]);

  return (
    <section className="board-wrapper" id="demo">
      <div className="board" ref={boardRef} />
    </section>
  );
}
