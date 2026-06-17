const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const endpoints = {
  posts: import.meta.env.VITE_BLOG_POSTS_API_URL || `${API_BASE_URL}/api/posts`,
  contact: import.meta.env.VITE_CONTACT_API_URL || `${API_BASE_URL}/api/contact`,
  project: import.meta.env.VITE_PROJECT_API_URL || `${API_BASE_URL}/api/projects`,
  call: import.meta.env.VITE_CALL_API_URL || `${API_BASE_URL}/api/calls`,
  newsletter: import.meta.env.VITE_NEWSLETTER_API_URL || `${API_BASE_URL}/api/newsletter`,
};

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
    ...options,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(
      data?.message || `Request failed with status ${response.status}`
    );
  }

  return data;
}

export async function fetchPosts() {
  try {
    return await requestJson(endpoints.posts);
  } catch (_error) {
    const response = await fetch("/data/blog-posts.json");
    if (!response.ok) throw new Error("Unable to load blog posts");
    return response.json();
  }
}

export function submitContact(payload) {
  return requestJson(endpoints.contact, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function submitProject(payload) {
  return requestJson(endpoints.project, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function submitCall(payload) {
  return requestJson(endpoints.call, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function subscribeNewsletter(payload) {
  return requestJson(endpoints.newsletter, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
