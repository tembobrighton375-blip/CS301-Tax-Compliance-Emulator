import { PROFESSIONS } from "../components/Professions/export_all";

// Get profession by ID
export const getProfessionById = (professionId) => {
  return PROFESSIONS.find((p) => p.id === professionId) || null;
};

// Get all professions
export const getAllProfessions = () => {
  return PROFESSIONS;
};
