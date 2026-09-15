// Auth Service - Login, signup, logout, token & user management
// Priority: 🔴 HIGH
import apiService from "./apiService";
import storageService from "./storageService";

export const authService = {
  // Register a new user
  async signup(userData) {
    const data = await apiService.postPublic("/auth/signup", userData);
    if (data && data.token) {
      storageService.setToken(data.token);
      storageService.setUser(data.user);
    }
    return data;
  },

  // Authenticate existing user
  async login(credentials) {
    const data = await apiService.postPublic("/auth/login", credentials);
    if (data && data.token) {
      storageService.setToken(data.token);
      storageService.setUser(data.user);
    }
    return data;
  },

  // Clear tokens and user data
  logout() {
    storageService.removeToken();
    storageService.remove("user");
  },

  // Get user from localStorage
  getCurrentUser() {
    return storageService.getUser();
  },

  // Get JWT from localStorage
  getToken() {
    return storageService.getToken();
  },

  // Check if user is logged in
  isAuthenticated() {
    return Boolean(storageService.getToken());
  },

  // Update user in localStorage
  updateUser(userData) {
    storageService.setUser(userData);
  },
};

export default authService;
