import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

class Categories extends Component{
    render(){
        console.log(this.props.level);
        if(this.props.level==null) return <Redirect to='/dashboard'/>
        return(
             <div>Categories</div>
        )
    }
}

function mapStateToProps(state){
    const {level} = state;
    return {level}
}

export default connect(
    mapStateToProps
)(Categories)