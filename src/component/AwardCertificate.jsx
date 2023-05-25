import React from "react";
import { styled } from "styled-components";

const AwardCertificate = (props) => {
  return (
    <Wrapper ref={props.awardCertificateRef}>
      <div className="inner">
        <div className="part">
          <div className="title">🏆 AWARD</div>
          <div className="description">
            <div className="info-wrap">
              <div className="info-box">
                <div>
                  <h3>
                    자율프로젝트 우수상(3등)
                    <br />
                    삼성 청년 SW 아카데미
                  </h3>
                  <div>2023.06</div>
                </div>
              </div>
            </div>
            <div className="info-wrap">
              <div className="info-box">
                <div>
                  <h3>
                    공통프로젝트 최우수상(1등)
                    <br />
                    삼성 청년 SW 아카데미
                  </h3>
                  <div>2023.03</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="part">
          <div className="title">🔖 CERTIFICATE</div>
          <div className="description">
            <div className="info-wrap">
              <div className="info-box">
                <div>
                  <h3>
                    SQLD
                    <br />
                    한국데이터산업진흥원
                  </h3>
                  <div>2022.12</div>
                </div>
              </div>
            </div>
            <div className="info-wrap">
              <div className="info-box">
                <div>
                  <h3>
                    정보처리기사
                    <br />
                    과학기술정보통신부
                  </h3>
                  <div>2020.11</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #7dade1;

  .inner {
    max-width: 75rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    opacity: 0.8;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;

    .part {
      width: 50%;
    }

    @media (max-width: 1024px) {
      .part {
        width: 100%;
      }
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
        width: 100%;

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

export default AwardCertificate;
