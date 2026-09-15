import { useState } from "react";
import { motion } from "motion/react";
import { CitySkyline } from "./CitySkyline";
import authService from "../services/authService";
import { validationService } from "../services/validationService";
import { notificationService } from "../services/notificationService";

const GLASS_DARK = {
  background: "rgba(30,50,75,0.55)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.12)",
};

export default function LoginModal({ isOpen, onLogin, onSignUp, onClose }) {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    // Validate form
    const { isValid, errors } = validationService.validateLogin(formData);
    if (!isValid) {
      const firstError = Object.values(errors)[0];
      setErrorMessage(firstError);
      return;
    }

    setIsLoading(true);

    try {
      const data = await authService.login({
        email: formData.email,
        password: formData.password,
      });

      console.log("✅ Login successful:", data.user);
      notificationService.showSuccess(`Welcome back, ${data.user.fullName}!`);
      onLogin(data.user);
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(
        error.message ||
          "Error connecting to server. Make sure backend is running on port 5000",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    // Validate form
    const { isValid, errors } = validationService.validateSignup(formData);
    if (!isValid) {
      const firstError = Object.values(errors)[0];
      setErrorMessage(firstError);
      return;
    }

    setIsLoading(true);

    try {
      console.log("📤 Sending signup request to:", "/api/auth/signup");
      console.log("📦 Data:", {
        fullName: formData.fullName,
        email: formData.email,
      });

      const data = await authService.signup({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log("✅ Registration successful:", data.user);

      setSuccessMessage(
        `✅ Welcome, ${data.user.fullName}! Account created successfully.`,
      );

      // Reset form
      setFormData({
        email: "",
        password: "",
        fullName: "",
      });

      // Switch back to login mode after 2 seconds
      setTimeout(() => {
        setIsSignUpMode(false);
        setSuccessMessage("");
        if (onSignUp) {
          onSignUp(data.user);
        }
      }, 2000);
    } catch (error) {
      console.error("❌ Registration error:", error);
      setErrorMessage(
        error.message ||
          "Error connecting to server. Make sure backend is running on port 5000",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const switchToLogin = () => {
    setIsSignUpMode(false);
    setSuccessMessage("");
    setErrorMessage("");
    setFormData({
      email: "",
      password: "",
      fullName: "",
    });
  };

  const switchToSignUp = () => {
    setIsSignUpMode(true);
    setSuccessMessage("");
    setErrorMessage("");
    setFormData({
      email: "",
      password: "",
      fullName: "",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center pb-0"
      style={{
        background:
          "linear-gradient(180deg, #0d1f33 0%, #1a3a5c 40%, #2d5a8a 100%)",
        fontFamily: "Nunito, sans-serif",
        position: "fixed",
        overflow: "hidden",
      }}
    >
      {/* Animated city skyline bg */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ opacity: 0.6 }}
      >
        <CitySkyline compliance={75} />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          [8, 12],
          [15, 8],
          [22, 25],
          [35, 5],
          [42, 18],
          [55, 10],
          [63, 28],
          [70, 7],
          [78, 20],
          [85, 15],
          [92, 30],
          [5, 38],
          [18, 45],
          [30, 35],
          [48, 42],
          [60, 38],
          [75, 48],
          [90, 40],
          [12, 50],
          [25, 52],
          [40, 48],
          [55, 55],
          [68, 50],
          [82, 53],
          [95, 45],
        ].map(([left, top], i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: (i % 3 === 0 ? 2 : 1.5) + "px",
              height: (i % 3 === 0 ? 2 : 1.5) + "px",
              background: "white",
              left: left + "%",
              top: top + "%",
              opacity: 0.3 + (i % 5) * 0.12,
            }}
          />
        ))}
      </div>

      {/* Logo header */}
      <motion.div
        className="absolute top-10 left-0 right-0 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="flex items-center gap-3 mb-3"
          style={{
            background: "rgba(201,168,112,0.15)",
            border: "1px solid rgba(201,168,112,0.4)",
            borderRadius: "999px",
            padding: "8px 24px",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>🏛️</span>
          <span
            style={{
              color: "#C9A870",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            ZED CIVIC EDUCATION
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 7vw, 3.8rem)",
            fontWeight: 900,
            color: "#F5F7FA",
            textShadow: "0 2px 24px rgba(0,0,0,0.6)",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          The Tax Trail
        </h1>
        <p
          style={{
            color: "#B8C4CF",
            fontSize: "0.95rem",
            marginTop: "8px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Navigate compliance. Build Zambia.
        </p>
      </motion.div>

      {/* Modal */}
      <motion.div
        className="w-full max-w-sm mx-auto relative z-10"
        style={{ padding: "0 16px 0" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div
          style={{
            ...GLASS_DARK,
            borderRadius: "20px 20px 0 0",
            padding: "28px 28px 36px",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#B8C4CF",
              fontSize: "1.2rem",
            }}
          >
            ✕
          </button>

          {/* Success Message */}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(94,175,110,0.15)",
                border: "1px solid rgba(94,175,110,0.4)",
                borderRadius: "10px",
                padding: "12px 16px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>✅</span>
              <span
                style={{
                  color: "#5EAF6E",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                {successMessage}
              </span>
            </motion.div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(212,24,61,0.15)",
                border: "1px solid rgba(212,24,61,0.4)",
                borderRadius: "10px",
                padding: "12px 16px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>❌</span>
              <span
                style={{
                  color: "#D4183D",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                {errorMessage}
              </span>
            </motion.div>
          )}

          {/* Login Mode */}
          {!isSignUpMode ? (
            <>
              <h2
                style={{
                  color: "#F5F7FA",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  marginBottom: "4px",
                }}
              >
                Welcome to the Tax Trail
              </h2>
              <p
                style={{
                  color: "#B8C4CF",
                  fontSize: "0.85rem",
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Sign in to continue your tax journey
              </p>

              <form
                onSubmit={handleLoginSubmit}
                className="flex flex-col gap-3"
                autoComplete="off"
              >
                <div>
                  <label
                    style={{
                      color: "#B8C4CF",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    autoComplete="off"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#F5F7FA",
                      fontSize: "0.9rem",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      color: "#B8C4CF",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#F5F7FA",
                      fontSize: "0.9rem",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    marginTop: "8px",
                    padding: "14px",
                    background: "linear-gradient(135deg, #C9A870, #E8C878)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#1A1A2E",
                    fontWeight: 800,
                    fontSize: "1rem",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    fontFamily: "Nunito, sans-serif",
                    letterSpacing: "0.02em",
                    transition: "transform 0.15s, box-shadow 0.15s",
                    boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
                    width: "100%",
                    opacity: isLoading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 28px rgba(201,168,112,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(201,168,112,0.35)";
                  }}
                >
                  {isLoading ? "Logging in..." : "Start Playing →"}
                </button>

                <p
                  style={{
                    textAlign: "center",
                    color: "#7A8EA0",
                    fontSize: "0.78rem",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  New player?{" "}
                  <button
                    type="button"
                    onClick={switchToSignUp}
                    style={{
                      color: "#C9A870",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Click Here to create an account
                  </button>
                </p>
              </form>
            </>
          ) : (
            /* Sign Up Mode */
            <>
              <h2
                style={{
                  color: "#F5F7FA",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  marginBottom: "4px",
                }}
              >
                Create Account
              </h2>
              <p
                style={{
                  color: "#B8C4CF",
                  fontSize: "0.85rem",
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Join The Tax Trail and build Zambia
              </p>

              <form
                onSubmit={handleSignUpSubmit}
                className="flex flex-col gap-3"
                autoComplete="off"
              >
                <div>
                  <label
                    style={{
                      color: "#B8C4CF",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Mwila Banda"
                    required
                    autoComplete="off"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#F5F7FA",
                      fontSize: "0.9rem",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      color: "#B8C4CF",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mwila@example.com"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#F5F7FA",
                      fontSize: "0.9rem",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      color: "#B8C4CF",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#F5F7FA",
                      fontSize: "0.9rem",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    marginTop: "8px",
                    padding: "14px",
                    background: "linear-gradient(135deg, #C9A870, #E8C878)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#1A1A2E",
                    fontWeight: 800,
                    fontSize: "1rem",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    fontFamily: "Nunito, sans-serif",
                    letterSpacing: "0.02em",
                    transition: "transform 0.15s, box-shadow 0.15s",
                    boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
                    width: "100%",
                    opacity: isLoading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 28px rgba(201,168,112,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(201,168,112,0.35)";
                  }}
                >
                  {isLoading ? "Creating Account..." : "Create Account →"}
                </button>

                <p
                  style={{
                    textAlign: "center",
                    color: "#7A8EA0",
                    fontSize: "0.78rem",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={switchToLogin}
                    style={{
                      color: "#C9A870",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Sign In
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
