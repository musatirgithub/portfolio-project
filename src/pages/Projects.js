import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";
import styled from "styled-components";
import { FaCalendar, FaCode } from "react-icons/fa";
import Search from "../components/Search";
import Filters from "../components/Filters";
import Sort from "../components/Sort";

const Projects = () => {
  const url = "https://api.github.com/users/musatirgithub/repos?per_page=100";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projectsStart, setprojectsStart] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showMessage, setshowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setprojectsStart(data);
      setProjects(data);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <section>
        <div className="loading"></div>
        <PlaceHolder />
      </section>
    );
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {showMessage && <MessageBig>{message}</MessageBig>}
      <Wrapper>
        <div className="filters">
          <Search
            projectsStart={projectsStart}
            projects={projects}
            setProjects={setProjects}
            setMessage={setMessage}
            setshowMessage={setshowMessage}
          />
          <Filters
            projectsStart={projectsStart}
            projects={projects}
            setProjects={setProjects}
            setMessage={setMessage}
            setshowMessage={setshowMessage}
          />
          <Sort projects={projects} setProjects={setProjects} />
          {showMessage && <MessageSmall>{message}</MessageSmall>}
        </div>

        <div className="cards">
          {projects?.map((project, index) => {
            const { name, created_at, updated_at, language, html_url } =
              project;
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
                {/* <div className="btn-container"> */}
                <button type="button" className="btn">
                  <a href={html_url} target="_blank">
                    github repo
                  </a>
                </button>
                {/* <button type="button" className="btn">
                    <a
                      href={"https://musatirgithub.github.io/" + name}
                      target="_blank"
                    >
                      live project
                    </a>
                  </button> */}
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

const MessageBig = styled.div`
  display: none;
  text-align: center;
  color: var(--clr-red-dark);
  font-weight: 600;
  @media (min-width: 992px) {
    display: block;
  }
`;

const MessageSmall = styled.div`
  margin-top: 1rem;
  display: block;
  text-align: center;
  color: var(--clr-red-dark);
  font-weight: 600;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .big-screen {
    display: none;
    color: red;
    font-weight: 600;
  }
  .filters {
    margin: 0 auto;
  }
  .cards {
    width: 95%;
    margin: 1rem auto 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3rem;
  }
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
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.05);
    }
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
    display: flex;
    flex-direction: row;
    gap: 3rem;
    margin: 0 auto;
    .filters {
      margin: 3rem 0;
    }
    .cards {
      margin: 3rem auto 3rem;
    }
    .big-screen {
      text-align: center;
      color: var(--clr-red-dark);
    }
  }
`;

const PlaceHolder = styled.div`
  height: calc(100vh-16rem);
`;
export default Projects;
