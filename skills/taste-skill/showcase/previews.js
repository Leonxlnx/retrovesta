// Visual Preview Generators
// Each function returns HTML string for the preview thumbnail

function mkPreview(type, cfg) {
  const P = {
    grad: c => `<div style="width:100%;height:100%;background:${c}"></div>`,

    gtext: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><span style="font-family:'Instrument Serif',serif;font-size:18px;font-weight:400;background:linear-gradient(90deg,#a855f7,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${c}</span></div>`,

    solid: c => `<div style="width:100%;height:100%;background:${c};display:flex;align-items:center;justify-content:center"><span style="font-size:9px;font-family:monospace;color:${isLight(c)?'#333':'#aaa'}">${c}</span></div>`,

    swatch: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="width:36px;height:36px;border-radius:8px;background:${c};box-shadow:0 2px 8px ${c}44"></div><span style="margin-left:8px;font-family:monospace;font-size:10px;color:#666">${c}</span></div>`,

    neon: () => `<div style="width:100%;height:100%;background:#0a0a0a;display:flex;align-items:center;justify-content:center;gap:6px"><div style="width:18px;height:18px;border-radius:50%;background:#00fff7;box-shadow:0 0 8px #00fff7"></div><div style="width:18px;height:18px;border-radius:50%;background:#ff2d95;box-shadow:0 0 8px #ff2d95"></div><div style="width:18px;height:18px;border-radius:50%;background:#39ff14;box-shadow:0 0 8px #39ff14"></div></div>`,

    palette: t => {
      if (t==='timid') return `<div style="width:100%;height:100%;display:flex"><div style="flex:1;background:#93c5fd"></div><div style="flex:1;background:#a5b4fc"></div><div style="flex:1;background:#c4b5fd"></div><div style="flex:1;background:#86efac"></div><div style="flex:1;background:#fca5a5"></div></div>`;
      if (t==='tw-only') return `<div style="width:100%;height:100%;display:flex"><div style="flex:1;background:#6366f1"></div><div style="flex:1;background:#3b82f6"></div><div style="flex:1;background:#f3f4f6"></div><div style="flex:1;background:#e5e7eb"></div><div style="flex:1;background:#9ca3af"></div></div>`;
      return `<div style="width:100%;height:100%;display:flex"><div style="flex:1;background:#6366f1"></div><div style="flex:1;background:#3b82f6"></div><div style="flex:1;background:#f3f4f6"></div><div style="flex:1;background:#111827"></div><div style="flex:1;background:#9ca3af"></div></div>`;
    },

    aurora: () => `<div style="width:100%;height:100%;background:#0f172a;position:relative;overflow:hidden"><div style="position:absolute;width:60px;height:60px;border-radius:50%;background:#a855f7;filter:blur(20px);opacity:.6;top:-10px;left:10px"></div><div style="position:absolute;width:50px;height:50px;border-radius:50%;background:#3b82f6;filter:blur(18px);opacity:.5;bottom:-10px;right:10px"></div><div style="position:absolute;width:40px;height:40px;border-radius:50%;background:#ec4899;filter:blur(16px);opacity:.4;top:10px;right:30px"></div></div>`,

    mesh: () => `<div style="width:100%;height:100%;background:linear-gradient(135deg,rgba(99,102,241,.15) 0%,rgba(168,85,247,.1) 50%,rgba(59,130,246,.15) 100%)"></div>`,

    fillbdr: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="padding:6px 14px;border-radius:8px;background:${c}15;border:1px solid ${c}40;font-size:10px;color:${c};font-family:var(--f-b)">Card</div></div>`,

    pastel: () => `<div style="width:100%;height:100%;background:linear-gradient(135deg,#fce7f3,#dbeafe,#e0e7ff);display:flex;align-items:center;justify-content:center"><div style="background:rgba(255,255,255,.4);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.5);border-radius:8px;padding:6px 12px;font-size:9px;color:#666">Card</div></div>`,

    nosem: () => `<div style="width:100%;height:100%;display:flex;gap:3px;padding:4px;background:#faf9f7"><div style="flex:1;border-radius:4px;background:#a855f7"></div><div style="flex:1;border-radius:4px;background:#3b82f6"></div><div style="flex:1;border-radius:4px;background:#ec4899"></div><div style="flex:1;border-radius:4px;background:#10b981"></div></div>`,

    overlay: () => `<div style="width:100%;height:100%;background:linear-gradient(135deg,rgba(99,102,241,.6),rgba(168,85,247,.4)),url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%2256%22><rect fill=%22%23888%22 width=%22160%22 height=%2256%22/></svg>');background-size:cover"></div>`,

    binary: () => `<div style="width:100%;height:100%;display:flex"><div style="flex:1;background:#fff;display:flex;align-items:center;justify-content:center;font-size:8px;color:#999;font-family:monospace">Light</div><div style="flex:1;background:#111827;display:flex;align-items:center;justify-content:center;font-size:8px;color:#666;font-family:monospace">Dark</div></div>`,

    shadow: () => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="width:50px;height:30px;background:#fff;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.1)"></div><div style="width:50px;height:30px;background:#fff;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.1);margin-left:8px"></div></div>`,

    font: f => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><span style="font-family:'${f}',sans-serif;font-size:16px;color:#1a1a1a;letter-spacing:-.02em">Aa Bb Cc</span></div>`,

    fontpair: t => {
      if (t==='single') return `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#faf9f7;gap:2px"><span style="font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:#1a1a1a">Heading</span><span style="font-family:Inter,sans-serif;font-size:9px;color:#666">body text here</span></div>`;
      return `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#faf9f7;gap:2px"><span style="font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:#1a1a1a">Title</span><span style="font-family:Inter,sans-serif;font-size:9px;color:#666">also Inter</span></div>`;
    },

    weight: t => {
      if (t==='binary') return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;gap:8px;background:#faf9f7"><span style="font-family:var(--f-b);font-weight:700;font-size:12px">Bold</span><span style="font-family:var(--f-b);font-weight:500;font-size:12px;color:#888">Medium</span></div>`;
      return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><span style="font-family:var(--f-b);font-weight:${t};font-size:14px">Semi Bold Only</span></div>`;
    },

    scale: t => {
      if (t==='conservative') return `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0 12px;background:#faf9f7;gap:1px"><span style="font-size:14px;font-weight:600">H1 24px</span><span style="font-size:11px;font-weight:600;color:#888">H2 18px</span><span style="font-size:9px;color:#aaa">H3 14px</span></div>`;
      return `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0 12px;background:#faf9f7;gap:1px"><span style="font-size:13px;font-weight:600">text-2xl</span><span style="font-size:10px;color:#888">text-lg</span><span style="font-size:8px;color:#aaa">text-sm</span></div>`;
    },

    upper: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#666">${c}</span></div>`,

    code: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e2e;padding:4px 8px"><code style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#a6e3a1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%">${c}</code></div>`,

    text: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7;padding:4px 8px"><span style="font-size:10px;color:#444;text-align:center;line-height:1.3;font-style:italic;overflow:hidden;max-height:100%">${c}</span></div>`,

    btn: t => {
      if (t==='pill') return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="padding:5px 16px;border-radius:100px;background:linear-gradient(90deg,#a855f7,#3b82f6);color:#fff;font-size:10px;font-weight:500">Get Started</div></div>`;
      if (t==='darker') return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;gap:6px;background:#faf9f7"><div style="padding:4px 10px;border-radius:6px;background:#3b82f6;color:#fff;font-size:9px">Normal</div><div style="padding:4px 10px;border-radius:6px;background:#2563eb;color:#fff;font-size:9px">Hover</div></div>`;
      if (t==='glow') return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="padding:5px 14px;border-radius:8px;background:#6366f1;color:#fff;font-size:10px;box-shadow:0 0 16px rgba(99,102,241,.5)">Button</div></div>`;
      if (t==='generic-cta') return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;gap:4px;background:#faf9f7"><div style="padding:4px 10px;border-radius:100px;background:#6366f1;color:#fff;font-size:9px">Get Started</div><div style="padding:4px 10px;border-radius:100px;border:1px solid #e5e7eb;font-size:9px;color:#666">Learn More</div></div>`;
      return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="padding:5px 14px;border-radius:100px;background:linear-gradient(90deg,#a855f7,#3b82f6);color:#fff;font-size:10px">Button</div></div>`;
    },

    glass: () => `<div style="width:100%;height:100%;background:linear-gradient(135deg,#a855f7,#3b82f6);display:flex;align-items:center;justify-content:center"><div style="background:rgba(255,255,255,.15);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:6px 14px;font-size:9px;color:#fff">Glassmorphism</div></div>`,

    css: c => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e2e;padding:4px"><code style="font-family:'JetBrains Mono',monospace;font-size:8px;color:#89b4fa;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c}</code></div>`,

    layout: t => mkLayout(t),
    comp: t => mkComp(t),
    anim: t => mkAnim(t),
    img: t => mkImg(t),
  };

  const fn = P[type];
  return fn ? fn(cfg) : `<div style="width:100%;height:100%;background:#f3f2ef;display:flex;align-items:center;justify-content:center"><span style="font-size:9px;color:#999">—</span></div>`;
}

function isLight(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return (r*299+g*587+b*114)/1000 > 128;
}

function mkLayout(t) {
  const box = (w,h,bg='#e5e7eb',r='3px') => `<div style="width:${w};height:${h};background:${bg};border-radius:${r}"></div>`;
  const wrap = inner => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7;padding:4px">${inner}</div>`;
  const mini = inner => `<div style="width:100%;height:100%;background:#fff;border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;display:flex;flex-direction:column;padding:3px;gap:2px">${inner}</div>`;

  const L = {
    'hero-lr': mini(`<div style="display:flex;gap:3px;padding:2px;flex:1"><div style="flex:1;display:flex;flex-direction:column;gap:2px;justify-content:center">${box('80%','4px','#333')}${box('60%','3px','#ccc')}${box('30%','8px','#6366f1','100px')}</div><div style="width:35%;background:#e5e7eb;border-radius:3px"></div></div>`),
    '3col': mini(`<div style="height:12px;background:#333;border-radius:2px;margin-bottom:2px"></div><div style="display:flex;gap:2px;flex:1"><div style="flex:1;background:#f3f4f6;border-radius:2px;border:1px solid #e5e7eb"></div><div style="flex:1;background:#f3f4f6;border-radius:2px;border:1px solid #e5e7eb"></div><div style="flex:1;background:#f3f4f6;border-radius:2px;border:1px solid #e5e7eb"></div></div>`),
    sections: mini(`<div style="display:flex;flex-direction:column;gap:1px;flex:1"><div style="height:14px;background:#6366f1;border-radius:2px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:5px">HERO</div><div style="display:flex;gap:1px;height:8px"><div style="flex:1;background:#e5e7eb;border-radius:1px"></div><div style="flex:1;background:#e5e7eb;border-radius:1px"></div><div style="flex:1;background:#e5e7eb;border-radius:1px"></div></div><div style="height:6px;background:#f3f4f6;border-radius:1px"></div><div style="height:6px;background:#f3f4f6;border-radius:1px"></div><div style="height:4px;background:#333;border-radius:1px"></div></div>`),
    'center-cta': mini(`<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">${box('50%','4px','#333')}${box('70%','3px','#ccc')}<div style="padding:2px 8px;border-radius:100px;background:linear-gradient(90deg,#a855f7,#3b82f6);margin-top:2px"><span style="font-size:5px;color:#fff">Get Started</span></div></div>`),
    symmetry: wrap(`<div style="display:flex;gap:4px"><div style="width:40px;height:30px;background:#e5e7eb;border-radius:3px"></div><div style="width:40px;height:30px;background:#e5e7eb;border-radius:3px"></div><div style="width:40px;height:30px;background:#e5e7eb;border-radius:3px"></div></div>`),
    sidebar: `<div style="width:100%;height:100%;display:flex;background:#fff"><div style="width:30%;background:#f8f9fa;border-right:1px solid #e5e7eb;padding:4px"><div style="height:3px;background:#333;border-radius:1px;margin-bottom:4px;width:60%"></div><div style="height:2px;background:#ddd;border-radius:1px;margin-bottom:2px"></div><div style="height:2px;background:#6366f1;border-radius:1px;margin-bottom:2px"></div><div style="height:2px;background:#ddd;border-radius:1px;margin-bottom:2px"></div></div><div style="flex:1;padding:4px"><div style="height:3px;background:#333;border-radius:1px;margin-bottom:3px;width:40%"></div><div style="display:flex;gap:2px"><div style="flex:1;height:16px;background:#f3f4f6;border-radius:2px"></div><div style="flex:1;height:16px;background:#f3f4f6;border-radius:2px"></div></div></div></div>`,
    stacked: wrap(`<div style="display:flex;flex-direction:column;gap:2px"><div style="width:80px;height:14px;background:#fff;border:1px solid #e5e7eb;border-radius:3px"></div><div style="width:80px;height:14px;background:#fff;border:1px solid #e5e7eb;border-radius:3px"></div><div style="width:80px;height:14px;background:#fff;border:1px solid #e5e7eb;border-radius:3px"></div></div>`),
    logos: mini(`<div style="flex:1;display:flex;flex-direction:column;gap:2px"><div style="height:16px;background:#6366f1;border-radius:2px"></div><div style="display:flex;gap:4px;align-items:center;justify-content:center;height:10px"><div style="width:14px;height:6px;background:#d1d5db;border-radius:1px"></div><div style="width:14px;height:6px;background:#d1d5db;border-radius:1px"></div><div style="width:14px;height:6px;background:#d1d5db;border-radius:1px"></div><div style="width:14px;height:6px;background:#d1d5db;border-radius:1px"></div></div></div>`),
    carousel: wrap(`<div style="display:flex;align-items:center;gap:2px"><span style="font-size:10px;color:#ccc">&lsaquo;</span><div style="width:60px;height:34px;background:#fff;border:1px solid #e5e7eb;border-radius:3px"></div><span style="font-size:10px;color:#ccc">&rsaquo;</span></div>`),
    nested: wrap(`<div style="padding:4px;background:#fff;border:1px solid #e5e7eb;border-radius:4px"><div style="padding:3px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:3px"><div style="padding:2px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:2px;font-size:6px;color:#999;text-align:center">Nested</div></div></div>`),
    metric: wrap(`<div style="background:#fff;border:1px solid #e5e7eb;border-radius:4px;padding:4px 8px;text-align:center"><div style="font-size:16px;font-weight:700;color:#6366f1">42k</div><div style="font-size:6px;color:#999">Active Users</div></div>`),
    bento: wrap(`<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;width:90px"><div style="height:18px;background:#f3f4f6;border-radius:2px;grid-column:span 2"></div><div style="height:14px;background:#f3f4f6;border-radius:2px"></div><div style="height:14px;background:#f3f4f6;border-radius:2px"></div></div>`),
    'hero-big': mini(`<div style="flex:3;background:linear-gradient(135deg,#6366f1,#3b82f6);border-radius:2px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:5px">HUGE HERO</div><div style="flex:1;background:#f3f4f6;border-radius:2px"></div>`),
    'float-cards': `<div style="width:100%;height:100%;background:linear-gradient(135deg,#6366f1,#3b82f6);display:flex;align-items:center;justify-content:center;gap:4px"><div style="width:30px;height:24px;background:#fff;border-radius:3px;box-shadow:0 2px 4px rgba(0,0,0,.15)"></div><div style="width:30px;height:24px;background:#fff;border-radius:3px;box-shadow:0 2px 4px rgba(0,0,0,.15)"></div><div style="width:30px;height:24px;background:#fff;border-radius:3px;box-shadow:0 2px 4px rgba(0,0,0,.15)"></div></div>`,
    'nested-box': wrap(`<div style="background:#f3f4f6;border-radius:6px;padding:4px;display:flex;align-items:center;justify-content:center"><div style="background:#e5e7eb;border-radius:4px;padding:3px"><div style="width:12px;height:12px;background:#6366f1;border-radius:2px"></div></div></div>`),
    pricing: wrap(`<div style="display:flex;gap:2px;align-items:end"><div style="width:28px;height:28px;background:#fff;border:1px solid #e5e7eb;border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center"><span style="font-size:6px;font-weight:700">$9</span><span style="font-size:4px;color:#999">Free</span></div><div style="width:28px;height:34px;background:#6366f1;border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center"><span style="font-size:6px;font-weight:700;color:#fff">$29</span><span style="font-size:4px;color:#c7d2fe">Pro</span></div><div style="width:28px;height:28px;background:#fff;border:1px solid #e5e7eb;border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center"><span style="font-size:6px;font-weight:700">$99</span><span style="font-size:4px;color:#999">Ent</span></div></div>`),
    'dash-hero': mini(`<div style="flex:1;display:flex;align-items:center;justify-content:center"><div style="width:90%;height:80%;background:#1e293b;border-radius:3px;padding:2px;display:flex;gap:1px"><div style="width:25%;background:#334155;border-radius:2px"></div><div style="flex:1;display:flex;flex-direction:column;gap:1px"><div style="height:40%;background:#334155;border-radius:2px"></div><div style="flex:1;background:#334155;border-radius:2px"></div></div></div></div>`),
    'broken-mobile': `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7"><div style="width:24px;height:40px;border:1px solid #e5e7eb;border-radius:3px;overflow:hidden;background:#fff"><div style="width:60px;height:8px;background:#6366f1;border-radius:1px;margin:2px"></div><div style="display:flex;gap:1px;padding:0 2px"><div style="width:20px;height:10px;background:#f3f4f6;border-radius:1px"></div><div style="width:20px;height:10px;background:#f3f4f6;border-radius:1px"></div></div></div></div>`,
    cold: wrap(`<div style="display:flex;gap:4px"><div style="width:36px;height:28px;background:#f3f4f6;border-radius:3px"></div><div style="width:36px;height:28px;background:#f3f4f6;border-radius:3px"></div></div>`),
    repeat: wrap(`<div style="display:flex;flex-direction:column;gap:2px;align-items:center"><div style="font-size:6px;color:#666">We innovate solutions</div><div style="font-size:6px;color:#666">We create solutions</div><div style="font-size:6px;color:#666">We build solutions</div></div>`),
    whitespace: wrap(`<div style="width:100px;height:40px;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:#ccc">much empty</span></div>`),
    'same-hf': mini(`<div style="height:6px;background:#333;border-radius:1px;display:flex;align-items:center;padding:0 2px"><span style="font-size:3px;color:#fff">NAV</span></div><div style="flex:1;background:#f9fafb"></div><div style="height:6px;background:#333;border-radius:1px;display:flex;align-items:center;padding:0 2px"><span style="font-size:3px;color:#fff">NAV</span></div>`),
  };
  return L[t] || wrap(box('60px','30px'));
}

function mkComp(t) {
  const wrap = inner => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7;padding:4px">${inner}</div>`;
  const C = {
    shadcn: wrap(`<div style="display:flex;gap:3px"><div style="padding:3px 8px;border-radius:4px;background:#18181b;color:#fff;font-size:8px">Button</div><div style="padding:3px 8px;border-radius:4px;border:1px solid #e4e4e7;font-size:8px;color:#71717a">Input</div></div>`),
    lucide: wrap(`<div style="display:flex;gap:6px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>`),
    toggle: wrap(`<div style="width:28px;height:16px;border-radius:8px;background:#e5e7eb;position:relative"><div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;top:2px;left:2px;box-shadow:0 1px 2px rgba(0,0,0,.2)"></div></div>`),
    'feat-card': wrap(`<div style="background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:4px 6px;width:70px"><div style="width:12px;height:12px;background:#ede9fe;border-radius:3px;margin-bottom:3px;display:flex;align-items:center;justify-content:center"><div style="width:6px;height:6px;background:#6366f1;border-radius:1px"></div></div><div style="height:3px;background:#333;border-radius:1px;width:60%;margin-bottom:2px"></div><div style="height:2px;background:#d1d5db;border-radius:1px;width:90%"></div></div>`),
    badge: wrap(`<div style="display:flex;gap:2px;align-items:end"><div style="width:24px;height:28px;border:1px solid #e5e7eb;border-radius:3px;background:#fff"></div><div style="width:24px;height:32px;border:2px solid #6366f1;border-radius:3px;background:#fff;position:relative"><div style="position:absolute;top:-4px;left:50%;transform:translateX(-50%);background:#6366f1;color:#fff;font-size:4px;padding:1px 3px;border-radius:100px;white-space:nowrap">Popular</div></div><div style="width:24px;height:28px;border:1px solid #e5e7eb;border-radius:3px;background:#fff"></div></div>`),
    form: wrap(`<div style="background:#fff;border:1px solid #e5e7eb;border-radius:4px;padding:4px;width:80px"><div style="height:10px;border:1px solid #e5e7eb;border-radius:2px;margin-bottom:3px"></div><div style="height:10px;border:1px solid #e5e7eb;border-radius:2px;margin-bottom:3px"></div><div style="height:10px;background:#6366f1;border-radius:2px;display:flex;align-items:center;justify-content:center"><span style="font-size:5px;color:#fff">Submit</span></div></div>`),
    toast: wrap(`<div style="background:#18181b;border-radius:4px;padding:4px 8px;box-shadow:0 4px 12px rgba(0,0,0,.15)"><span style="font-size:7px;color:#fff">Event created</span></div>`),
    navbar: `<div style="width:100%;height:100%;background:#fff;padding:4px 8px;display:flex;align-items:center;border-bottom:1px solid #e5e7eb"><div style="width:16px;height:8px;background:#333;border-radius:2px"></div><div style="flex:1;display:flex;justify-content:center;gap:6px"><span style="font-size:6px;color:#666">Home</span><span style="font-size:6px;color:#666">About</span><span style="font-size:6px;color:#666">Blog</span></div><div style="padding:2px 6px;background:#6366f1;border-radius:100px;font-size:5px;color:#fff">CTA</div></div>`,
    cookie: wrap(`<div style="background:#fff;border:1px solid #e5e7eb;border-radius:4px;padding:3px 6px;box-shadow:0 -2px 8px rgba(0,0,0,.05);display:flex;align-items:center;gap:4px"><span style="font-size:6px;color:#666">We use cookies</span><div style="padding:1px 4px;background:#6366f1;border-radius:2px;font-size:5px;color:#fff">OK</div></div>`),
    stars: wrap(`<div style="display:flex;gap:1px">${'<svg width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(5)}</div>`),
    'pill-badge': wrap(`<div style="padding:2px 8px;border-radius:100px;background:#ede9fe;font-size:8px;color:#7c3aed;font-weight:500">New</div>`),
    heroicons: wrap(`<div style="display:flex;gap:4px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>`),
    'no-load': wrap(`<div style="background:#fff;border:1px solid #e5e7eb;border-radius:4px;padding:4px;width:70px"><div style="height:8px;border:1px solid #e5e7eb;border-radius:2px;margin-bottom:2px"></div><div style="height:10px;background:#6366f1;border-radius:2px;display:flex;align-items:center;justify-content:center"><span style="font-size:5px;color:#fff">Submit</span></div></div>`),
    skeleton: wrap(`<div style="width:80px;display:flex;flex-direction:column;gap:3px"><div style="height:4px;background:#e5e7eb;border-radius:2px;width:60%"></div><div style="height:3px;background:#e5e7eb;border-radius:2px;width:100%"></div><div style="height:3px;background:#e5e7eb;border-radius:2px;width:80%"></div></div>`),
    'no-favicon': wrap(`<div style="display:flex;align-items:center;gap:3px;background:#f3f4f6;border-radius:3px;padding:3px 6px"><div style="width:10px;height:10px;background:#e5e7eb;border-radius:2px"></div><span style="font-size:7px;color:#999">My App</span></div>`),
    'dead-form': wrap(`<div style="background:#fff;border:1px solid #e5e7eb;border-radius:4px;padding:3px;width:70px;position:relative"><div style="height:6px;border:1px solid #e5e7eb;border-radius:2px;margin-bottom:2px"></div><div style="height:8px;background:#d1d5db;border-radius:2px;display:flex;align-items:center;justify-content:center"><span style="font-size:5px;color:#fff">Send</span></div><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-45deg);width:60px;height:1px;background:#c0392b"></div></div>`),
  };
  return C[t] || wrap(`<span style="font-size:8px;color:#999">${t}</span>`);
}

function mkAnim(t) {
  const wrap = inner => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7">${inner}</div>`;
  const A = {
    fade: wrap(`<div style="display:flex;gap:3px;align-items:center"><div style="width:20px;height:20px;background:#e5e7eb;border-radius:3px;opacity:1"></div><div style="width:20px;height:20px;background:#e5e7eb;border-radius:3px;opacity:.5"></div><div style="width:20px;height:20px;background:#e5e7eb;border-radius:3px;opacity:.2"></div></div>`),
    scale: wrap(`<div style="display:flex;gap:4px;align-items:center"><div style="width:20px;height:20px;background:#e5e7eb;border-radius:3px"></div><div style="width:22px;height:22px;background:#d1d5db;border-radius:3px;box-shadow:0 2px 4px rgba(0,0,0,.1)"></div></div>`),
    stagger: wrap(`<div style="display:flex;gap:2px;align-items:end"><div style="width:14px;height:20px;background:#e5e7eb;border-radius:2px;opacity:1"></div><div style="width:14px;height:20px;background:#e5e7eb;border-radius:2px;opacity:.7"></div><div style="width:14px;height:20px;background:#e5e7eb;border-radius:2px;opacity:.4"></div><div style="width:14px;height:20px;background:#e5e7eb;border-radius:2px;opacity:.15"></div></div>`),
    entrance: wrap(`<div style="display:flex;flex-direction:column;gap:2px;align-items:center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2"><path d="M12 5v14M5 12l7-7 7 7"/></svg><span style="font-size:6px;color:#999">entrance only</span></div>`),
    lift: wrap(`<div style="display:flex;gap:6px;align-items:end"><div style="width:24px;height:20px;background:#fff;border:1px solid #e5e7eb;border-radius:3px"></div><div style="width:24px;height:20px;background:#fff;border-radius:3px;box-shadow:0 4px 8px rgba(0,0,0,.12);transform:translateY(-2px)"></div></div>`),
    pulse: wrap(`<div style="width:60px;height:12px;background:#e5e7eb;border-radius:3px;animation:pulse 1.5s ease-in-out infinite"><style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}</style></div>`),
    ping: wrap(`<div style="position:relative;width:10px;height:10px"><div style="width:10px;height:10px;background:#ef4444;border-radius:50%"></div><div style="position:absolute;top:0;left:0;width:10px;height:10px;border-radius:50%;background:#ef4444;animation:ping 1s ease-out infinite;opacity:0"><style>@keyframes ping{0%{transform:scale(1);opacity:.75}100%{transform:scale(2);opacity:0}}</style></div></div>`),
    bounce: wrap(`<div style="display:flex;gap:3px"><div style="width:6px;height:6px;background:#6366f1;border-radius:50%;animation:bnc .6s ease-in-out infinite alternate"></div><div style="width:6px;height:6px;background:#6366f1;border-radius:50%;animation:bnc .6s ease-in-out infinite alternate .15s"></div><div style="width:6px;height:6px;background:#6366f1;border-radius:50%;animation:bnc .6s ease-in-out infinite alternate .3s"></div><style>@keyframes bnc{to{transform:translateY(-6px)}}</style></div>`),
    'scroll-fade': wrap(`<div style="display:flex;flex-direction:column;gap:2px;align-items:center"><div style="width:40px;height:8px;background:#e5e7eb;border-radius:2px;opacity:1"></div><div style="width:40px;height:8px;background:#e5e7eb;border-radius:2px;opacity:.5"></div><div style="width:40px;height:8px;background:#e5e7eb;border-radius:2px;opacity:.15"></div></div>`),
    snap: wrap(`<div style="padding:3px 10px;background:#6366f1;border-radius:3px;font-size:7px;color:#fff">Click</div>`),
    generic: wrap(`<span style="font-size:8px;color:#999">no personality</span>`),
    static: wrap(`<div style="width:50px;height:28px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:3px;display:flex;align-items:center;justify-content:center"><span style="font-size:6px;color:#bbb">static</span></div>`),
  };
  return A[t] || wrap(`<span style="font-size:8px;color:#999">${t}</span>`);
}

function mkImg(t) {
  const wrap = inner => `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#faf9f7">${inner}</div>`;
  const I = {
    orb: `<div style="width:100%;height:100%;background:linear-gradient(135deg,#0f172a,#1e293b);display:flex;align-items:center;justify-content:center"><div style="width:20px;height:24px;background:linear-gradient(180deg,#fcd34d,#f97316);border-radius:50% 50% 45% 45%;margin-right:4px"></div><div style="width:16px;height:16px;border-radius:50%;background:radial-gradient(circle,#a855f7,#6366f1);box-shadow:0 0 12px rgba(168,85,247,.6)"></div></div>`,
    'float-dash': wrap(`<div style="width:50px;height:30px;background:#1e293b;border-radius:3px;box-shadow:4px 4px 0 #334155;padding:2px"><div style="height:40%;background:#334155;border-radius:1px;margin-bottom:1px"></div><div style="display:flex;gap:1px"><div style="flex:1;height:10px;background:#334155;border-radius:1px"></div><div style="flex:1;height:10px;background:#334155;border-radius:1px"></div></div></div>`),
    'saas-char': wrap(`<div style="display:flex;flex-direction:column;align-items:center"><div style="width:14px;height:14px;background:#93c5fd;border-radius:50%"></div><div style="width:18px;height:10px;background:#bfdbfe;border-radius:0 0 6px 6px;margin-top:-2px"></div></div>`),
    rocket: wrap(`<div style="font-size:18px;transform:rotate(-45deg)">&#9650;</div>`),
    blob: wrap(`<div style="width:24px;height:24px;border-radius:60% 40% 50% 50%;background:linear-gradient(135deg,#a855f7,#6366f1)"></div>`),
    stock: `<div style="width:100%;height:100%;background:linear-gradient(135deg,#d1d5db,#e5e7eb);display:flex;align-items:center;justify-content:center"><svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>`,
    uncanny: wrap(`<div style="width:40px;height:30px;background:linear-gradient(135deg,#f0f0f0,#e0e0e0);border-radius:3px;display:flex;align-items:center;justify-content:center"><span style="font-size:6px;color:#bbb">too smooth</span></div>`),
    unsplash: `<div style="width:100%;height:100%;background:linear-gradient(135deg,#374151,#4b5563);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:#9ca3af">unsplash.com/...</span></div>`,
    mockup: wrap(`<div style="width:30px;height:20px;border:2px solid #d1d5db;border-radius:2px;background:#fff"><div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><span style="font-size:4px;color:#ddd">empty</span></div></div>`),
    sparkle: wrap(`<span style="font-size:14px;color:#fbbf24">&#10022;</span>`),
    'logo-swap': wrap(`<div style="display:flex;gap:2px"><div style="width:30px;height:22px;background:#fff;border:1px solid #e5e7eb;border-radius:3px;display:flex;align-items:center;justify-content:center"><span style="font-size:5px;color:#333;font-weight:700">A</span></div><span style="font-size:8px;color:#ccc">=</span><div style="width:30px;height:22px;background:#fff;border:1px solid #e5e7eb;border-radius:3px;display:flex;align-items:center;justify-content:center"><span style="font-size:5px;color:#333;font-weight:700">B</span></div></div>`),
    sameness: `<div style="width:100%;height:100%;display:flex;gap:1px"><div style="flex:1;background:linear-gradient(180deg,#6366f1 30%,#f9fafb 30%);border-radius:2px"></div><div style="flex:1;background:linear-gradient(180deg,#6366f1 30%,#f9fafb 30%);border-radius:2px"></div><div style="flex:1;background:linear-gradient(180deg,#6366f1 30%,#f9fafb 30%);border-radius:2px"></div></div>`,
    'uncanny-prod': wrap(`<div style="width:50px;height:30px;background:#fff;border:1px solid #e5e7eb;border-radius:4px;padding:2px"><div style="height:40%;background:#6366f1;border-radius:2px;margin-bottom:1px"></div><div style="display:flex;gap:1px"><div style="flex:1;height:8px;background:#f3f4f6;border-radius:1px"></div><div style="flex:1;height:8px;background:#f3f4f6;border-radius:1px"></div><div style="flex:1;height:8px;background:#f3f4f6;border-radius:1px"></div></div></div>`),
  };
  return I[t] || wrap(`<span style="font-size:8px;color:#999">${t}</span>`);
}
