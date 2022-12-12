import React, { useEffect, useState } from "react";
import { mySort } from "../utils/functions";
import styled from "styled-components";

const Sort = ({ projects, setProjects }) => {
  const [sortValue, setsortValue] = useState("name-a");
  const handleSort = (e) => {
    setsortValue(e.target.value);
  };

  useEffect(() => {
    const newData = mySort(projects, sortValue);
    setProjects(newData);
  }, [sortValue]);
  return (
    <Wrapper>
      <h5>sort by</h5>
      <select
        name="sort"
        id="sort"
        value={sortValue}
        onChange={handleSort}
        className="sort-input"
      >
        <option value="name-a">Name (a-z)</option>
        <option value="name-z">Name (z-a)</option>
        <option value="create-date">Creation date</option>
        <option value="update-date">Update date</option>
        <option value="language">Language</option>
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5rem;
    background-color: var(--clr-grey-9);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
  }
`;

export default Sort;
