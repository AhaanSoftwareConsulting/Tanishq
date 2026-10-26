const API_BASE_URL =
  "https://admin.tanishqindianrestaurant.com/wp-json/wp/v2";

const RESERVATION_API_URL =
  "https://admin.tanishqindianrestaurant.com/wp-json/tanishq/v1/reservations";

const CONTACT_API_URL =
  "https://admin.tanishqindianrestaurant.com/wp-json/tanishq/v1/contact";

// Common WordPress API fetch
const wordpressFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`WordPress API Error: ${response.status}`);
  }

  return response.json();
};

// Gallery API
export const getGalleries = () =>
  wordpressFetch("/gallery?_embed&per_page=100");

export const getGallery = getGalleries;

// Menu Items API
export const getMenuItems = () =>
  wordpressFetch("/menu_items?_embed&per_page=100");

// Generic WordPress API
export const getWordPressData = (endpoint) =>
  wordpressFetch(endpoint);

// Reservation API
export const submitReservation = async (data) => {
  const response = await fetch(RESERVATION_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to submit reservation."
    );
  }

  return result;
};

// Contact Form API
export const submitContactForm = async (data) => {
  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to submit contact form."
    );
  }

  return result;
};


// =====================================
// BLOG API
// =====================================

// Get all published blog posts
export const getBlogPosts = async () => {
  return wordpressFetch(
    "/posts?_embed&per_page=100&status=publish"
  );
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (slug) => {
  const posts = await wordpressFetch(
    `/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`
  );

  return posts.length > 0 ? posts[0] : null;
};

