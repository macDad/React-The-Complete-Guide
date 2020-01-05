import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Mac", age: 32},
            {name: "Paro", age: 28},
            {name: "Kyan", age: 1}
        ],
        otherState: 'some other values'
    }
    switchNameHandler = () => {
        // console.log('was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = "Maduka J";
        this.setState({
            persons: [
                {name: "Mac J", age: 32},
                {name: "Paro", age: 28},
                {name: "Kyan", age: 1}
            ]
        })
    }


    render() {
        //This code will compile to
        return (
            <div className="App">
                <h1>Hi Im React App</h1>
                <p>This Also working</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        //this code -----> this is JSX

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App!!!'));
    }
}

export default App;
