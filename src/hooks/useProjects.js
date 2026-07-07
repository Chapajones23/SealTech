import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api.js";

export function useProjects() {
  const [state, setState] = useState({ projects: [], loading: true, error: "" });

  useEffect(() => {
    let active = true;
    fetchProjects()
      .then((projects) => active && setState({ projects, loading: false, error: "" }))
      .catch((error) =>
        active && setState({ projects: [], loading: false, error: error.message })
      );
    return () => {
      active = false;
    };
  }, []);

  return state;
}
