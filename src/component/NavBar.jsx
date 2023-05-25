import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NavBar = (props) => {
  const [isMenuClick, setIsMenuClick] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const setVisible = () => {
      if (window.innerWidth > 1024) setIsMenuClick(false);
    };

    const setColor = () => {
      if (window.scrollY < 574) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    };

    window.addEventListener("resize", setVisible);

    window.addEventListener("scroll", setColor);

    return () => {
      window.removeEventListener("resize", setVisible);
      window.removeEventListener("scroll", setColor);
    };
  }, []);

  return (
    <Header isScrollTop={isScrollTop}>
      <div className="section">
        <div
          className="title"
          onClick={() => {
            props.onTitleClick();
          }}
        >
          SHK's Portfolio
        </div>
        <div className="navigation-menu">
          <MenuList {...props} />
        </div>
        <div className="hamburger-menu">
          <div
            className="menu-btn"
            onClick={() => {
              setIsMenuClick(!isMenuClick);
            }}
          >
            ☰
          </div>
        </div>
      </div>
      {isMenuClick ? (
        <div className="menu-list">
          <MenuList {...props} setIsMenuClick={setIsMenuClick} />
        </div>
      ) : (
        <></>
      )}
    </Header>
  );
};

const MenuList = (props) => {
  const menuClick = () => {
    if (props.setIsMenuClick) props.setIsMenuClick(false);
  };

  return (
    <>
      <div
        onClick={() => {
          props.onAboutMeClick();
          menuClick();
        }}
      >
        About Me
      </div>
      <div
        onClick={() => {
          props.onSkillClick();
          menuClick();
        }}
      >
        Skills
      </div>
      <div
        onClick={() => {
          props.onExperienceClick();
          menuClick();
        }}
      >
        Experience
      </div>
      <div
        onClick={() => {
          props.onAwardCertificateClick();
          menuClick();
        }}
      >
        Award & Certificate
      </div>
      <div
        onClick={() => {
          props.onProjectClick();
          menuClick();
        }}
      >
        Project Summary
      </div>
    </>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${(props) => (props.isScrollTop ? "none" : "#ffffff")};
  color: ${(props) => (props.isScrollTop ? "#ffffff" : "#000000")};
  box-shadow: ${(props) =>
    props.isScrollTop ? "none" : "0 1px 0.3rem hsla(0, 0%, 80%, 0.8)"};

  .section {
    width: calc(100% - 2rem);
    max-width: 75rem;
    margin: 0 auto;
    line-height: 2rem;
    opacity: 0.75;
    padding: 1rem;
    height: 2.25rem;

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      float: left;
      cursor: pointer;
      transition: ease 0.2s all;
    }

    .title:hover {
      color: orange;
    }

    .navigation-menu {
      font-size: 1.25rem;
      font-weight: 700;
      float: right;

      div {
        display: inline-block;
        padding: 0 1rem;
        cursor: pointer;
      }

      :hover {
        opacity: 0.5;
      }
    }

    .hamburger-menu {
      font-size: 1.25rem;
      font-weight: 700;
      float: right;
      display: none;

      .menu-btn {
        cursor: pointer;
      }
    }

    @media (max-width: 1024px) {
      .navigation-menu {
        display: none;
      }

      .hamburger-menu {
        display: block;
      }
    }
  }

  @media (max-height: 1px) {
    background: #ffffff;
    color: #000000;
  }

  @media (max-width: 1024px) {
    background: #ffffff;
    color: #000000;

    .menu-list {
      div {
        -webkit-animation: slide-bottom 0.4s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

        @-webkit-keyframes slide-bottom {
          0% {
            height: 0;
            padding: 0;
          }
          100% {
            height: 100%;
            padding: 1rem 0;
          }
        }
        @keyframes slide-bottom {
          0% {
            height: 0;
            padding: 0;
          }
          100% {
            height: 100%;
            padding: 1rem 0;
          }
        }
        padding: 1rem 0;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 3rem;
        transition: ease 0.2s all;
        cursor: pointer;
      }

      :hover {
        background: #f9f9f9;
        color: orange;
      }
    }
  }
`;

export default NavBar;
