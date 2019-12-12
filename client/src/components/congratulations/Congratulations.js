import React,{Component} from "react";
import {connect} from "react-redux"
import {setScore,setLevel,setCategory} from "../../actions"
import {Redirect} from 'react-router-dom';

class Congratulations extends Component{
    componentWillUnmount(){
        this.props.setScore(null);
        this.props.setLevel(null);
        this.props.setCategory(null);
    }
    render(){
        const {user,level,score}=this.props
        //console.log(score);
        if(level && score){
            return(
                <>
                <h1>Congratulations you scored {score}</h1>
                <h1>Your total score is {user[level]}</h1>
                <h1>Keep it up!!</h1>
                </>
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