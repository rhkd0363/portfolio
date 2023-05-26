import React, { useState } from "react";
import { styled } from "styled-components";

const ProejctItem = (props) => {
  const [imageFocus, setImageFocus] = useState(0);
  const [isImageClick, setIsImageClick] = useState(false);

  return (
    <Container className="info-wrap">
      <div className="header-box">
        <div className="pjt-title">{props.title}</div>
        <div className="pjt-duration">{props.duration}</div>
      </div>
      <div className="info-box">
        <div className="left">
          <img
            src={props.images[imageFocus]}
            alt="#"
            onClick={() => {
              setIsImageClick(!isImageClick);
            }}
          />
          <div className="img-control">
            <button
              onClick={() => {
                if (imageFocus > 0) {
                  setImageFocus(imageFocus - 1);
                }
              }}
            >
              {"<"}
            </button>
            <div className="img-number">
              {imageFocus + 1} / {props.images.length}
            </div>
            <button
              onClick={() => {
                if (imageFocus + 1 < props.images.length) {
                  setImageFocus(imageFocus + 1);
                }
              }}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="right">
          <div className="pjt-description">
            <div>{props.desc}</div>
            <div>{props.takeAway}</div>
            <div className="link-btn">
              <a href={props.link} target="_blank" rel="noreferrer">
                Git-Hub 보러가기
              </a>
            </div>
            {/* <div className="main-func">
              <h3>주요 기능</h3>
              <div>{props.mainFunc}</div>
            </div>
            <div className="use-skill">
              <h3>사용 기술</h3>
              <div>{props.stacks}</div>
            </div> */}
          </div>
        </div>
      </div>
      <hr className="pjt-line" />
      <div className="info-box">
        <div className="right">
          <div className="pjt-description">
            <div className="main-func">
              <h3>주요 기능</h3>
              <div>{props.mainFunc}</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="pjt-description">
            <div className="position">
              <h3>역할</h3>
              <div>{props.position}</div>
            </div>
            <div className="use-skill">
              <h3>사용 기술</h3>
              <div>{props.stacks}</div>
            </div>
          </div>
        </div>
      </div>
      {isImageClick && (
        <div
          className="wrap-all"
          onClick={() => {
            setIsImageClick(!isImageClick);
          }}
        >
          <div className="image-detail">
            <img src={props.images[imageFocus]} alt="none" />
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff;
  color: #000000;
  padding: 3rem 0 1rem;
  border-radius: 2rem;
  font-family: "ChosunBg";
  margin: 0 auto 4rem;

  .header-box {
    margin: 0 0 3rem;

    .pjt-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 1rem;
      letter-spacing: 0.1rem;
    }

    .pjt-duration {
      font-size: 1.125rem;
      font-weight: 700;
      opacity: 0.75;
    }

    @media (max-width: 1024px) {
      margin: 0 0 1.5rem;

      .pjt-title {
        font-size: 1.75rem;
      }

      .pjt-duration {
        font-size: 1rem;
      }
    }
  }

  .pjt-line {
    width: 100%;
    margin: 1rem auto;

    @media (max-width: 1024px) {
      width: 90%;
    }
  }

  .info-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 1rem;

    .left {
      width: 44%;
      margin: 0 auto 2rem;

      img {
        width: 100%;
        height: 25rem;
        margin: 0 auto 2rem;
        border-radius: 1rem;
        cursor: pointer;
        box-shadow: 0 0 0.25rem #000;
        transition: ease 0.2s all;
      }

      img:hover {
        box-shadow: 0 0 1rem #000;
      }

      .img-control {
        display: flex;
        justify-content: center;

        button {
          background: none;
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          font-size: 1.5rem;
          border: none;
          margin: 0 0.5rem;
          border-radius: 10rem;
          cursor: pointer;
          opacity: 0.8;
        }

        button:hover {
          color: orange;
        }

        .img-number {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 2rem;
        }
      }
    }

    .right {
      width: 44%;
      margin: 0 auto;
      letter-spacing: 1px;

      .pjt-description {
        line-height: 1.5rem;
        color: #3e3e3e;

        div {
          text-align: start;
          word-wrap: break-word;
          white-space: pre-wrap;
          margin: 0 0 1rem;

          b {
            font-weight: 600;
            color: #f03d3d;
          }

          h3 {
            margin: 0.5rem 0;
          }
        }

        .link-btn {
          margin: 2rem 0 1.5rem;
          display: flex;
          justify-content: center;

          a {
            display: inline-block;
            background: #000000;
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            text-decoration: none;
            color: white;
            transition: ease 0.2s all;
          }

          a:hover {
            box-shadow: 0 0 0.5rem #000000;
            opacity: 0.8;
          }
        }

        .main-func {
          margin-bottom: 2rem;
          p {
            margin: 0.5rem;
          }
        }

        .position {
          margin-bottom: 2rem;
        }

        .use-skill {
          margin-bottom: 2rem;
        }
      }
    }

    @media (max-width: 1024px) {
      .left {
        width: 90%;

        img {
          height: 45vw;
        }
      }
      .right {
        width: 90%;
      }
    }
  }

  .wrap-all {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    display: flex;
    background: #d9d9d999;
    cursor: pointer;

    .image-detail {
      margin: auto auto;

      img {
        width: 100%;
      }
    }
  }
`;

export default ProejctItem;
