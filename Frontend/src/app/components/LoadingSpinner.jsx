import { motion } from "motion/react";

export default function LoadingSpinner({
  size = 40,
  color = "#C9A870",
  overlay = false,
  text = "",
  textColor = "#B8C4CF",
}) {
  const spinner = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: text ? "14px" : "0",
      }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          border: `${Math.max(3, Math.round(size / 10))}px solid rgba(201,168,112,0.2)`,
          borderTopColor: color,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {text && (
        <div
          style={{
            color: textColor,
            fontSize: "0.85rem",
            fontWeight: 700,
            fontFamily: "Nunito, sans-serif",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );

  if (!overlay) return spinner;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {spinner}
    </div>
  );
}
