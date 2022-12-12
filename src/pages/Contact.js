import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import styled from "styled-components";

const Contact = () => {
  const linkedin = "https://www.linkedin.com/in/mehmet-ugur-satir/";
  const github = "https://github.com/musatirgithub";
  return (
    <Wrapper>
      <div className="main-center">
        <ul>
          <li>
            <a href={linkedin}>
              <FaLinkedin color="var(--clr-grey-1)" className="link-icon" />
            </a>
          </li>
          <li>
            <a href={github}>
              <FaGithubSquare color="var(--clr-grey-1)" className="link-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:musatir@gmail.com">
              <MdMail color="var(--clr-grey-1)" className="link-icon" />
            </a>
          </li>
          {/* <li>
            <a href="">
              <IoIosDocument color="var(--clr-grey-1)" className="link-icon" />
            </a>
          </li> */}
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

  .link-icon {
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    .link-icon {
      font-size: 6rem;
    }
    .main-center > ul {
      gap: 5rem;
    }
  }
`;

export default Contact;
