import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";
import axios from "axios";
import loading from "../assets/loading.gif";
import styled from "styled-components";
import {
  FaCalendar,
  FaCode,
  FaCodeBranch,
  FaCodepen,
  FaCodiepie,
  FaCoffee,
} from "react-icons/fa";

const Projects = () => {
  const url = "https://api.github.com/users/musatirgithub/repos?per_page=100";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  const myDate = (a) =>
    a.getDay().length === 1 ? "0" + String(a.getDay()) : String(a.getDay());

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProjects(data);
      console.log(data);
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
    // return (
    //   <div className="section-center">
    //     <img src={loading} alt="loading" />
    //   </div>
    // );
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      {projects?.map((project, index) => {
        const { name, created_at, updated_at, language, html_url } = project;
        return (
          <div className="card-container" key={index}>
            <h5>{name}</h5>
            <div className="inner">
              <div className="withdrawn-data">
                <FaCalendar className="icon" />
                {`Created : ${created_at.slice(0, 10).replace(/-/g, "/")}`}
              </div>
              <div className="withdrawn-data">
                <FaCalendar className="icon" />
                {`Updated : ${updated_at.slice(0, 10).replace(/-/g, "/")}`}
              </div>
              <div className="withdrawn-data">
                <FaCode className="icon" />
                {`Language: ${language}`}
              </div>
            </div>
            <button type="button" className="btn">
              <a href={html_url}>github repo</a>
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 95%;
  margin: 3rem auto 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  .card-container {
    width: 300px;
    height: 300px;
    color: var(--clr-grey-9);
    background-color: var(--clr-grey-2);
    border-radius: 5px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h5 {
      text-align: center;
    }
    .inner {
    }
    .withdrawn-data {
      padding-left: 1.5rem;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .icon {
      padding-right: 0.8rem;
      font-size: 2rem;
    }
    a {
      color: var(--clr-grey-9);
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
    }
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;
export default Projects;
