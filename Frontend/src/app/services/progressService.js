// const API_URL = "http://localhost:5000/api/progress";

// // Get auth token from localStorage
// const getToken = () => {
//   return localStorage.getItem("token");
// };

// // Headers for authenticated requests
// const getHeaders = () => {
//   return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${getToken()}`,
//   };
// };

// // Save user progress
// export const saveProgress = async (gameState) => {
//   try {
//     console.log("💾 Saving progress:", {
//       professionId: gameState.profession?.id || null,
//       compliance: gameState.compliance,
//       money: gameState.money,
//       scenarioIndex: gameState.scenarioIndex,
//     });

//     const response = await fetch(`${API_URL}/progress`, {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({
//         professionId: gameState.profession?.id || null,
//         compliance: gameState.compliance,
//         money: gameState.money,
//         scenarioIndex: gameState.scenarioIndex,
//         completedScenarios: gameState.completedScenarios || [],
//         totalIncome: gameState.totalIncome || 0,
//         totalTaxPaid: gameState.totalTaxPaid || 0,
//       }),
//     });

//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.message || "Failed to save progress");
//     }
//     return data;
//   } catch (error) {
//     console.error("Error saving progress:", error);
//     throw error;
//   }
// };

// // Load user progress
// export const loadProgress = async () => {
//   try {
//     const response = await fetch(`${API_URL}/progress`, {
//       method: "GET",
//       headers: getHeaders(),
//     });

//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.message || "Failed to load progress");
//     }
//     return data;
//   } catch (error) {
//     console.error("Error loading progress:", error);
//     throw error;
//   }
// };

// // Auto-save progress (for periodic saving)
// export const autoSaveProgress = async (gameState) => {
//   try {
//     // ✅ FIXED: Remove the extra "/progress" - should be /auto-save only
//     const response = await fetch(`${API_URL}/auto-save`, {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({
//         progress: {
//           professionId: gameState.profession?.id || null,
//           compliance: gameState.compliance,
//           money: gameState.money,
//           scenarioIndex: gameState.scenarioIndex,
//           completedScenarios: gameState.completedScenarios || [],
//           totalIncome: gameState.totalIncome || 0,
//           totalTaxPaid: gameState.totalTaxPaid || 0,
//           lastPlayed: new Date(),
//         },
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error auto-saving progress:", error);
//     return { success: false };
//   }
// };

// // Reset user progress (used by "Play Again")
// export const resetProgress = async () => {
//   try {
//     const response = await fetch(`${API_URL}/reset`, {
//       method: "POST",
//       headers: getHeaders(),
//     });

//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.message || "Failed to reset progress");
//     }
//     return data;
//   } catch (error) {
//     console.error("Error resetting progress:", error);
//     throw error;
//   }
// };

const API_URL = "http://localhost:5000/api/progress";

// Get auth token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Headers for authenticated requests
const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
};

// Save user progress
export const saveProgress = async (gameState) => {
  try {
    console.log("💾 Saving progress:", {
      professionId: gameState.profession?.id || null,
      compliance: gameState.compliance,
      money: gameState.money,
      scenarioIndex: gameState.scenarioIndex,
    });

    const response = await fetch(`${API_URL}/progress`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        professionId: gameState.profession?.id || null,
        compliance: gameState.compliance,
        money: gameState.money,
        scenarioIndex: gameState.scenarioIndex,
        completedScenarios: gameState.completedScenarios || [],
        totalIncome: gameState.totalIncome || 0,
        totalTaxPaid: gameState.totalTaxPaid || 0,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to save progress");
    }
    return data;
  } catch (error) {
    console.error("Error saving progress:", error);
    throw error;
  }
};

// Load user progress
export const loadProgress = async () => {
  try {
    const response = await fetch(`${API_URL}/progress`, {
      method: "GET",
      headers: getHeaders(),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to load progress");
    }
    return data;
  } catch (error) {
    console.error("Error loading progress:", error);
    throw error;
  }
};

// Auto-save progress (for periodic saving)
export const autoSaveProgress = async (gameState) => {
  try {
    const response = await fetch(`${API_URL}/auto-save`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        progress: {
          professionId: gameState.profession?.id || null,
          compliance: gameState.compliance,
          money: gameState.money,
          scenarioIndex: gameState.scenarioIndex,
          completedScenarios: gameState.completedScenarios || [],
          totalIncome: gameState.totalIncome || 0,
          totalTaxPaid: gameState.totalTaxPaid || 0,
          lastPlayed: new Date(),
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error auto-saving progress:", error);
    return { success: false };
  }
};

// Reset user progress (used by "Play Again")
export const resetProgress = async () => {
  try {
    const response = await fetch(`${API_URL}/reset`, {
      method: "POST",
      headers: getHeaders(),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to reset progress");
    }
    return data;
  } catch (error) {
    console.error("Error resetting progress:", error);
    throw error;
  }
};
