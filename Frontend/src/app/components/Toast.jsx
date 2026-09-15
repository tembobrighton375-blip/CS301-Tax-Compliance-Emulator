import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { notificationService } from "../services/notificationService";

const TOAST_STYLES = {
  success: {
    background: "rgba(94,175,110,0.92)",
    icon: "✅",
    color: "#FFFFFF",
  },
  error: {
    background: "rgba(212,24,61,0.92)",
    icon: "❌",
    color: "#FFFFFF",
  },
  warning: {
    background: "rgba(232,131,74,0.92)",
    icon: "⚠️",
    color: "#FFFFFF",
  },
  info: {
    background: "rgba(70,130,180,0.92)",
    icon: "ℹ️",
    color: "#FFFFFF",
  },
  loading: {
    background: "rgba(30,50,75,0.92)",
    icon: "⏳",
    color: "#FFFFFF",
  },
};

export default function Toast({ position = "top-right" }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  }, []);

  useEffect(() => {
    const unsubscribe = notificationService.subscribe((notification) => {
      if (notification.type === "dismiss") {
        dismissToast(notification.id);
        return;
      }

      setToasts((prev) => [...prev, notification]);

      if (notification.duration > 0) {
        timersRef.current[notification.id] = setTimeout(() => {
          dismissToast(notification.id);
        }, notification.duration);
      }
    });

    return () => {
      unsubscribe();
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, [dismissToast]);

  const positionStyle =
    position === "top-left"
      ? { top: 20, left: 20 }
      : position === "bottom-left"
        ? { bottom: 20, left: 20 }
        : position === "bottom-right"
          ? { bottom: 20, right: 20 }
          : { top: 20, right: 20 };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        pointerEvents: "none",
        maxWidth: "360px",
        width: "calc(100vw - 40px)",
        ...positionStyle,
      }}
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const style = TOAST_STYLES[toast.type] || TOAST_STYLES.info;
          const isDismissible = toast.type !== "loading";
          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={() => (isDismissible ? dismissToast(toast.id) : null)}
              style={{
                background: style.background,
                color: style.color,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "12px",
                padding: "14px 18px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: isDismissible ? "pointer" : "default",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>
                {style.icon}
              </span>
              <div
                style={{
                  flex: 1,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                {toast.message}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export { notificationService };
