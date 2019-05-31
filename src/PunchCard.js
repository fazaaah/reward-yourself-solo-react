import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import './App.css';

// store the key (unique ID) from firebase in a variable 
// reference that key when logging the punch card stuff

class PunchCard extends Component {
    constructor(){
        super()
        this.state = {
            punches: 0,
        }
    }

    

    handleClick = (event) => {
        event.preventDefault();
        const currentPunches = this.props.habit.card.punches;
        const dbRef = firebase.database().ref(this.props.habit.key).update({punches: currentPunches+1});
        
        // const updatedPunches = currentPunches + 1;
        // dbRef.push();

        // this.setState({
        //     punches: updatedPunches,
        // })
    }  

    render() {
        const currentPunches = this.props.habit.card.punches;
        console.log(currentPunches)

        return (

            <Fragment>
                <div className="card-with-details">
                    <p>Habit: {this.props.habit.card.currentHabit}</p>
                    <p>Reward: {this.props.habit.card.reward}</p>
                    {currentPunches < 8 ? 
                    <div className="card">
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                        <div className="punch" onClick={this.handleClick}></div>
                    </div>
                        : '!!!!'} 
                    <button>Remove</button>
                    
                </div>
                    
            </Fragment>
        )
    }
}

export default PunchCard;