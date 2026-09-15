export function CitySkyline({ compliance }) {
  const maintained = compliance >= 60;

  return (
    <svg viewBox="0 0 800 300" className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={maintained ? "#1a3a5c" : "#2d1a1a"} />
          <stop offset="100%" stopColor={maintained ? "#2d5a8a" : "#4a2020"} />
        </linearGradient>
        <linearGradient id="buildingGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={maintained ? "#C9A870" : "#8B4513"} stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="300" fill="url(#skyGrad)" />

      {/* Stars (if maintained) */}
      {maintained && [
        [50, 30], [120, 20], [200, 45], [300, 15], [400, 35], [500, 22], [620, 40], [700, 18], [760, 50],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.7" />
      ))}

      {/* Moon or hazy sky */}
      {maintained ? (
        <circle cx="680" cy="55" r="22" fill="#F5E6C8" opacity="0.9" />
      ) : (
        <ellipse cx="680" cy="55" rx="28" ry="28" fill="#8B4513" opacity="0.4" />
      )}

      {/* Background mountains / hills */}
      <path d="M0 240 Q100 180 200 220 Q300 160 400 210 Q500 170 600 215 Q700 175 800 200 L800 300 L0 300Z"
        fill={maintained ? "#1e4a6a" : "#3d1515"} opacity="0.6" />

      {/* Building 1 - short office */}
      <rect x="30" y="185" width="70" height="115" fill={maintained ? "#2E5F8A" : "#5a2a2a"} />
      <rect x="30" y="175" width="70" height="15" fill={maintained ? "#3a7ab0" : "#6b3333"} />
      {maintained ? (
        <>
          {[0, 1, 2].map(r => [0, 1, 2].map(c => (
            <rect key={`${r}-${c}`} x={38 + c * 18} y={193 + r * 22} width="10" height="14" fill="#F5D978" opacity="0.8" rx="1" />
          )))}
        </>
      ) : (
        <>
          {[0, 1, 2].map(r => [0, 1, 2].map(c => (
            <rect key={`${r}-${c}`} x={38 + c * 18} y={193 + r * 22} width="10" height="14" fill="#3a1a1a" opacity="0.5" rx="1" />
          )))}
          <line x1="45" y1="190" x2="90" y2="280" stroke="#8B4513" strokeWidth="1" opacity="0.3" />
        </>
      )}

      {/* Building 2 - tall tower */}
      <rect x="120" y="120" width="55" height="180" fill={maintained ? "#1E4D7A" : "#4a2020"} />
      <rect x="120" y="110" width="55" height="15" fill={maintained ? "#2a6499" : "#5d2929"} />
      <rect x="142" y="90" width="11" height="25" fill={maintained ? "#2a6499" : "#5d2929"} />
      {maintained ? (
        [0, 1, 2, 3, 4].map(r => [0, 1].map(c => (
          <rect key={`${r}-${c}`} x={128 + c * 22} y={128 + r * 28} width="12" height="18" fill="#F5D978" opacity="0.75" rx="1" />
        )))
      ) : (
        [0, 1, 2, 3, 4].map(r => [0, 1].map(c => (
          <rect key={`${r}-${c}`} x={128 + c * 22} y={128 + r * 28} width="12" height="18" fill="#2a0a0a" opacity="0.4" rx="1" />
        )))
      )}

      {/* Building 3 - medium */}
      <rect x="195" y="155" width="80" height="145" fill={maintained ? "#245E8F" : "#4d2222"} />
      <rect x="195" y="145" width="80" height="15" fill={maintained ? "#3075b0" : "#613030"} />
      {maintained && <rect x="228" y="125" width="14" height="25" fill="#C9A870" opacity="0.8" />}
      {[0, 1, 2].map(r => [0, 1, 2, 3].map(c => (
        <rect key={`${r}-${c}`} x={203 + c * 18} y={162 + r * 28} width="11" height="16"
          fill={maintained ? "#F5D978" : "#1a0505"} opacity={maintained ? 0.7 : 0.3} rx="1" />
      )))}

      {/* Building 4 - landmark / curved top */}
      <rect x="300" y="100" width="65" height="200" fill={maintained ? "#1A4F82" : "#3d1818"} />
      <ellipse cx="332" cy="100" rx="32" ry="18" fill={maintained ? "#C9A870" : "#6b3333"} />
      {maintained && <rect cx="332" cy="75" x="329" y="75" width="6" height="28" fill="#C9A870" />}
      {[0, 1, 2, 3, 4].map(r => [0, 1, 2].map(c => (
        <rect key={`${r}-${c}`} x={308 + c * 18} y={115 + r * 30} width="11" height="18"
          fill={maintained ? "#B8E0FF" : "#1a0505"} opacity={maintained ? 0.6 : 0.3} rx="1" />
      )))}

      {/* Building 5 - wide gov building */}
      <rect x="390" y="145" width="100" height="155" fill={maintained ? "#2060A0" : "#4a1e1e"} />
      <rect x="390" y="132" width="100" height="18" fill={maintained ? "#2878c0" : "#5e2828"} />
      {[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4].map(c => (
        <rect key={`${r}-${c}`} x={398 + c * 18} y={152 + r * 28} width="11" height="18"
          fill={maintained ? "#F5D978" : "#220808"} opacity={maintained ? 0.8 : 0.25} rx="1" />
      )))}
      {maintained && <rect x="430" y="118" width="40" height="18" fill="#C9A870" opacity="0.9" rx="2" />}

      {/* Building 6 - slim modern */}
      <rect x="515" y="130" width="45" height="170" fill={maintained ? "#1B5080" : "#421a1a"} />
      <rect x="515" y="120" width="45" height="15" fill={maintained ? "#2468a0" : "#551f1f"} />
      {[0, 1, 2, 3].map(r => [0].map(c => (
        <rect key={`${r}-${c}`} x={523} y={138 + r * 32} width="29" height="20"
          fill={maintained ? "#9ED8F8" : "#110303"} opacity={maintained ? 0.5 : 0.2} rx="1" />
      )))}

      {/* Building 7 - short shop row */}
      <rect x="585" y="190" width="60" height="110" fill={maintained ? "#3070AA" : "#4e2020"} />
      <rect x="585" y="180" width="60" height="15" fill={maintained ? "#3888c8" : "#612828"} />
      {maintained && (
        <>
          <rect x="594" y="200" width="16" height="20" fill="#5EAF6E" opacity="0.8" rx="1" />
          <rect x="618" y="200" width="16" height="20" fill="#F5D978" opacity="0.8" rx="1" />
          <rect x="594" y="235" width="40" height="25" fill="#1a3a5c" rx="1" />
        </>
      )}

      {/* Building 8 - tall with antenna */}
      <rect x="670" y="110" width="70" height="190" fill={maintained ? "#1C5285" : "#3d1616"} />
      <rect x="670" y="100" width="70" height="15" fill={maintained ? "#2868a2" : "#4f2020"} />
      <rect x="702" y="68" width="6" height="35" fill={maintained ? "#C9A870" : "#6b3333"} />
      {maintained && <circle cx="705" cy="68" r="4" fill="#FF4444" opacity="0.9" />}
      {[0, 1, 2, 3, 4].map(r => [0, 1, 2].map(c => (
        <rect key={`${r}-${c}`} x={678 + c * 20} y={118 + r * 30} width="13" height="20"
          fill={maintained ? "#F5D978" : "#110303"} opacity={maintained ? 0.75 : 0.2} rx="1" />
      )))}

      {/* Ground */}
      <rect x="0" y="290" width="800" height="10" fill={maintained ? "#0a2540" : "#1a0808"} />

      {/* Street lights */}
      {maintained && [80, 180, 350, 480, 640, 760].map((x, i) => (
        <g key={i}>
          <rect x={x} y="255" width="3" height="35" fill="#8899AA" />
          <ellipse cx={x + 1} cy="255" rx="8" ry="4" fill="#F5D978" opacity="0.6" />
        </g>
      ))}

      {/* Compliance status label */}
      <rect x="10" y="10" width={maintained ? 160 : 170} height="28" rx="6"
        fill={maintained ? "#5EAF6E" : "#D4183D"} opacity="0.9" />
      <text x="20" y="29" fontSize="13" fill="white" fontWeight="700" fontFamily="Nunito, sans-serif">
        {maintained ? "✓ City Thriving" : "⚠ City Struggling"}
      </text>
    </svg>
  );
}
