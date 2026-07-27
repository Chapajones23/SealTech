export function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function sortPosts(posts, order = "newest") {
  return [...posts].sort((a, b) => {
    const diff = new Date(a.publishDate) - new Date(b.publishDate);
    return order === "oldest" ? diff : -diff;
  });
}

export function labelFor(value) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

export function getImageUrl(imagePath) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  if (imagePath.startsWith("assets/")) {
    return `/${imagePath}`;
  }
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return `${apiBaseUrl}/${cleanPath}`;
}

export function getCategoryLabel(category) {
  if (!category) return "";
  if (typeof category === "string") return category;
  if (typeof category === "object") {
    return category.name || category.title || category.slug || "";
  }
  return String(category);
}

export function getCategorySlug(category) {
  if (!category) return "";
  if (typeof category === "string") return category.toLowerCase();
  if (typeof category === "object") {
    return (category.slug || category.name || category.title || "").toLowerCase();
  }
  return String(category).toLowerCase();
}

export function getTagLabel(tag) {
  if (!tag) return "";
  if (typeof tag === "string") return tag;
  if (typeof tag === "object") {
    return tag.name || tag.title || tag.slug || "";
  }
  return String(tag);
}

export function normalizePost(post) {
  return {
    ...post,
    category: getCategoryLabel(post.category),
    categorySlug: getCategorySlug(post.category),
  };
}
