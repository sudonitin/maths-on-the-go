import React from "react";
import "./graph.css";
import Level from "./Level"
import styled, { keyframes } from 'styled-components';
import { slideInLeft,slideInRight } from 'react-animations';

const slideLeft = keyframes`${slideInLeft}`;

const SlideL = styled.div`
  animation: 2s ${slideLeft};
`;

const slideRight = keyframes`${slideInRight}`;

const SlideR = styled.div`
  animation: 2s ${slideRight};
`;

class Graph extends React.Component{
    render(){
        return (
            <div className="container">
                <h2 className="yourScore">Your Progress!</h2>
                <SlideL><Level content="Piece of Cake - Level 1" score="5" img="🍰" /></SlideL>
                <SlideR><Level content="Grapes - Level 2" score="20" img="🍇" /></SlideR>
                <SlideL><Level content="Banana - Level 3" score="50" img="🍌" /></SlideL>
                <SlideR><Level content="Apple - Level 4" score="0" img="🍎" /></SlideR>
                <SlideL><Level content="Watermelon - Level 5" score="0" img="🍉" /></SlideL>
                <SlideR><Level content="Coconuts - Level 6" score="0" img="🥥" /></SlideR>
            </div>
        )
    }
}
export default Graph;

