import React, { useEffect, useState } from "react";
import { mySearch } from "../utils/functions";
import styled from "styled-components";

const Search = ({
  projects,
  setProjects,
  projectsStart,
  setMessage,
  setshowMessage,
}) => {
  const [searchText, setsearchText] = useState("");
  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  useEffect(() => {
    const newData = mySearch(projectsStart, searchText);
    setProjects(newData);
    setshowMessage(true);
    setMessage(`There are ${newData.length} projects matching your criteria`);
    setTimeout(() => {
      setshowMessage(false);
    }, 3000);
  }, [searchText]);
  return (
    <Input
      type="search"
      name=""
      id=""
      placeholder="Search"
      value={searchText}
      onChange={handleChange}
    ></Input>
  );
};

const Input = styled.input`
  padding: 0.5rem;
  background: var(--clr-grey-9);
  border-radius: var(--radius);
  border-color: transparent;
  letter-spacing: var(--spacing);
`;

export default Search;
