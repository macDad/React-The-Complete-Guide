import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    //This code will compile to
    return (
        <div className="App">
            <h1>Hi Im React App</h1>
            <p>This Also working</p>
            <Person name="Mac" age="32"/>
            <p>This Also working</p>
            <Person name="Paro" age="28">My Hobbies: Racing</Person>
            <p>This Also working</p>
            <Person name="Kyan" age="1"/>
        </div>
    );
    //this code -----> this is JSX

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App!!!'));
}

export default App;
