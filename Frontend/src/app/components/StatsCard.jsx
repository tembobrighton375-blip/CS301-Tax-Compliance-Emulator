import { motion } from "motion/react";

const GLASS = {
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.18)",
};

export default function StatsCard({
  label,
  value,
  icon,
  color = "#C9A870",
  positive = null,
  delay = 0,
}) {
  const accentColor =
    positive === null ? color : positive ? "#5EAF6E" : "#D4183D";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{
        ...GLASS,
        borderRadius: "12px",
        padding: "14px",
        textAlign: "center",
        borderTop: `3px solid ${accentColor}`,
      }}
    >
      {icon && (
        <div style={{ fontSize: "1.3rem", marginBottom: "4px" }}>{icon}</div>
      )}
      <div
        style={{
          color: "#7A8EA0",
          fontSize: "0.68rem",
          marginBottom: "4px",
          fontWeight: 700,
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: accentColor,
          fontWeight: 800,
          fontSize: "1.4rem",
        }}
      >
        {value}
      </div>
    </motion.div>
  );
}
