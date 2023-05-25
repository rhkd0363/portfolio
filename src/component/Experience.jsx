import React from "react";
import { styled } from "styled-components";

const Experience = (props) => {
  return (
    <Wrapper ref={props.experienceRef}>
      <div className="inner">
        <div className="title">🎓 EXPERIENCE</div>
        <div className="description">
          <div className="info-wrap">
            <div className="info-box">
              <div>
                <h3>
                  삼성 청년 SW 아카데미
                  <br />
                  SSAFY
                </h3>
                <div>2022.07 ~ 2023.06</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <div>
                <h3>
                  (주)선일다이파스
                  <br />
                  정보기획팀
                </h3>
                <div>2021.03 ~ 2022.04</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <div>
                <h3>
                  충북대학교
                  <br />
                  정보통신공학부
                </h3>
                <div>2015.03 ~ 2021.08</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <div>
                <h3>청석고등학교</h3>
                <div>2012.03 ~ 2015.02</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #3d3838;

  .inner {
    max-width: 75rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    opacity: 0.8;
    color: #ffffff;

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
        width: 50%;

        @media (max-width: 1024px) {
          width: 100%;
        }

        .info-box {
          display: flex;
          flex-flow: column nowrap;
          width: 100%;
          max-width: 20rem;
          margin: 0 auto 3rem;

          img {
            width: 2.25rem;
            height: 2.25rem;
            margin: 0.75rem 1rem 0 0;
          }

          div {
            text-align: start;
            h3 {
              font-size: 1.5rem;
              margin: 0 0 0.25rem;
            }
            div {
              font-size: 1rem;
              font-weight: 600;

              a {
                color: #000000;
              }
            }
          }
        }
      }
    }
  }
`;

export default Experience;
