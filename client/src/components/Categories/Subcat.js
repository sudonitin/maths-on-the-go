import React from "react";


function Subcat(props){
    return(
        <div className="col s4 card-panel categories score">
            <div className="content">
                <span className={props.name}>
                    <h5>{props.name}</h5>
                </span> 
            </div>
        </div>
    )
}

export default Subcat