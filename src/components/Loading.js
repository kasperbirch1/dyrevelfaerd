import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
   margin: 2rem auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid transparent;
  border-right: 3px solid black;
  border-bottom: 3px solid transparent;
  border-left: 3px solid black;
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

export default Spinner;