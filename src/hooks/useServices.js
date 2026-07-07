import { useEffect, useState } from "react";
import { fetchServices } from "../services/api.js";

export function useServices() {
  const [state, setState] = useState({ services: [], loading: true, error: "" });

  useEffect(() => {
    let active = true;
    fetchServices()
      .then((services) => active && setState({ services, loading: false, error: "" }))
      .catch((error) =>
        active && setState({ services: [], loading: false, error: error.message })
      );
    return () => {
      active = false;
    };
  }, []);

  return state;
}
