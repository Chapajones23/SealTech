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
