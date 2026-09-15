// Storage Service - localStorage wrapper with helpers
// Priority: 🟢 Low

export const storageService = {
  // Generic get/set/remove
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`StorageService.get("${key}") error:`, error);
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`StorageService.set("${key}") error:`, error);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`StorageService.remove("${key}") error:`, error);
      return false;
    }
  },

  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("StorageService.clear() error:", error);
      return false;
    }
  },

  // User helpers
  getUser() {
    return this.get("user");
  },

  setUser(user) {
    return this.set("user", user);
  },

  // Token helpers
  getToken() {
    try {
      return localStorage.getItem("token");
    } catch (error) {
      console.error("StorageService.getToken() error:", error);
      return null;
    }
  },

  setToken(token) {
    try {
      localStorage.setItem("token", token);
      return true;
    } catch (error) {
      console.error("StorageService.setToken() error:", error);
      return false;
    }
  },

  removeToken() {
    try {
      localStorage.removeItem("token");
      return true;
    } catch (error) {
      console.error("StorageService.removeToken() error:", error);
      return false;
    }
  },

  // Game state helpers
  getGameState() {
    return this.get("gameState");
  },

  setGameState(gameState) {
    return this.set("gameState", gameState);
  },
};

export default storageService;
