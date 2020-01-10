import React,{Component} from 'react';
import './homePage.css'
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { slideInLeft,slideInRight } from 'react-animations';
import { connect } from 'react-redux';
import nitin from './circle-cropped-nitin.png';
import reha from './circle-cropped-reha.png';

const slideLeft = keyframes`${slideInLeft}`;

const SlideL = styled.div`
  animation: 2s ${slideLeft};
`;

const slideRight = keyframes`${slideInRight}`;

const SlideR = styled.div`
  animation: 2s ${slideRight};
`;

class AboutUs extends Component{
    render(){
        return(
            <div className='container'>
                <SlideL>
                    <div className='person row'>
                        <div className='col img'>
                            <img src={reha} className="responsive-img" />
                        </div>
                        <div className='col' style={{textAlign: "right"}}>
                        <h3 className='title'>Reha Santiago</h3>
                        <p className='content'>Hello, My name is Reha Santiago. I'm an engineering student who always tries to learn and explore different things. I love to plan my work and then proceed accordingly known as a good time keeper. You can find me on <a href="https://www.linkedin.com/in/reha-santiago-994467152/">Linkedin</a>, <a href="https://www.github.com/rehasantiago/">Github</a>.</p>
                        </div>
                        
                    </div>
                </SlideL>
                <br/>
                <SlideR>
                    <div className='person row'>
                        <div className='col'>
                        <h3 className='title'>Nitin Sahu</h3>
                        <p className='content'>Hi there 😊, I am a final year engineering student from <a href="http://www.dypatil.edu/mumbai/rait/" className="links" style={{color: "#2196F3"}}>RAIT</a>. I love to make fun projects and fix life problems with tech. I am coding for the past 3 years. You can find me more on <a href="https://www.quora.com/profile/Nitin-Sahu-23" className="links" style={{color: "#2196F3"}}>Quora</a>, <a href="https://stackoverflow.com/users/8871869/globefire?tab=profile" className="links" style={{color: "#2196F3"}}>Stackoverflow</a>, <a href="github.com/globefire" className="links" style={{color: "#2196F3"}}>Github</a>, <a href="https://www.linkedin.com/in/nitin-sahu-globefire/" className="links" style={{color: "#2196F3"}}>Linkedin</a> than in the real world. Feel free to connect me :)</p>
                        </div>
                        <div className='col nitin-img' style={{textAlign: "right"}}>
                            <img src={nitin} className="responsive-img"/>
                        </div>
                    </div>
                </SlideR>
            </div>
        )
    }
}

export default AboutUs;