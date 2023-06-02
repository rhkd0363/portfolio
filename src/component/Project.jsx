import React from "react";
import { styled } from "styled-components";
import ProejctItem from "./project/ProejctItem";
import { wooahan, pickpacker, ssafit, live } from "./project/data";

const Project = (props) => {
  // const projectData = [wooahan, pickpacker, live, ssafit];
  const projectData = [wooahan, pickpacker, live];
  return (
    <Wrapper ref={props.projectRef}>
      <div className="inner">
        <div className="title">💻 PROJECT</div>
        <div className="project-list">
          {projectData.map((pjt) => {
            return <ProejctItem {...pjt} key={pjt.title} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: #ffce2a;

  .inner {
    max-width: 75rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    color: #ffffff;

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

    .project-list {
    }
  }
`;

export default Project;
