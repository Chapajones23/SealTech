import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api.js";
import { normalizePost } from "../utils/navigation.js";

export function usePosts() {
  const [state, setState] = useState({ posts: [], loading: true, error: "" });

  useEffect(() => {
    let active = true;
    fetchPosts()
      .then((posts) => {
        if (!active) return;
        const normalizedPosts = Array.isArray(posts) ? posts.map(normalizePost) : [];
        setState({ posts: normalizedPosts, loading: false, error: "" });
      })
      .catch((error) =>
        active && setState({ posts: [], loading: false, error: error.message })
      );
    return () => {
      active = false;
    };
  }, []);

  return state;
}
