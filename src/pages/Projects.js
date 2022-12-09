import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";
import axios from "axios";

const Projects = () => {
  const url = "https://api.github.com/users/musatirgithub/repos?per_page=100";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {projects?.map((project, index) => {
        const { name } = project;
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};

export default Projects;
