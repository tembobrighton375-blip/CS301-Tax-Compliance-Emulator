import { useState } from "react";
import { motion } from "motion/react";

const GLASS = {
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.18)",
};

export default function ProfessionCard({ profession, onClick, delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      onClick={() => onClick && onClick(profession)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...GLASS,
        borderRadius: "16px",
        padding: "20px",
        cursor: onClick ? "pointer" : "default",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        transition: "all 0.2s ease",
        background: hovered
          ? "rgba(255,255,255,0.16)"
          : "rgba(255,255,255,0.10)",
        borderLeft: `4px solid ${profession.color}`,
      }}
    >
      <div className="flex items-center gap-4">
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: `${profession.color}22`,
            border: `2px solid ${profession.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            flexShrink: 0,
          }}
        >
          {profession.emoji}
        </div>
        <div className="flex-1">
          <div
            style={{
              color: "#F5F7FA",
              fontWeight: 800,
              fontSize: "1.1rem",
              marginBottom: "4px",
            }}
          >
            {profession.name}
          </div>
          <div
            style={{
              color: "#B8C4CF",
              fontSize: "0.82rem",
              lineHeight: 1.4,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {profession.description}
          </div>
        </div>
        <div
          style={{
            color: "#5EAF6E",
            fontWeight: 700,
            fontSize: "0.82rem",
            textAlign: "right",
            flexShrink: 0,
          }}
        >
          <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>START</div>
          <div>K{profession.startingMoney.toLocaleString()}</div>
        </div>
      </div>
    </motion.div>
  );
}
