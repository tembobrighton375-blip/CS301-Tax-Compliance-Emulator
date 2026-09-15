import { motion } from "motion/react";
import { CitySkyline } from "../CitySkyline";
import { ProgressBar } from "../ProgressBar";
import StatsCard from "../StatsCard";
import { AppShell } from "../export_all_components";

export default function EndScreen({ gameState, onPlayAgain }) {
  const prof = gameState.profession;
  const { compliance, money } = gameState;
  const scenarios = gameState.scenarios;

  const grade =
    compliance >= 80
      ? { label: "Tax Champion", emoji: "🏆", color: "#C9A870" }
      : compliance >= 60
        ? { label: "Compliant Citizen", emoji: "✅", color: "#5EAF6E" }
        : compliance >= 40
          ? { label: "Needs Improvement", emoji: "⚡", color: "#E8834A" }
          : { label: "Non-Compliant", emoji: "⚠️", color: "#D4183D" };

  const closingMessage =
    compliance >= 80
      ? "Outstanding Tax compliance builds trust, unlocks opportunities, and grows public revenue for everyone."
      : compliance >= 60
        ? "Good work! Consistent compliance is what drives national development and community services."
        : compliance >= 40
          ? "Mixed results. Each shortcut costs more in the long run."
          : "This path leads to audits and penalties. Tax revenue funds schools, clinics, and roads — every kwacha matters.";

  return (
    <AppShell accentColor={grade.color}>
      {/* HERO — skyline visual */}
      <div className="w-full overflow-hidden" style={{ opacity: 0.85 }}>
        <CitySkyline compliance={compliance} />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 max-w-3xl mx-auto w-full">
        {/* Grade card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl px-6 py-6 sm:px-8 sm:py-8 text-center"
          style={{
            background: "rgba(30,50,75,0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderTop: `4px solid ${grade.color}`,
          }}
        >
          <div className="text-4xl sm:text-5xl mb-2">{grade.emoji}</div>
          <div className="text-muted-foreground text-[0.68rem] sm:text-xs font-bold tracking-widest mb-1.5">
            FINAL RATING
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black mb-1"
            style={{ color: grade.color }}
          >
            {grade.label}
          </h2>
          <div className="text-muted-foreground text-sm sm:text-base">
            as a {prof.name} in Lusaka
          </div>
        </motion.div>

        {/* Stats grid — 3 across on desktop, 3 across on mobile too */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <StatsCard
            label="COMPLIANCE"
            value={`${compliance}%`}
            color={grade.color}
            delay={0.15}
          />
          <StatsCard
            label="WALLET"
            value={`K${money.toLocaleString()}`}
            color="#5EAF6E"
            delay={0.2}
          />
          <StatsCard
            label="COMPLETED"
            value={`${scenarios.length}/${scenarios.length}`}
            color="#C9A870"
            delay={0.25}
          />
        </div>

        {/* Progress + summary */}
        <div
          className="rounded-xl p-4 sm:p-5"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <ProgressBar
            value={compliance}
            max={100}
            label="Overall Compliance Rating"
            color={grade.color}
          />
          <div className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
            {closingMessage}
          </div>
        </div>

        {/* Did You Know */}
        <div
          className="rounded-xl p-4 sm:p-5"
          style={{
            background: "rgba(201,168,112,0.12)",
            border: "1px solid rgba(201,168,112,0.3)",
          }}
        >
          <div className="text-tax-gold text-[0.68rem] sm:text-xs font-bold mb-2">
            🏛️ DID YOU KNOW?
          </div>
          <div className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            An estimated K82.6 billion was collected in 2023, funding education,
            healthcare, and infrastructure across all provinces. Every kwacha
            declared matters.
          </div>
        </div>

        {/* Play again button */}
        <button
          onClick={onPlayAgain}
          className="w-full rounded-xl py-4 font-extrabold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0"
          style={{
            background: "linear-gradient(135deg, #C9A870, #E8C878)",
            color: "#1A1A2E",
            boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
          }}
        >
          🔄 Play Again
        </button>

        {/* Footer */}
        <div className="text-center text-muted-foreground text-xs sm:text-sm pb-2">
          Visit <span className="text-tax-gold">zra.org.zm</span> to register
          your TPIN and file taxes online
        </div>
      </div>
    </AppShell>
  );
}
