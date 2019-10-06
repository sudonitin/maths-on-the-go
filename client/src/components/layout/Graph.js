import React from "react";
import "./graph.css";
import Level from "./Level"

class Graph extends React.Component{
    render(){
        return (
            <div className="container">
                <h2 className="yourScore">Your Progress!</h2>
                <Level content="Piece of Cake - Level 1" score="5" img="🍰" />
                <Level content="Grapes - Level 2" score="20" img="🍇" />
                <Level content="Banana - Level 3" score="50" img="🍌" />
                <Level content="Apple - Level 4" score="0" img="🍎" />
                <Level content="Watermelon - Level 5" score="0" img="🍉" />
                <Level content="Coconuts - Level 6" score="0" img="🥥" />
            </div>
        )
    }
}
export default Graph;

