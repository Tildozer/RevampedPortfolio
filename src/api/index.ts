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

export const sendEmail = async (
  message: string,
  name: string,
  contactInfo: string,
) => {
  const response = await fetch("/api/email", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      htmlStr: `
        <div>
          to get back in contact with ${name} 
          please use : 
          <br></br>
          ${contactInfo}
        </div>
        <div>${message}</div>
        `,
    }),
  });

  const results = await response.json();
  return results;
};
