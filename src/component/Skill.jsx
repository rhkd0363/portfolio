import React from "react";
import { styled } from "styled-components";
import front from "../assets/image/front-skills.png";
import back from "../assets/image/back-skills.png";
import mobile from "../assets/image/mobile-skills.png";
import etc from "../assets/image/etc-skills.png";

const Skill = (props) => {
  return (
    <Wrapper ref={props.skillRef}>
      <div className="inner">
        <div className="title">SKILLS</div>
        <div className="description">
          <div className="left">
            <div className="info-wrap">
              <div>Frontend</div>
              <hr />
              <img src={front} alt="front" />
            </div>
            <div className="info-wrap">
              <div>Mobile App</div>
              <hr />
              <img src={mobile} alt="mobile" />
            </div>
          </div>
          <div className="right">
            <div className="info-wrap">
              <div>Backend</div>
              <hr />
              <img src={back} alt="back" />
            </div>
            <div className="info-wrap">
              <div>Version Control & Community</div>
              <hr />
              <img src={etc} alt="etc" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: orange;

  .inner {
    max-width: 75rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    color: #ffffff;

    .left {
      width: 50%;
    }

    .right {
      width: 50%;
    }

    .title {
      font-size: 3rem;
      font-weight: 900;
      line-height: 4rem;
      margin-bottom: 4rem;
    }

    .description {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .info-wrap {
        width: 80%;
        min-width: 25rem;
        margin: 0 auto 2rem;
        background: #ffffff;
        border-radius: 2rem;
        color: #000000;

        div {
          font-size: 1.5rem;
          padding: 1rem 0;
          opacity: 0.8;
          font-weight: 700;
        }

        hr {
          width: 80%;
          border: 1.5px solid black;
          margin: 0 auto 0.5rem;
        }
      }
    }

    @media (max-width: 1024px) {
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }
    }
  }
`;

export default Skill;
