import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 150px;
  height: 150px;
  border: 5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  margin: 20px;
  position: relative;
  &:hover {
    border-color: ${(props) => props.color};
  }

  p {
    text-transform: uppercase;
    color: white;
    opacity: 0;
  }
  span {
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
`;

const colors = ["#72147e", "#f21170", "#fa9905", "#ff5200"];

const ChangeLetters = (props) => {
  const [color, setColor] = useState();
  const containerRef = useRef(null);
  const ref = useRef(null);
  const { word } = props;
  const [hovered, setHovered] = useState(false);
  const [wordArray, setWordArray] = useState(word.split(""));
  const [wordIndex, setWordIndex] = useState(-1);

  //methods

  const handleHoverOut = () => {
    setHovered(false);
    setWordIndex(wordArray.length - 1);
  };

  //turn hovered state on
  const hoverState = () => {
    setColor(colors[Math.floor(Math.random() * 4)]);
    setHovered(true);
    setWordIndex(0);
  };

  const animation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, {
      opacity: 1,
      //   duration: 0.2,
    }).to(ref.current, {
      //   delay: 0.2,
      //   //   opacity: 0,
      //   duration: 0.2,
      onComplete: () => {
        if (wordIndex < wordArray.length - 1) {
          setWordIndex(wordIndex + 1);
        } else if (wordIndex === wordArray.length - 1) {
          return;
        }
      },
    });
  };

  useEffect(() => {
    animation();
  }, [wordIndex]);

  return (
    <>
      <Container
        ref={containerRef}
        color={color}
        onMouseEnter={hoverState}
        onMouseLeave={handleHoverOut}
      >
        {/* {hovered ? <span>{word[wordIndex]}</span> : null} */}
        {hovered ? <p ref={ref}>{word[wordIndex]}</p> : null}
        <span>{props.word}</span>
      </Container>{" "}
    </>
  );
};

export default ChangeLetters;
