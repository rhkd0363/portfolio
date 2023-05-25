import React from "react";
import { styled } from "styled-components";

const Project = (props) => {
  return <Wrapper ref={props.projectRef}>Project</Wrapper>;
};

const Wrapper = styled.article``;

export default Project;
