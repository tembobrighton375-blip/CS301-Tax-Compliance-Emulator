const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  gameProgress: {
    professionId: { type: String, default: null },
    compliance: { type: Number, default: 50 },
    money: { type: Number, default: 0 },
    scenarioIndex: { type: Number, default: 0 },
    completedScenarios: { type: [String], default: [] },
    totalIncome: { type: Number, default: 0 },
    totalTaxPaid: { type: Number, default: 0 },
    lastPlayed: { type: Date, default: Date.now },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
