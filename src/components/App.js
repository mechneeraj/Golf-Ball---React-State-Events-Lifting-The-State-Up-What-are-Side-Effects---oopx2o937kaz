import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props) //js classes 
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" } ///increae this to move the ball towards right 
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        this.setState({renderBall: true});
        /* setState({...state, renderBall: true}) functional code*/
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    //useEffecrt with a bblank array
    componentDidMount() {
      document.addEventListener("keydown", (e) => {
        if(e.key === "ArrowRight"){
            this.setState({ballPosition: {left: this.state.posi+5 + "px"}, posi: this.state.posi + 5})
        }
      })
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}

export default App;
