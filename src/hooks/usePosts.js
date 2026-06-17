import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api.js";

export function usePosts() {
  const [state, setState] = useState({ posts: [], loading: true, error: "" });

  useEffect(() => {
    let active = true;
    fetchPosts()
      .then((posts) => active && setState({ posts, loading: false, error: "" }))
      .catch((error) =>
        active && setState({ posts: [], loading: false, error: error.message })
      );
    return () => {
      active = false;
    };
  }, []);

  return state;
}
