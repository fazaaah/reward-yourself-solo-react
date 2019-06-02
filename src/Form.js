import React, { Component } from 'react';
import firebase from './firebase.js';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            currentHabit: '',
            reward: '',
            punches: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
        [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);

        this.setState({
            currentHabit: '',
            reward: '',
        })
    }

    render(){
        return(
            <form action="" class="form-container">
                <h2>What habits would you like to grow?</h2>
                <input
                    onChange={this.handleChange}
                    type="text"
                    class="inputText"
                    name="currentHabit"
                    placeholder="ex. pack lunch from home"
                    value={this.state.currentHabit}
                    autoComplete="off"
                />

                <h2>How would you like to reward yourself?</h2>
                <input
                    onChange={this.handleChange}
                    type="text"
                    class="inputText"
                    name="reward"
                    placeholder="ex. get a frappuccino"
                    value={this.state.reward}
                    autoComplete="off"
                />

                <button
                    onClick={this.handleSubmit}
                    class="form-button"
                >
                    Get started!
                </button>
            </form>
        ) 
    }
}

export default Form;
