import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { setCategory } from '../../actions'


/*listen category set karne use setCategory(categoryName) */

class Categories extends Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.level);
        if(this.props.level==null) return <Redirect to='/dashboard'/>
        return(
            /* WRITE YOUR CODE HERE */
             <div>Categories</div>
        )
    }
}

function mapStateToProps(state){
    const {level} = state;
    return {level}
}

function mapDispatchToProps(dispatch){
    return {
        setCategory:(category) => dispatch(setCategory(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)