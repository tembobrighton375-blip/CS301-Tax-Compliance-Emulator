import { motion } from "motion/react";
import { PROFESSIONS } from "../Professions/export_all";
import { AppShell } from "../export_all_components";

export default function StartScreen({
  hasSavedGame = false,
  onContinue,
  onNew,
  onDashboard,
  onLearn,
}) {
  const professionCount = PROFESSIONS.length;
  const scenariosPerGame = 5;

  return (
    <AppShell accentColor="#C9A870">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-full px-4 sm:px-5 py-1.5 mb-5 sm:mb-6"
          style={{
            background: "rgba(201,168,112,0.15)",
            border: "1px solid rgba(201,168,112,0.5)",
          }}
        >
          <span className="text-tax-gold text-[0.68rem] sm:text-xs font-bold tracking-widest">
            🏛️ ZED CIVIC EDUCATION PLATFORM
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-black leading-none tracking-tight mb-3"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            color: "#F5F7FA",
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        >
          The
          <br />
          <span className="text-tax-gold">Tax Trail</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground text-sm sm:text-base text-center max-w-md leading-relaxed mb-8 sm:mb-10"
        >
          Experience real tax decisions faced by workers. Build your city. Earn
          compliance points. Learn by doing.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {[
            { value: scenariosPerGame, label: "Scenarios" },
            { value: professionCount, label: "Professions" },
            { value: "K", label: "Kwacha" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-center"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <div className="text-tax-gold text-xl sm:text-2xl font-black">
                {value}
              </div>
              <div className="text-muted-foreground text-[0.6rem] sm:text-[0.68rem] font-bold tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3 w-full max-w-xs"
        >
          {/* Continue Game — only if a saved game exists */}
          {hasSavedGame && (
            <button
              onClick={onContinue}
              className="w-full rounded-2xl py-4 font-extrabold text-base sm:text-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #5EAF6E, #45956e)",
                color: "#FFFFFF",
                boxShadow: "0 6px 24px rgba(94,175,110,0.4)",
              }}
            >
              ▶ Continue Game
            </button>
          )}

          <button
            onClick={onNew}
            className="w-full rounded-2xl py-4 font-extrabold text-base sm:text-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #C9A870, #E8C878)",
              color: "#1A1A2E",
              boxShadow: "0 6px 24px rgba(201,168,112,0.4)",
            }}
          >
            🎮 Start New Game
          </button>

          <button
            onClick={onDashboard}
            className="w-full rounded-2xl py-4 font-bold text-sm sm:text-base transition-all"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "2px solid rgba(255,255,255,0.15)",
              color: "#F5F7FA",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,112,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}
          >
            📊 My Dashboard
          </button>

          <button
            onClick={onLearn}
            className="w-full rounded-2xl py-4 font-bold text-sm sm:text-base transition-all"
            style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.25)",
              color: "#F5F7FA",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            📚 Tax Education Guide
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center text-muted-foreground text-xs sm:text-sm py-4 border-t border-white/8">
        For educational purposes
      </div>
    </AppShell>
  );
}
