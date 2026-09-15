// Scenario Service - Get scenarios, filter by profession, random selection
// Priority: 🟡 Medium
import {
  getScenariosForProfession,
  getRandomScenariosForProfession,
} from "../components/Professions/export_all";

export const scenarioService = {
  // Get all scenarios for a profession
  getScenariosForProfession(professionId) {
    return getScenariosForProfession(professionId) || [];
  },

  // Get random scenarios (no repeats)
  getRandomScenarios(professionId, count = 5) {
    return getRandomScenariosForProfession(professionId, count) || [];
  },

  // Count total scenarios for a profession
  getTotalScenarios(professionId) {
    return this.getScenariosForProfession(professionId).length;
  },

  // Get a specific scenario by id
  getScenarioById(professionId, scenarioId) {
    const scenarios = this.getScenariosForProfession(professionId);
    return scenarios.find((s) => s.id === scenarioId) || null;
  },
};

export default scenarioService;
