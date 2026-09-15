import storageService from "./storageService";

const API_BASE_URL = "http://localhost:5000/api";

// Build headers with optional auth token
const buildHeaders = (includeAuth = true) => {
  const headers = { "Content-Type": "application/json" };
  if (includeAuth) {
    const token = storageService.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  return headers;
};

// Parse JSON response, throwing formatted errors on failure
const parseResponse = async (response) => {
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");

  let data = null;
  if (isJson) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const message =
      (data && (data.message || data.error)) ||
      `Request failed with status ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

const handleError = (error) => {
  console.error("API Service error:", error);
  throw error;
};

export const apiService = {
  // GET request with auth headers
  async get(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: buildHeaders(),
      });
      return await parseResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // POST request with auth headers
  async post(endpoint, body) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: buildHeaders(),
        body: JSON.stringify(body),
      });
      return await parseResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // PUT request with auth headers
  async put(endpoint, body) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: buildHeaders(),
        body: JSON.stringify(body),
      });
      return await parseResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // DELETE request with auth headers
  async del(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: buildHeaders(),
      });
      return await parseResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // Public POST (no auth) e.g. login/signup
  async postPublic(endpoint, body) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: buildHeaders(false),
        body: JSON.stringify(body),
      });
      return await parseResponse(response);
    } catch (error) {
      handleError(error);
    }
  },
};

export default apiService;
