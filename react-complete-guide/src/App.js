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

    const nameChangeHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Sample Dude', age: 20},
                {name: event.target.value, age: 28},
                {name: "Kyan", age: 1}
            ]
        })
    };

    const deletePersonHandler = (personIndex) => {
        // const persons = personsState.persons.slice();
        const persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({persons: persons});
    }
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
    let persons = null;
    if (showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return <Person click={() => deletePersonHandler(index)} name={person.name} age={person.age}/>;
                })}
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
            {persons}
        </div>
    );
};

export default App;


