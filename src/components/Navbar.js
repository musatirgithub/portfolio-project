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
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 45px;
      margin-left: -15px;
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
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
