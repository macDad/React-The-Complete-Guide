import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Mac", age: 32},
            {name: "Paro", age: 28},
            {name: "Kyan", age: 1}
        ]
    });
    const [otherState, setOtherState] = useState('some other values');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: "Mac J", age: 32},
                {name: "Paro", age: 28},
                {name: "Kyan", age: 1}
            ]
        })
    };

    return (
        <div className="App">
            <h1>Hi Im React App</h1>
            <p>This Also working</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
};

export default App;


