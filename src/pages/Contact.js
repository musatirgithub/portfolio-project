import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

const Contact = () => {
  const linkedin = "https://www.linkedin.com/in/mehmet-ugur-satir/";
  const github = "https://github.com/musatirgithub";
  return (
    <Wrapper>
      <div className="main-center">
        <ul>
          <li>
            <a href={linkedin}>
              <FaLinkedin size="60" color="var(--clr-grey-1)" />
            </a>
          </li>
          <li>
            <a href={github}>
              <FaGithubSquare size="60" color="var(--clr-grey-1)" />
            </a>
          </li>
          <li>
            <a href="mailto:musatir@gmail.com">
              <MdMail size="60" color="var(--clr-grey-1)" />
            </a>
          </li>
          <li>
            <a href="">
              <IoIosDocument size="60" color="var(--clr-grey-1)" />
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .main-center {
    min-height: calc(100vh - 15rem);
    margin-top: 5rem;
  }
  .main-center > ul {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }
`;

export default Contact;
