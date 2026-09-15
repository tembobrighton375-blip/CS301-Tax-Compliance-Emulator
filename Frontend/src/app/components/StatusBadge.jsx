// StatusBadge - Outcome badges (good/neutral/bad) with customizable labels and icons
import { gameStateService } from "../services/gameStateService";

export default function StatusBadge({
  outcome = "good",
  label,
  icon,
  size = "small",
}) {
  const color = gameStateService.getOutcomeColor(outcome);
  const defaultLabel = gameStateService.getOutcomeLabel(outcome);
  const defaultIcon =
    outcome === "good" ? "✓" : outcome === "neutral" ? "⚡" : "✗";

  const displayLabel = label !== undefined ? label : defaultLabel;
  const displayIcon = icon !== undefined ? icon : defaultIcon;

  const isLarge = size === "large";
  const fontSize = isLarge ? "0.8rem" : "0.68rem";
  const padding = isLarge ? "6px 14px" : "3px 8px";
  const borderRadius = isLarge ? "10px" : "6px";

  return (
    <span
      style={{
        color,
        fontSize,
        fontWeight: 700,
        border: `1px solid ${color}55`,
        borderRadius,
        padding,
        flexShrink: 0,
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        background: `${color}11`,
      }}
    >
      <span>{displayIcon}</span>
      {displayLabel}
    </span>
  );
}
