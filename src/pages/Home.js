import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="home-container">
        <h2 className="portfolio-name">Mehmet Uğur ŞATIR</h2>
        <h2>Frontend Developer</h2>
        <div className="content">
          <p>
            I've worked at diverse posts in different countries. Managed
            successful projects. Then decided to change my career path and in
            order to improve my coding skills I've attended an IT bootcamp and
            took online courses.
          </p>
          <p>
            Currently I'm developing frontend projects and receiving backend
            (Django) courses.
          </p>
          <p>
            I'm excited about knowing new people, cultures and learning new
            stuff. If you want to contact me about either web development or
            whatever you want please don't hesitate to contact.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .home-container {
    min-height: calc(100vh - 10rem);
    padding: 0.6rem 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    h2,
    h3 {
      text-align: center;
    }
    .portfolio-name {
      color: var(--clr-grey-4);
    }
    h2 {
      color: var(--clr-grey-1);
    }
    p {
      font-size: 1rem;
      color: var(--clr-grey-4);
      font-weight: 500;
      text-align: justify;
    }
  }

  @media (min-width: 992px) {
    .home-container {
      width: 35rem;
      margin: 0 auto;
      content {
        margin-top: 3rem;
      }
    }
  }
`;
export default Home;
