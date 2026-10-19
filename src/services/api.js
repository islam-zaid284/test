const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";

/**
 * Future integration point for the documented HEXA LOTUS API.
 * No requests are made by this website until a page explicitly calls this layer.
 */
export function getApiBaseUrl() {
  return API_BASE_URL;
}

export async function apiRequest(path, options) {
  if (!API_BASE_URL) {
    throw new Error("Set VITE_API_BASE_URL before making a backend request.");
  }
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  if (!response.ok) throw new Error(`API request failed (${response.status}).`);
  return response.json();
}
