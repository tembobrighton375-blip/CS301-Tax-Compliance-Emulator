import { useState } from "react";
import { motion } from "motion/react";
import StatusBadge from "./StatusBadge";
import { gameStateService } from "../services/gameStateService";

export default function ChoiceButton({ choice, onSelect, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const color = gameStateService.getOutcomeColor(choice.outcome);

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.08 }}
      onClick={() => onSelect && onSelect(choice)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${color}33` : `${color}1A`,
        border: `2px solid ${color}${hovered ? "88" : "44"}`,
        borderRadius: "14px",
        padding: "16px 18px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.2s ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        width: "100%",
        fontFamily: "inherit",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div
            style={{
              color: "#F5F7FA",
              fontWeight: 700,
              fontSize: "0.95rem",
              marginBottom: "4px",
            }}
          >
            {choice.text}
          </div>
          {choice.subtext && (
            <div
              style={{
                color: "#B8C4CF",
                fontSize: "0.8rem",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {choice.subtext}
            </div>
          )}
        </div>
        <StatusBadge outcome={choice.outcome} />
      </div>
    </motion.button>
  );
}
