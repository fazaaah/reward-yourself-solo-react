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
                    className="inputText"
                    name="currentHabit"
                    id="currentHabit"
                    placeholder="ex. pack lunch"
                    value={this.state.currentHabit}
                    autoComplete="off"
                    required
                />
                <label for="currentHabit" className="visually-hidden">What habits would you like to grow?</label>

                <h2>How would you like to reward yourself?</h2>
                <input
                    onChange={this.handleChange}
                    type="text"
                    className="inputText"
                    name="reward"
                    id="reward"
                    placeholder="ex. get a frapp"
                    value={this.state.reward}
                    autoComplete="off"
                    required
                />
                <label for="reward" className="visually-hidden">How would you like to reward youself?</label>

                <p className="explanation">Each time you practice your habit, punch a hole in your rewards card. When all are punched, go get your reward! You earned it!</p>

                <button
                    onClick={this.handleSubmit}
                    className="form-button"
                >
                    Get started!
                </button>

            </form>
        ) 
    }
}

export default Form;
