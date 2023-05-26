import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import banner from "../assets/image/banner.jpg";

const MainBanner = (props) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const setAnimation = () => {
      if (window.scrollY < 574) {
        setIsScrollTop(true);
      } else {
        setFirst(false);
        setSecond(false);
        setIsScrollTop(false);
      }
    };

    window.addEventListener("scroll", setAnimation);

    return () => {
      window.removeEventListener("scroll", setAnimation);
    };
  }, []);

  useEffect(() => {
    if (!isScrollTop) return;

    const doAnimation = () => {
      setTimeout(() => {
        setFirst(true);
      }, 1000);
    };

    const attachEventListener = () => {
      let first = document.getElementById("first");
      if (first) {
        first.addEventListener("animationstart", doAnimation);
      }
    };

    attachEventListener();

    return () => {
      let first = document.getElementById("first");
      if (first) {
        first.removeEventListener("animationstart", doAnimation);
      }
    };
  }, [isScrollTop]);

  useEffect(() => {
    if (!first) return;

    const doAnimation = () => {
      setTimeout(() => {
        setSecond(true);
      }, 1300);
    };

    const attachEventListener = () => {
      let second = document.getElementById("second");
      if (second) {
        second.addEventListener("animationstart", doAnimation);
      }
    };

    attachEventListener();

    return () => {
      let second = document.getElementById("second");
      if (second) {
        second.removeEventListener("animationstart", doAnimation);
      }
    };
  }, [first]);

  return (
    <MainHead>
      <div className="greeting">
        <div className="title">
          - 신현광 -
          <br />
          개발자 포트폴리오
        </div>
        <hr />
        <div className="description">
          {isScrollTop ? (
            <>
              <div id="first">협업과 소통을 좋아하며</div>
              {first ? (
                <div id="second">새로운 기술에 두려움이 없는</div>
              ) : (
                <div></div>
              )}
              {second ? (
                <div id="third">꾸준히 성장하는 개발자 신현광입니다(●'◡'●)</div>
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <>
              <div></div>
              <div></div>
              <div></div>
            </>
          )}
        </div>
        <button
          onClick={() => {
            props.onAboutMeClick();
          }}
        >
          MORE ▼
        </button>
      </div>
    </MainHead>
  );
};

const MainHead = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #feedcf78;
  background-blend-mode: multiply;
  overflow: hidden;

  .greeting {
    max-width: 75rem;
    margin: 0 auto;
    padding: 8rem 0 4rem;
    letter-spacing: 0.4rem;

    @media (max-width: 800px) {
      letter-spacing: 0.1rem;
    }

    .title {
      color: #ffffff;
      font-size: 3rem;
      font-weight: 900;
      line-height: 4rem;
    }

    hr {
      width: 2rem;
      margin: 2.5rem auto;
    }

    .description {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 1rem auto 4rem;
      color: #d9d9d9;

      div {
        width: 100%;
        line-height: 2.5rem;
        height: 2.5rem;
        overflow: hidden;
        margin: 0 auto;

        @-webkit-keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      }

      #first {
        -webkit-animation: typing 1s steps(50, end);
        animation: typing 3s steps(50, end);
      }
      #second {
        -webkit-animation: typing 1s steps(50, end);
        animation: typing 3s steps(50, end);
      }
      #third {
        -webkit-animation: typing 1s steps(50, end);
        animation: typing 3s steps(50, end);
      }
    }

    button {
      border-radius: 2rem;
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      color: #ffffff;
      line-height: 1.5rem;
      letter-spacing: 0.25rem;
      background: #c83333;
      cursor: pointer;
      transition: ease 0.2s all;
    }

    button:hover {
      background: #ff4141;
    }
  }
`;

export default MainBanner;
