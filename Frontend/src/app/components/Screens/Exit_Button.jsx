export default function ExitButtonIcon({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(20, 20, 30, 0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "2px solid rgba(255, 70, 70, 0.5)",
        borderRadius: "50%",
        cursor: "pointer",
        color: "#FF6B6B",
        fontSize: "1.4rem",
        fontWeight: 900,
        transition: "all 0.25s ease",
        boxShadow: "0 0 20px rgba(255, 70, 70, 0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(40, 20, 20, 0.8)";
        e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
        e.currentTarget.style.borderColor = "#FF6B6B";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 70, 70, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(20, 20, 30, 0.6)";
        e.currentTarget.style.transform = "rotate(0deg) scale(1)";
        e.currentTarget.style.borderColor = "rgba(255, 70, 70, 0.5)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 70, 70, 0.1)";
      }}
    >
      ✕
    </button>
  );
}
