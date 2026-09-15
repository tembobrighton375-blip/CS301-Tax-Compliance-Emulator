import { useState } from "react";
import { motion } from "motion/react";
import { PROFESSIONS } from "../Professions/export_all";
import { AppShell } from "../export_all_components";

export default function ProfessionScreen({ onSelect, onBack }) {
  const [hovered, setHovered] = useState(null);

  return (
    <AppShell accentColor="#C9A870">
      {/* HEADER */}
      <div className="px-4 sm:px-6 pt-8 sm:pt-10 pb-4 sm:pb-6 text-center border-b border-white/8">
        {/* Home button — absolutely positioned top-left */}
        {onBack && (
          <button
            onClick={onBack}
            title="Return to start screen"
            aria-label="Return to start screen"
            className="absolute top-4 left-4 sm:top-5 sm:left-6 flex items-center justify-center rounded-lg w-10 h-10 transition-all"
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
        )}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-tax-gold text-[0.68rem] sm:text-xs font-bold tracking-widest mb-2"
        >
          STEP 1 OF 2
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-foreground text-2xl sm:text-3xl font-black mb-2"
        >
          Choose Your Profession
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto"
        >
          Each profession faces unique tax situations
        </motion.p>
      </div>

      {/* PROFESSION LIST — always vertical */}
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col gap-3 sm:gap-4 max-w-2xl mx-auto">
          {PROFESSIONS.map((prof, i) => (
            <motion.div
              key={prof.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              onClick={() => onSelect(prof)}
              onMouseEnter={() => setHovered(prof.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer rounded-2xl p-4 sm:p-5 transition-all"
              style={{
                background:
                  hovered === prof.id
                    ? "rgba(255,255,255,0.16)"
                    : "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderLeft: `4px solid ${prof.color}`,
                transform:
                  hovered === prof.id ? "translateY(-2px)" : "translateY(0)",
                boxShadow:
                  hovered === prof.id ? `0 8px 24px ${prof.color}25` : "none",
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Emoji badge */}
                <div
                  className="flex items-center justify-center shrink-0 rounded-2xl
                             w-14 h-14 sm:w-16 sm:h-16 text-2xl sm:text-3xl"
                  style={{
                    background: `${prof.color}22`,
                    border: `2px solid ${prof.color}55`,
                  }}
                >
                  {prof.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-foreground font-extrabold text-base sm:text-lg mb-0.5 truncate">
                    {prof.name}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm leading-snug line-clamp-2">
                    {prof.description}
                  </div>
                </div>

                {/* Starting money */}
                <div className="text-right shrink-0">
                  <div className="text-muted-foreground text-[0.6rem] sm:text-[0.68rem] mb-0.5">
                    START
                  </div>
                  <div className="text-tax-green font-extrabold text-sm sm:text-base whitespace-nowrap">
                    K{prof.startingMoney.toLocaleString()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
