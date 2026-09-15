export function ProgressBar({ value, max = 100, label, color = "#5EAF6E" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
          <span style={{ fontSize: "0.75rem", color: "#B8C4CF", fontWeight: 500 }}>{label}</span>
          <span style={{ fontSize: "0.75rem", color: "#F5F7FA", fontWeight: 600 }}>{value}/{max}</span>
        </div>
      )}
      <div style={{ height: "8px", background: "rgba(255,255,255,0.15)", borderRadius: "999px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            borderRadius: "999px",
            transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}
