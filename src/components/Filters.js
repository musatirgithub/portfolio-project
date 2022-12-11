import React, { useEffect, useState } from "react";
import { langs, mySort, myFilter, mySearch } from "../utils/functions";
import styled from "styled-components";

const Filters = ({ projects, setProjects, projectsStart }) => {
  const filterCriterias = langs(projectsStart);
  const [filter, setfilter] = useState("");

  useEffect(() => {
    const filteredData = myFilter(projectsStart, filter);
    setProjects(filteredData);
  }, [filter]);

  return (
    <Wrapper>
      <h5>Project Filters</h5>
      {filterCriterias?.map((criteria, index) => {
        return (
          <h5
            key={index}
            className={
              criteria.toLowerCase() === filter.toLowerCase()
                ? "criteria active"
                : "criteria"
            }
            onClick={(e) => setfilter(e.target.innerText)}
          >
            {criteria}
          </h5>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  .criteria {
    color: var(--clr-grey-3);
    cursor: pointer;
  }
  .active {
    color: var(--clr-grey-1);
    background-color: var(--clr-grey-8);
  }
`;

export default Filters;
