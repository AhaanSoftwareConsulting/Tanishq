const API_BASE_URL = "https://admin.tanishqindianrestaurant.com/wp-json/wp/v2";
const wordpressFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error(`WordPress API Error: ${response.status}`);
  return response.json();
};
export const getGalleries = () =>
  wordpressFetch("/gallery?_embed&per_page=100");
export const getGallery = getGalleries;
export const getWordPressData = (endpoint) => wordpressFetch(endpoint);
