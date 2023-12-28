export const fetchAllTechs = async () => {
  const response = await fetch("/api/tech", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  return result;
};
