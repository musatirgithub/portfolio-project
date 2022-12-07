import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Sidebar = ({ setSidebarIsOpen, sidebarIsOpen }) => {
  return (
    <SidebarContainer>
      <aside className={sidebarIsOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="close-btn"
            type="button"
            onClick={() => setSidebarIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/" onClick={() => setSidebarIsOpen(false)}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setSidebarIsOpen(false)}>
              about
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setSidebarIsOpen(false)}>
              projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setSidebarIsOpen(false)}>
              contact
            </Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    width: 95vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-grey-1);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-grey-4);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-5);
    color: var(--clr-grey-8);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar-header {
      width: 90vw;
    }
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
