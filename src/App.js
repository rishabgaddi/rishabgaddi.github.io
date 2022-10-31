import { Fireworks } from '@fireworks-js/react';
import styled from "styled-components";
import { keyframes } from "styled-components";

function App() {
  return (
    <>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000'
        }}
        />
        <div style={{
          position: "absolute",
          color: "white",
          width: "100%",
        }}>
          <AnimatedGradientText>Rishab Gaddi</AnimatedGradientText>
          {/* https://github.com/rishabgaddi/rishabgaddi.github.io/blob/gh-pages/HappyBirthday-PMS.M4V?raw=true */}
        </div>
    </>
  );
}

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-align: center;
  font-size: 28px;
`;

export default App;
