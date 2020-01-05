import React,{Component} from 'react';
import './homePage.css'
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { slideInLeft,slideInRight } from 'react-animations';
import { connect } from 'react-redux';


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
        const links = !this.props.isAuthenticated?<div className='divs'>
        <h3 className='title'>Ready to rock🤩?</h3>
        <p className='content'>Not a member yet? Hit it ➡ <Link to='/register'>Signup</Link></p>
        <p className='content'>Already a member? Hit it ➡ <Link to='/login'>login</Link></p>
    </div>:<div></div>;
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
                    {links}
                </SlideR>
                <SlideR>
                    <div className='divs'>
                        <h3 className='title'>Liked us💌?</h3>
                        <p className='content'>Share a word on facebook Hit it ➡ 
                            <div class="fb-share-button" data-href={window.location.href} data-layout="button" data-size="large"><a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u="+ window.location.href} class="fb-xfbml-parse-ignore">Share</a></div>
                        </p>
                        <p className='content'>Share a word on pinterest Hit it ➡ 
                        <a data-pin-do="buttonBookmark" data-pin-url='https://stackoverflow.com/questions/tagged/pinterest' data-pin-media="https://media.licdn.com/dms/image/C510BAQH9klAw-TiXQw/company-logo_200_200/0?e=2159024400&v=beta&t=2CPNeVhUo0O5NKTwiBVpwUhnsoDgLQJf70Xn6PfRDZ4" data-pin-tall="true" data-pin-description="hello world" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>
                        </p>
                    </div>
                </SlideR>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    const {isAuthenticated} = state
    return {isAuthenticated}
}

export default connect(
    mapStateToProps
  )(HomePage);