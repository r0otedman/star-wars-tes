import React from "react";
import { styled, keyframes } from "@mui/system";

const glitch1 = keyframes`
  0% { clip: rect(20px, 9999px, 80px, 0); }
  10% { clip: rect(50px, 9999px, 100px, 0); }
  20% { clip: rect(10px, 9999px, 60px, 0); }
  30% { clip: rect(40px, 9999px, 90px, 0); }
  40% { clip: rect(15px, 9999px, 70px, 0); }
  50% { clip: rect(25px, 9999px, 85px, 0); }
  60% { clip: rect(35px, 9999px, 95px, 0); }
  70% { clip: rect(5px, 9999px, 65px, 0); }
  80% { clip: rect(45px, 9999px, 105px, 0); }
  90% { clip: rect(30px, 9999px, 75px, 0); }
  100% { clip: rect(20px, 9999px, 80px, 0); }
`;

const glitch2 = keyframes`
  0% { clip: rect(60px, 9999px, 120px, 0); }
  10% { clip: rect(25px, 9999px, 75px, 0); }
  20% { clip: rect(35px, 9999px, 95px, 0); }
  30% { clip: rect(10px, 9999px, 50px, 0); }
  40% { clip: rect(45px, 9999px, 100px, 0); }
  50% { clip: rect(15px, 9999px, 70px, 0); }
  60% { clip: rect(40px, 9999px, 110px, 0); }
  70% { clip: rect(20px, 9999px, 85px, 0); }
  80% { clip: rect(30px, 9999px, 90px, 0); }
  90% { clip: rect(5px, 9999px, 55px, 0); }
  100% { clip: rect(60px, 9999px, 120px, 0); }
`;

const StyledGlitch = styled("h1")<{
  text: string;
  size: number;
  color: string;
}>(({ text, size, color }) => ({
  color,
  fontFamily: "sans-serif",
  fontWeight: 800,
  fontSize: `${size}px`,
  position: "relative",
  display: "flex",
  alignItems: "center",
  "&::before, &::after": {
    content: `"${text}"`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "inherit",
    overflow: "hidden",
  },
  "&::before": {
    left: "3px",
    textShadow: "-2px 0 red",
    animation: `${glitch1} 2s infinite linear alternate-reverse`,
  },
  "&::after": {
    left: "-3px",
    textShadow: "-2px 0 blue",
    animation: `${glitch2} 2s infinite linear alternate-reverse`,
  },
}));

export const GlitchText: React.FC<{
  text: string;
  size?: number;
  color?: string;
}> = ({ text, size = 80, color = "#fff" }) => {
  return (
    <StyledGlitch text={text} size={size} color={color}>
      {text}
    </StyledGlitch>
  );
};
