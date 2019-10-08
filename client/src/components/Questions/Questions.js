import React,{Component} from 'react';
import Axios from 'axios';
import URL from '../../url';

class Questions extends Component{
    constructor(){
        super()
        this.setState={
            loading:true
        }
    }
    componentDidMount(){
        const {level,category} = this.props.match.params;
    }
    render(){
        return(
            <>
            <h3>hello</h3>
            <input placeholder="Write your answer here" id="first_name" type="text" class="validate"/>
            </>
        )
    }
}

export default Questions;