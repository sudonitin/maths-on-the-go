import React,{Component} from 'react';
import Navbar from './layout/Navbar';
import './homePage.css'
import { Link } from 'react-router-dom';
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

class HomePage extends Component{
    render(){
        return(
            <section className='container'>
                <SlideL>
                    <div className='divs'>
                        <h3 className='title'>Are you a math lover💘?</h3>
                        <p className='content'>Well then there is no stopping you. Dive into the ocean of math problems with us. Now you can solve Maths on the go.</p>
                    </div>
                </SlideL>
                <SlideR>
                    <div className='divs'>
                        <h3 className='title'>What do we provide🎯?</h3>
                        <p className='content'>Different levels of questions suitable for you.  We aim to improve your speed of calculations by challenging you to solve a set of questions in a minute. So hang tight you've got a minute to win it!</p>
                    </div>
                </SlideR>
                <SlideL>
                    <div className='divs'>
                        <h3 className='title'>Who can play this🤔?</h3>
                        <p className='content'>Currently the creators of MTG suggest this game is for kids and teenagers. Who are in the group of 5-13 years.</p>
                    </div>
                </SlideL>
                <SlideR>
                    <div className='divs'>
                        <h3 className='title'>Ready to rock🤩?</h3>
                        <p className='content'>Not a member yet? Hit it ➡ <Link to='/register'>Signup</Link></p>
                        <p className='content'>Already a member? Hit it ➡ <Link to='/login'>login</Link></p>
                    </div>
                </SlideR>
            </section>
        )
    }
}

export default HomePage;