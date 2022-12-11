import React, { useState } from "react";
import { mySort } from "../utils/functions";
import styled from "styled-components";

const Sort = ({ projects, setProjects }) => {
  const [sortValue, setsortValue] = useState("name-a");
  const handleSort = (e) => {
    setsortValue(e.target.value);
    setProjects(mySort(projects, sortValue));
    console.log(sortValue);
  };
  return (
    <Wrapper>
      <h5>sort by</h5>
      <select name="sort" id="sort" value={sortValue} onChange={handleSort}>
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
`;

export default Sort;
