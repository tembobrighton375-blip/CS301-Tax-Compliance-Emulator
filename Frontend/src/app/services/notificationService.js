// Notification Service - Toast/alert management (replaces alert())
// Priority: 🟢 Low
// Uses a pub/sub pattern so the Toast component can subscribe to notifications.

const listeners = [];
let idCounter = 0;

const emit = (type, message, options = {}) => {
  const id = ++idCounter;
  const notification = {
    id,
    type, // 'success' | 'error' | 'info' | 'warning'
    message,
    duration: options.duration ?? 4000,
  };
  listeners.forEach((listener) => listener(notification));
  return id;
};

export const notificationService = {
  // Subscribe a listener (returns an unsubscribe function)
  subscribe(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) listeners.splice(index, 1);
    };
  },

  showSuccess(message, options) {
    return emit("success", message, options);
  },

  showError(message, options) {
    return emit("error", message, options);
  },

  showInfo(message, options) {
    return emit("info", message, options);
  },

  showWarning(message, options) {
    return emit("warning", message, options);
  },

  showLoading(message, options) {
    return emit("loading", message, { ...options, duration: 0 });
  },

  // Dismiss a specific notification by id
  dismiss(id) {
    listeners.forEach((listener) => listener({ id, type: "dismiss" }));
  },
};

export default notificationService;
