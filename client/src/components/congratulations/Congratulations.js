import React,{Component} from "react";
import {connect} from "react-redux"
import {setScore,setLevel,setCategory} from "../../actions"
import {Redirect} from 'react-router-dom';
import './congratulations.css';
import Confetti from 'react-confetti';
import { useWindowSize } from "./useWindowSize";
import { Link } from 'react-router-dom';

class Congratulations extends Component{
    componentWillUnmount(){
        this.props.setScore(null);
        this.props.setLevel(null);
        this.props.setCategory(null);
    }
    render(){
        const {user,level,score}=this.props;
        const { width, height } = useWindowSize();
        //console.log(score);
        if(level && score){
            return(
                <div className='container'>
                    <Confetti
                    width={width-15}
                    height={height}
                    />
                    <h2 className='greeting'>
                        Congratulations!!! 🥳🎉🎊 <br></br> <br></br> 
                        You scored {score} <br></br>
                        Your total score is {user[level]} <br></br>
                        Keep it up 🎖!!
                    </h2>
                    <h3 className='greeting'><Link to='/dashboard'>Back to dashboard 👈</Link></h3>
                </div>
            )
        }
        else{
            return (
                <Redirect to="/dashboard"/>
            )
        }
    }
}

const mapStateToProps = (state) => {
    const {user,level,score} = state
    return {user,level,score}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScore : (score) => dispatch(setScore(score)),
        setLevel : (level) => dispatch(setLevel(level)),
        setCategory : (category) => dispatch(setCategory(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Congratulations)