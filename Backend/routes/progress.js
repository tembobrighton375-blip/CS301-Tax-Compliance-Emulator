const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { verifyToken } = require("../middleware/auth");

// GET user progress
router.get("/progress", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("gameProgress");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      success: true,
      progress: user.gameProgress,
    });
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ message: "Error fetching progress" });
  }
});

// SAVE/UPDATE user progress
router.post("/progress", verifyToken, async (req, res) => {
  try {
    const {
      professionId,
      compliance,
      money,
      scenarioIndex,
      completedScenarios,
      totalIncome,
      totalTaxPaid,
    } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          "gameProgress.professionId": professionId,
          "gameProgress.compliance": compliance,
          "gameProgress.money": money,
          "gameProgress.scenarioIndex": scenarioIndex,
          "gameProgress.completedScenarios": completedScenarios || [],
          "gameProgress.totalIncome": totalIncome || 0,
          "gameProgress.totalTaxPaid": totalTaxPaid || 0,
          "gameProgress.lastPlayed": new Date(),
        },
      },
      { new: true },
    ).select("gameProgress");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      message: "Progress saved successfully",
      progress: user.gameProgress,
    });
  } catch (error) {
    console.error("Error saving progress:", error);
    res.status(500).json({ message: "Error saving progress" });
  }
});

// Auto-save progress
// Auto-save progress (can be called periodically)
router.post("/auto-save", verifyToken, async (req, res) => {
  try {
    const { progress } = req.body;
    const mergedProgress = {
      ...progress,
      lastPlayed: new Date(),
    };

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          gameProgress: mergedProgress,
        },
      },
      { new: true },
    ).select("gameProgress");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      message: "Progress auto-saved",
      progress: user.gameProgress,
    });
  } catch (error) {
    console.error("Error auto-saving progress:", error);
    res.status(500).json({ message: "Error auto-saving progress" });
  }
});

// ─────────────────────────────────────────────────────────────
// NEW: RESET progress — clears saved game
// Used by "Play Again" or "Start New Game"
// ─────────────────────────────────────────────────────────────
router.post("/reset", verifyToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          "gameProgress.professionId": null,
          "gameProgress.compliance": 50,
          "gameProgress.money": 0,
          "gameProgress.scenarioIndex": 0,
          "gameProgress.completedScenarios": [],
          "gameProgress.totalIncome": 0,
          "gameProgress.totalTaxPaid": 0,
          "gameProgress.lastPlayed": null,
        },
      },
      { new: true },
    ).select("gameProgress");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      message: "Progress reset",
      progress: user.gameProgress,
    });
  } catch (error) {
    console.error("Error resetting progress:", error);
    res.status(500).json({ message: "Error resetting progress" });
  }
});

module.exports = router;
