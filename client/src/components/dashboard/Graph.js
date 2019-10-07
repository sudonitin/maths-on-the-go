import React from "react";
import "./graph.css";
import Level from "./Level"
import styled, { keyframes } from 'styled-components';
import { slideInLeft,slideInRight } from 'react-animations';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Login from "../sign_in_out/Login";

const isEmpty = require('is-empty');

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
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if(isEmpty(user)) return <Redirect to='/login'/>
        return (
            <div className="container">
                <h2 className="yourScore">Your Progress!</h2>
                <SlideL><Level content="Piece of Cake - Level 1" score={user.level1} img="🍰" /></SlideL>
                <SlideR><Level content="Grapes - Level 2" score={user.level2} img="🍇" /></SlideR>
                <SlideL><Level content="Banana - Level 3" score={user.level3} img="🍌" /></SlideL>
                <SlideR><Level content="Apple - Level 4" score={user.level4} img="🍎" /></SlideR>
                <SlideL><Level content="Watermelon - Level 5" score={user.level5} img="🍉" /></SlideL>
                <SlideR><Level content="Coconuts - Level 6" score={user.level6} img="🥥" /></SlideR>
            </div>
        )
    }
}

function mapStateToProps(state){
  const {user} = state;  
  //console.log(user);
  return {user};
}

export default connect(
  mapStateToProps
)(Graph);

