import React from "react"

function Level(props){
    let name = props.content;
    name += " blue-text text-darken-2";
    let sc = props.score;
    if(props.locked && props.content != 'Piece of Cake - Level 1'){
        return(
            <div className="card-panel row zero score">
                <div className="col">
                    <span className={name}>
                        <h5>{props.content}</h5>
                        <h6>Your Score : {props.score}</h6>
                        <h6>Threshold : {props.threshold}</h6>
                    </span>
                </div>
                <div className="col fakeDiv"></div>
                <div className="col">
                    <span className={name} style={{textAlign: "right"}}> 
                        <h1>{props.img}</h1>
                    </span>
                </div>
                <div className="overlay">
                    <div className="text"><h1>🔒</h1><h5 className="overlayText">Complete Above Levels to unlock this</h5></div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="card-panel row score" onClick={props.clickItem}>
                <div className="col">
                    <span className={name}>
                        <h5>{props.content}</h5>
                        <h6>Your Score : {props.score}</h6>
                        <h6>Threshold : {props.threshold}</h6>
                    </span>
                </div>
                <div className="col fakeDiv"></div>
                <div className="col">
                    <span className={name} style={{textAlign: "right"}}> 
                        <h1>{props.img}</h1>
                    </span>
                </div>
            </div>
        )
    }
    
}

export default Level