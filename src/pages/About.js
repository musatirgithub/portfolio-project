import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <Wrapper>
      <div className="content">
        <h3>Tools & technologies i use</h3>
        <ul>
          <li>
            <FaCheck /> React
          </li>
          <li>
            <FaCheck /> JavaScript
          </li>
          <li>
            <FaCheck /> Python
          </li>
          <li>
            <FaCheck /> HTML5
          </li>
          <li>
            <FaCheck /> CSS3
          </li>
          <li>
            <FaCheck /> SASS/SCSS
          </li>
          <li>
            <FaCheck /> Bootstrap
          </li>
          <li>
            <FaCheck /> MUI
          </li>
          <li>
            <FaCheck /> SDLC & Agile
          </li>
          <li>
            <FaCheck /> Git & Github
          </li>
          <li>
            <FaCheck /> Linux
          </li>
          <li>
            <FaCheck /> PostgreSQL
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .content {
    padding-top: 1rem;
    min-height: calc(100vh - 10rem);
    width: 95vw;
    margin: 0 auto;
    h3 {
      text-align: center;
    }
    ul {
      padding-top: 1rem;
      width: max-content;
      margin: 0 auto;
    }
    li {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  @media (min-width: 992px) {
    .content {
      padding-top: 5rem;
      ul {
        padding-top: 3rem;
      }
    }
  }
`;
export default About;
