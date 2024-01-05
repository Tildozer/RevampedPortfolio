export const fetchAllTechs = async () => {
  const response = await fetch("/api/tech", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const results = await response.json();
  return results;
};

export const fetchAllProjects = async () => {
  const response = await fetch("/api/projects", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const results = await response.json();
  return results;
};
