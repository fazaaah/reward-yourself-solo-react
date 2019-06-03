import React, {Component} from 'react';
import firebase from './firebase.js';
import './App.css';
import PunchCard from './PunchCard.js'
import Form from './Form.js'

class App extends Component {
  // need constructor and super if state is being changed
  constructor(){
    super();
    // initial state
    this.state = {
      // the habits array is made up of objects - each object represents a habit with its name and its associated reward and completed punches.
      habits: []
    }
  }

  componentDidMount() {
    // grabbing a ref from the DB
    const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();

        for (let key in data) {
          newState.push({
            key: key,
            card: data[key],
          });
        }

    // this is just updating the current state to reflect the updated DB values
    this.setState({
      habits: newState,
    })
    })
  }

  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Form />
          {
            this.state.habits.map((habit)=>{
              return (<PunchCard habit={habit} reward={habit} />)
            })
            }
        </div>
      </div>
    );
  }
}

export default App;
