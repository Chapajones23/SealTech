const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
const API_BASE_URL = rawBaseUrl.endsWith("/api") ? rawBaseUrl.slice(0, -4) : rawBaseUrl;

const endpoints = {
  posts: import.meta.env.VITE_BLOG_POSTS_API_URL || `${API_BASE_URL}/api/posts`,
  services: import.meta.env.VITE_SERVICES_API_URL || `${API_BASE_URL}/api/services`,
  projects: import.meta.env.VITE_PROJECTS_API_URL || `${API_BASE_URL}/api/projects`,
  contact: import.meta.env.VITE_CONTACT_API_URL || `${API_BASE_URL}/api/contact`,
  project: import.meta.env.VITE_PROJECT_API_URL || `${API_BASE_URL}/api/project-request`,
  call: import.meta.env.VITE_CALL_API_URL || `${API_BASE_URL}/api/calls`,
  newsletter: import.meta.env.VITE_NEWSLETTER_API_URL || `${API_BASE_URL}/api/newsletter`,
  jobs: import.meta.env.VITE_JOBS_API_URL || `${API_BASE_URL}/api/jobs`,
};

async function requestJson(url, options = {}) {
  const token = import.meta.env.VITE_API_TOKEN || "1|dnOVAgoBalZ7KmJWd1IhbHAoLFQUQ3SPpKuUVj8e995b001a";
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
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
    const data = await requestJson(endpoints.posts);
    const result = data && data.data ? data.data : data;
    if (!result || !Array.isArray(result) || result.length === 0) {
      throw new Error("No posts returned from API");
    }
    return result;
  } catch (_error) {
    const response = await fetch("/data/blog-posts.json");
    if (!response.ok) throw new Error("Unable to load blog posts");
    return response.json();
  }
}

export async function fetchServices() {
  try {
    const data = await requestJson(endpoints.services);
    const result = data && data.data ? data.data : data;
    if (!result || !Array.isArray(result) || result.length === 0) {
      throw new Error("No services returned from API");
    }
    return result;
  } catch (_error) {
    const response = await fetch("/data/services.json");
    if (!response.ok) throw new Error("Unable to load services");
    return response.json();
  }
}

export async function fetchProjects() {
  try {
    const data = await requestJson(endpoints.projects);
    const result = data && data.data ? data.data : data;
    if (!result || !Array.isArray(result) || result.length === 0) {
      throw new Error("No projects returned from API");
    }
    return result;
  } catch (_error) {
    const response = await fetch("/data/projects.json");
    if (!response.ok) throw new Error("Unable to load projects");
    return response.json();
  }
}

export async function fetchJobs() {
  try {
    const data = await requestJson(endpoints.jobs);
    const result = data && data.data ? data.data : data;
    if (!result || !Array.isArray(result) || result.length === 0) {
      throw new Error("No jobs returned from API");
    }
    return result;
  } catch (_error) {
    const response = await fetch("/data/jobs.json");
    if (!response.ok) throw new Error("Unable to load open positions");
    return response.json();
  }
}

export function submitContact(payload) {
  const normalized = {
    name: payload.fullName || payload.name,
    email: payload.email,
    company: payload.company,
    phone: payload.phone,
    project_type: payload.projectType || payload.project_type,
    message: payload.message,
  };
  return requestJson(endpoints.contact, {
    method: "POST",
    body: JSON.stringify(normalized),
  });
}

export function submitProject(payload) {
  const normalized = {
    full_name: payload.fullName || payload.full_name,
    email: payload.email,
    project_type: payload.projectType || payload.project_type,
    details: payload.details,
  };
  return requestJson(endpoints.project, {
    method: "POST",
    body: JSON.stringify(normalized),
  });
}

export function submitCall(payload) {
  const normalized = {
    full_name: payload.fullName || payload.full_name,
    email: payload.email,
    phone: payload.phone,
    preferred_date: payload.date || payload.preferred_date,
    notes: payload.notes,
  };
  return requestJson(endpoints.call, {
    method: "POST",
    body: JSON.stringify(normalized),
  });
}

export function subscribeNewsletter(payload) {
  const normalized = {
    email: payload.email,
    source: payload.source || "website",
  };
  return requestJson(endpoints.newsletter, {
    method: "POST",
    body: JSON.stringify(normalized),
  });
}
