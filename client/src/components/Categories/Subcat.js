import React,{Component} from "react";
import { connect } from 'react-redux';
import { setCategory } from '../../actions';
import {withRouter} from 'react-router-dom'

class Subcat extends Component{
    onClickItem(category){
        this.props.setCategory(category);
        this.props.history.push('/questions');
      }
    render(){
        const {name} = this.props;
        return(
            <div className="col s4 card-panel categories score" onClick={this.onClickItem.bind(this,name)}>
                <div className="content">
                    <span className={name}>
                        <h5>{name}</h5>
                    </span> 
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        setCategory:(category) => dispatch(setCategory(category))
    }
}

//withRouter since it is a nested component and we need history in this component
export default withRouter(connect(
    null,
    mapDispatchToProps
)(Subcat))