import { motion } from "motion/react";
import StatsCard from "../StatsCard";
import { AppShell } from "../export_all_components";

function IconBuilding({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function IconTrophy({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M17 5h3a2 2 0 0 1-2 4h-1" />
      <path d="M7 5H4a2 2 0 0 0 2 4h1" />
    </svg>
  );
}

function IconCheckCircle({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5.5" />
    </svg>
  );
}

function IconAlertTriangle({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l10 18H2z" />
      <path d="M12 10v4" />
      <path d="M12 17.5v.01" />
    </svg>
  );
}

function IconAlertOctagon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z" />
      <path d="M12 8v4" />
      <path d="M12 15.5v.01" />
    </svg>
  );
}

function IconRefresh({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" />
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" />
      <path d="M3 16v4h4" />
      <path d="M21 8V4h-4" />
    </svg>
  );
}

function IconLogout({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

export default function UserDashboard({
  gameState,
  onChangeProfession,
  onLogout,
  onBackToStart,
}) {
  const prof = gameState.profession;

  console.log("📊 DASHBOARD DEBUG:", {
    professionName: prof?.name,
    professionId: prof?.id,
    scenarioIndex: gameState.scenarioIndex,
    scenariosLength: gameState.scenarios?.length,
    scenariosArray: gameState.scenarios,
    compliance: gameState.compliance,
    money: gameState.money,
    totalIncome: gameState.totalIncome,
    totalTaxPaid: gameState.totalTaxPaid,
  });

  const isCompleted =
    gameState.scenarioIndex >= (gameState.scenarios?.length || 0);

  const grade =
    gameState.compliance >= 80
      ? { label: "Tax Champion", icon: IconTrophy, color: "#C9A870" }
      : gameState.compliance >= 60
        ? {
            label: "Compliant Citizen",
            icon: IconCheckCircle,
            color: "#5EAF6E",
          }
        : gameState.compliance >= 40
          ? {
              label: "Needs Improvement",
              icon: IconAlertTriangle,
              color: "#E8834A",
            }
          : {
              label: "Non-Compliant",
              icon: IconAlertOctagon,
              color: "#D4183D",
            };

  const ringRadius = 34;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringDash =
    (Math.min(Math.max(gameState.compliance, 0), 100) / 100) *
    ringCircumference;

  return (
    <AppShell accentColor={grade.color}>
      {/* ─── HEADER ─────────────────────────────── */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 gap-3">
        {/* Left: Home icon */}
        <button
          onClick={onBackToStart}
          title="Return to start screen"
          aria-label="Return to start screen"
          className="flex items-center justify-center rounded-lg w-10 h-10 transition-all"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#B8C4CF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#F5F7FA";
            e.currentTarget.style.borderColor = "rgba(201,168,112,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "#B8C4CF";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>

        {/* Center: Title */}
        <div className="flex flex-col items-center text-center">
          <div className="text-tax-gold text-[0.6rem] sm:text-[0.68rem] font-bold tracking-widest flex items-center gap-1">
            <IconBuilding size={11} />
            TAX TRAIL
          </div>
          <div className="text-foreground font-extrabold text-sm sm:text-base">
            Dashboard
          </div>
        </div>

        {/* Right: Logout */}
        <button
          onClick={onLogout}
          title="Log out"
          aria-label="Log out"
          className="flex items-center justify-center rounded-lg w-10 h-10 transition-all"
          style={{
            background: "rgba(212,24,61,0.15)",
            border: "1px solid rgba(212,24,61,0.3)",
            color: "#D4183D",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(212,24,61,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(212,24,61,0.15)";
          }}
        >
          <IconLogout size={18} />
        </button>
      </div>

      {/* ─── CONTENT ────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 max-w-4xl mx-auto w-full">
        {/* Row 1: Profile + Compliance side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4 sm:p-5"
            style={{
              background: "rgba(30,50,75,0.55)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderTop: `4px solid ${prof ? prof.color || "#C9A870" : "#C9A870"}`,
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl shrink-0"
                style={{
                  background: `${prof ? prof.color || "#C9A870" : "#C9A870"}33`,
                  border: `2px solid ${prof ? prof.color || "#C9A870" : "#C9A870"}`,
                }}
              >
                {prof ? prof.emoji : "👤"}
              </div>
              <div className="min-w-0">
                <div className="text-muted-foreground text-[0.68rem] sm:text-xs font-bold tracking-widest mb-1">
                  PROFESSION
                </div>
                <div className="text-foreground font-black text-lg sm:text-2xl truncate">
                  {prof ? prof.name : "Not Selected"}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                  {isCompleted ? "Playthrough complete" : "Active session"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl p-4 sm:p-5"
            style={{
              background: "rgba(30,50,75,0.55)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderTop: `4px solid ${grade.color}`,
            }}
          >
            <div className="text-muted-foreground text-[0.68rem] sm:text-xs font-bold tracking-widest mb-2">
              COMPLIANCE RATING
            </div>
            <div className="flex items-center gap-4">
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                className="shrink-0"
              >
                <circle
                  cx="42"
                  cy="42"
                  r={ringRadius}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />
                <circle
                  cx="42"
                  cy="42"
                  r={ringRadius}
                  fill="none"
                  stroke={grade.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${ringDash} ${ringCircumference}`}
                  transform="rotate(-90 42 42)"
                />
                <text
                  x="42"
                  y="47"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="800"
                  fill="#F5F7FA"
                >
                  {gameState.compliance}%
                </text>
              </svg>
              <div
                className="font-bold text-sm sm:text-base flex items-center gap-1.5"
                style={{ color: grade.color }}
              >
                <grade.icon size={17} />
                {grade.label}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Stats — three across */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <StatsCard
            label="TOTAL INCOME"
            value={`K${gameState.totalIncome?.toLocaleString() || 0}`}
            color="#5EAF6E"
            delay={0.1}
          />
          <StatsCard
            label="TAX PAID"
            value={`K${gameState.totalTaxPaid?.toLocaleString() || 0}`}
            color="#C9A870"
            delay={0.15}
          />
          <StatsCard
            label="SCENARIOS"
            value={`${gameState.scenarioIndex} / ${gameState.scenarios?.length || 0}`}
            color="#B8C4CF"
            delay={0.2}
          />
        </div>

        {/* Row 3: Did you know card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="rounded-xl p-4 sm:p-5"
          style={{
            background: "rgba(201,168,112,0.12)",
            border: "1px solid rgba(201,168,112,0.3)",
          }}
        >
          <div className="text-tax-gold text-[0.68rem] sm:text-xs font-bold mb-2 flex items-center gap-1.5">
            <IconBuilding size={13} />
            DID YOU KNOW?
          </div>
          <div className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Compliant taxpayers like you contributed to the K82.6 billion
            collected in 2023, funding education, healthcare, and infrastructure
            across all 10 provinces of Zambia.
          </div>
        </motion.div>

        {/* Row 4: Actions */}
        <div>
          <button
            onClick={onChangeProfession}
            className="w-full rounded-xl py-4 font-extrabold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(135deg, #C9A870, #E8C878)",
              color: "#1A1A2E",
              boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
            }}
          >
            <IconRefresh size={18} />
            Change Profession
          </button>
        </div>
      </div>
    </AppShell>
  );
}
