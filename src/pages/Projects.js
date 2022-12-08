import React from "react";
import { useState, useEffect } from "react";

const Projects = () => {
  const url = "https://api.github.com/users/musatirgithub/repos?per_page=100";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(url);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Projects</div>;
};

export default Projects;
