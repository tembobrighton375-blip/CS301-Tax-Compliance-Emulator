// Game State Service - Game state management, calculations, validation
// Priority: 🟡 Medium

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export const OUTCOME_COLORS = {
  good: "#5EAF6E",
  neutral: "#E8834A",
  bad: "#D4183D",
};

export const OUTCOME_LABELS = {
  good: "✓ Compliant",
  neutral: "⚡ Risky",
  bad: "✗ Evasion",
};

export const gameStateService = {
  // Update compliance (clamped 0-100)
  calculateCompliance(current, change) {
    return clamp((current || 0) + (change || 0), 0, 100);
  },

  // Update money (can't go negative)
  calculateMoney(current, change) {
    return Math.max(0, (current || 0) + (change || 0));
  },

  // Track income (only positive changes)
  calculateTotalIncome(current, change) {
    return (current || 0) + (change > 0 ? change : 0);
  },

  // Track tax paid (only negative changes, as absolute value)
  calculateTotalTaxPaid(current, change) {
    return (current || 0) + (change < 0 ? Math.abs(change) : 0);
  },

  // Check if a choice is affordable
  canAfford(money, change) {
    return money + change >= 0;
  },

  // Get grade based on compliance
  getGrade(compliance) {
    if (compliance >= 90) return "A";
    if (compliance >= 75) return "B";
    if (compliance >= 60) return "C";
    if (compliance >= 40) return "D";
    return "F";
  },

  // Get city status message based on compliance
  getCityStatus(compliance) {
    if (compliance >= 70) {
      return {
        emoji: "✨",
        text: "Your city is thriving thanks to tax revenue",
      };
    }
    if (compliance >= 40) {
      return { emoji: "⚡", text: "Your city needs better compliance to grow" };
    }
    return { emoji: "⚠️", text: "Low compliance is hurting your city" };
  },

  // Get color for outcome
  getOutcomeColor(outcome) {
    return OUTCOME_COLORS[outcome] || "#B8C4CF";
  },

  // Get label for outcome
  getOutcomeLabel(outcome) {
    return OUTCOME_LABELS[outcome] || "✋ Unknown";
  },

  // Apply a choice to a game state and return the new state
  applyChoice(gameState, choice) {
    return {
      ...gameState,
      compliance: this.calculateCompliance(
        gameState.compliance,
        choice.scoreChange,
      ),
      money: this.calculateMoney(gameState.money, choice.moneyChange),
      scenarioIndex: gameState.scenarioIndex + 1,
      lastChoice: choice,
      totalIncome: this.calculateTotalIncome(
        gameState.totalIncome,
        choice.moneyChange,
      ),
      totalTaxPaid: this.calculateTotalTaxPaid(
        gameState.totalTaxPaid,
        choice.moneyChange,
      ),
    };
  },
};

export default gameStateService;
