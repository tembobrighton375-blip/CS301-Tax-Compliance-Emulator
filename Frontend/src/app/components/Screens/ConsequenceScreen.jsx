import { motion } from "motion/react";
import ExitButton from "./Exit_Button";
import StatsCard from "../StatsCard";
import AppShell from "../layout/AppShell";

export default function ConsequenceScreen({ gameState, onContinue, onExit }) {
  const choice = gameState.lastChoice;
  const isGood = choice.outcome === "good";
  const isBad = choice.outcome === "bad";

  const accentColor = isGood ? "#5EAF6E" : !isBad ? "#E8834A" : "#D4183D";

  const outcomeLabel = isGood
    ? "✅ GOOD CHOICE"
    : isBad
      ? "❌ BAD CHOICE"
      : "⚡ NEUTRAL";

  const taxTip = isGood
    ? "Voluntary compliance builds trust and unlocks formal business growth opportunities."
    : !isBad
      ? "Partial compliance carries real risk."
      : "Tax evasion penalties can be 3-5× the original tax owed, plus potential criminal liability.";

  return (
    <AppShell accentColor={accentColor}>
      {/* HEADER */}
      <div
        className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10"
        style={{ borderBottomColor: `${accentColor}44` }}
      >
        <div>
          <div
            className="text-[0.68rem] sm:text-xs font-bold tracking-widest"
            style={{ color: accentColor }}
          >
            {outcomeLabel}
          </div>
          <div className="text-foreground font-extrabold text-sm sm:text-base">
            {choice.consequenceTitle}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="text-right">
            <div className="text-muted-foreground text-[0.6rem] sm:text-[0.68rem]">
              WALLET
            </div>
            <div
              className="font-extrabold text-sm sm:text-base"
              style={{ color: gameState.money >= 0 ? "#5EAF6E" : "#D4183D" }}
            >
              K{gameState.money.toLocaleString()}
            </div>
          </div>
          <ExitButton onClick={onExit} />
        </div>
      </div>

      {/* SPLIT VISUAL — 200px on mobile, bigger on desktop */}
      <div
        className="grid grid-cols-2 h-[140px] sm:h-[180px] lg:h-[220px] relative overflow-hidden"
      >
        {/* Compliant side */}
        <div
          className="flex flex-col items-center justify-center p-3 sm:p-4 relative"
          style={{ background: "linear-gradient(160deg, #1a4a30, #2d7a4a)" }}
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl">🏙️</div>
          <div className="text-tax-green font-extrabold text-[0.7rem] sm:text-xs mt-1 text-center">
            Compliant Path
          </div>
          <div className="text-[#8FCFA0] text-[0.6rem] sm:text-[0.7rem] mt-0.5 text-center">
            Thriving city
          </div>
          {isGood && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ border: "3px solid #5EAF6E" }}
            />
          )}
        </div>

        {/* Non-compliant side */}
        <div
          className="flex flex-col items-center justify-center p-3 sm:p-4 relative"
          style={{ background: "linear-gradient(160deg, #4a1a1a, #7a2020)" }}
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl">🏚️</div>
          <div className="text-tax-red font-extrabold text-[0.7rem] sm:text-xs mt-1 text-center">
            Non-Compliant
          </div>
          <div className="text-[#CF8A8A] text-[0.6rem] sm:text-[0.7rem] mt-0.5 text-center">
            City in decay
          </div>
          {isBad && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ border: "3px solid #D4183D" }}
            />
          )}
        </div>

        {/* Center pin */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center
                     text-base sm:text-lg"
          style={{
            background: "#5D6F82",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          {isGood ? "✅" : !isBad ? "⚡" : "🚨"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 max-w-3xl mx-auto w-full">
        {/* Outcome description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 sm:p-5"
          style={{
            background: "rgba(30,50,75,0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderLeft: `4px solid ${accentColor}`,
          }}
        >
          <div
            className="text-[0.68rem] sm:text-xs font-bold tracking-widest mb-2"
            style={{ color: accentColor }}
          >
            OUTCOME
          </div>
          <h2 className="text-foreground text-lg sm:text-xl font-black mb-2">
            {choice.consequenceTitle}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {choice.consequenceDesc}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatsCard
            label="COMPLIANCE"
            value={`${choice.scoreChange > 0 ? "+" : ""}${choice.scoreChange}`}
            positive={choice.scoreChange >= 0}
            delay={0.2}
          />
          <StatsCard
            label="WALLET"
            value={`${choice.moneyChange >= 0 ? "+" : ""}K${choice.moneyChange}`}
            positive={choice.moneyChange >= 0}
            delay={0.25}
          />
        </div>

        {/* Tax tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl p-3 sm:p-4 flex gap-3"
          style={{
            background: "rgba(201,168,112,0.12)",
            border: "1px solid rgba(201,168,112,0.3)",
          }}
        >
          <span className="text-base sm:text-lg">💡</span>
          <div>
            <div className="text-tax-gold text-[0.68rem] sm:text-xs font-bold mb-1">
              TAX TIP
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {taxTip}
            </div>
          </div>
        </motion.div>

        {/* Continue button */}
        <button
          onClick={onContinue}
          className="w-full rounded-xl py-4 font-extrabold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0"
          style={{
            background: "linear-gradient(135deg, #C9A870, #E8C878)",
            color: "#1A1A2E",
            boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
          }}
        >
          View Your City →
        </button>
      </div>
    </AppShell>
  );
}