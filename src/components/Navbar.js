import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const handleToggle = () => {
    setSidebarIsOpen(true);
  };
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {sidebarIsOpen ? (
            <Sidebar
              setSidebarIsOpen={setSidebarIsOpen}
              sidebarIsOpen={sidebarIsOpen}
            />
          ) : (
            <button type="button" className="nav-toggle" onClick={handleToggle}>
              <FaBars />
            </button>
          )}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 45px;
      margin-left: 0px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-grey-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-toggle:hover {
    color: var(--clr-grey-4);
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      width: 35rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      cursor: pointer;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-1);
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-grey-1);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
