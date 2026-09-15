import { YangoDriver } from "./YangoDriver/YangoDriver";
import { FreelanceCreative } from "./FreelanceCreative/FreelanceCreative";
import { ShopOwner } from "./ShopOwner/ShopOwner";
import { MarketTrader } from "./MarketTrader/MarketTrader";

export const PROFESSIONS = [
  YangoDriver,
  FreelanceCreative,
  ShopOwner,
  MarketTrader,
];

export const getScenariosForProfession = (professionId) => {
  const profession = PROFESSIONS.find((p) => p.id === professionId);
  return profession ? profession.scenarios : [];
};

// Picks `count` random scenarios (no repeats) from a profession's full scenario list
export const getRandomScenariosForProfession = (professionId, count = 5) => {
  const all = getScenariosForProfession(professionId);
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
