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
    const [showPersons, setShowPersons] = useState(false);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                {name: newName, age: 32},
                {name: "Paro", age: 28},
                {name: "Kyan", age: 1}
            ]
        })
    };
    const nameChangeHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Sample Dude', age: 20},
                {name: event.target.value, age: 28},
                {name: "Kyan", age: 1}
            ]
        })
    };
    const togglePersonHandler = () => {
        const doesShow = showPersons;
        setShowPersons(!doesShow);
    };
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
    let person = null;
    if (showPersons) {
        person = (
            <div>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
                        click={switchNameHandler.bind(this, 'Maduka A J R M')}
                        changed={nameChangeHandler}>My Hobbies: Racing</Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
            </div>
        );
    }
    return (
        <div className="App">
            <h1>Hi Im React App</h1>
            <p>This Also working</p>
            <button style={style}
                    onClick={togglePersonHandler}>Switch Name
            </button>
            {person}
        </div>
    );
};

export default App;


