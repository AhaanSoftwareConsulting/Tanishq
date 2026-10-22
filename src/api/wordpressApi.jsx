const API_BASE_URL = "https://admin.tanishqindianrestaurant.com/wp-json/wp/v2";
const RESERVATION_API_URL = "https://admin.tanishqindianrestaurant.com/wp-json/tanishq/v1/reservations";

const wordpressFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error(`WordPress API Error: ${response.status}`);
  return response.json();
};

export const getGalleries = () => wordpressFetch("/gallery?_embed&per_page=100");
export const getGallery = getGalleries;
export const getWordPressData = (endpoint) => wordpressFetch(endpoint);

export const submitReservation = async (data) => {
  const response = await fetch(RESERVATION_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit reservation.");
  }

  return result;
};