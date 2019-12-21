import React,{Component} from "react";
import {connect} from "react-redux"
import {setScore,setLevel,setCategory} from "../../actions"
import {Redirect} from 'react-router-dom';
import './congratulations.css';
import Confetti from 'react-confetti';
import { useWindowSize } from "./useWindowSize";

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
                    width={width-3}
                    height={height}
                    />
                    <h2 className='greeting'>
                        Congratulations!!! 🥳🎉🎊 <br></br> 
                        You scored {score} <br></br>
                        Your total score is {user[level]} <br></br>
                        Keep it up 🎖!!
                        {/* Width = {width} */}
                    </h2>
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