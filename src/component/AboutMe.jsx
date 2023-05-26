import React from "react";
import { styled } from "styled-components";
import calendar from "../assets/svg/calendar.svg";
import email from "../assets/svg/email.svg";
import github from "../assets/svg/github.svg";
import pencil from "../assets/svg/pencil.svg";
import person from "../assets/svg/person.svg";
import telephone from "../assets/svg/telephone.svg";

const AboutMe = (props) => {
  return (
    <Wrapper ref={props.aboutMeRef}>
      <div className="inner">
        <div className="title">🙋‍♂️ INTRODUCE</div>
        <div className="description">
          <div className="info-wrap">
            <div className="info-box">
              <img src={person} alt="person" />
              <div>
                <h3>이름</h3>
                <div>신현광</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <img src={telephone} alt="telephone" />
              <div>
                <h3>연락처</h3>
                <div>010-2559-0363</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <img src={calendar} alt="calendar" />
              <div>
                <h3>생년월일</h3>
                <div>1997.02.20</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <img src={email} alt="email" />
              <div>
                <h3>이메일</h3>
                <div>rhkd0363@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <img src={pencil} alt="pencil" />
              <div>
                <h3>학력</h3>
                <div>
                  <div>충북대학교</div> <div>(정보통신공학부)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <div className="info-box">
              <img src={github} alt="github" />
              <div>
                <h3>GIT-HUB</h3>
                <div>
                  <a
                    href="https://github.com/rhkd0363"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git-Hub 보러가기
                  </a>
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
  .inner {
    max-width: 75rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    opacity: 0.8;

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
        width: 33.33%;

        @media (max-width: 1024px) {
          width: 50%;
        }

        .info-box {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;
          max-width: 14rem;
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

export default AboutMe;
