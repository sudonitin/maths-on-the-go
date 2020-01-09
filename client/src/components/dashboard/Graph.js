import React from "react";
import "./graph.css";
import Level from "./Level"
import styled, { keyframes } from 'styled-components';
import { slideInLeft,slideInRight } from 'react-animations';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import Login from "../sign_in_out/Login";
import { setLevel } from '../../actions'

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
    clickItem(level){
      //console.log(level)
      this.props.setLevel(level);
      this.props.history.push('/categories');
    }
    render(){
      //localStorage.clear();
      //console.log(this.props.user); 
      const user = JSON.parse(localStorage.getItem('user'));
      //console.log(user);
      if(isEmpty(user)) return <Redirect to='/login'/>
        return (
            <div className="container">
                <h2 className="yourScore">Your Progress!</h2>
                <SlideL><Level content="Piece of Cake - Level 1" score={user.level1} level="level1" clickItem={this.clickItem.bind(this,'level1')}  threshold="10" img="🍰" /></SlideL>
                <SlideR><Level content="Grapes - Level 2" score={user.level2} locked={parseInt(user.level1)<10} clickItem={this.clickItem.bind(this,'level2')}  level="level2" threshold="50" img="🍇" /></SlideR>
                <SlideL><Level content="Banana - Level 3" score={user.level3} locked={parseInt(user.level2)<50} clickItem={this.clickItem.bind(this,'level3')} level="level3" threshold="100" img="🍌" /></SlideL>
                <SlideR><Level content="Apple - Level 4" score={user.level4} locked={parseInt(user.level3)<100} clickItem={this.clickItem.bind(this,'level4')} level="level4" threshold="250" img="🍎" /></SlideR>
                <SlideL><Level content="Watermelon - Level 5" score={user.level5} locked={parseInt(user.level4)<250} clickItem={this.clickItem.bind(this,'level5')} level="level5" threshold="500" img="🍉" /></SlideL>
                <SlideR><Level content="Coconuts - Level 6" score={user.level6} locked={parseInt(user.level6)<500} clickItem={this.clickItem.bind(this,'level6')} level="level6" threshold="500" img="🥥" /></SlideR>
            </div>
        )
    }
}


function mapStateToProps(state){
  const {user} = state;  
  //console.log(user);
  return {user};
}

function mapDispatchToProps(dispatch){
  return {
    setLevel:(level) => dispatch(setLevel(level))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph);

