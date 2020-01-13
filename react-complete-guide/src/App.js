import React, {useState} from 'react';
import './App.css';
import Radium from "radium";
import Person from './Person/Person';

const App = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 'asdasda1', name: "Mac", age: 32},
            {id: 'asdasda2', name: "Paro", age: 28},
            {id: 'asdasda3', name: "Kyan", age: 1}
        ]
    });
    const [otherState, setOtherState] = useState('some other values');
    const [showPersons, setShowPersons] = useState(false);

    const nameChangeHandler = (event, id) => {
        const personIndex = personsState.persons.findIndex(p => {
            return p.id == id;
        });
        const person = {...personsState.persons[personIndex]};
        /// const person = Object.assign({}. personsState.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...personsState.persons];
        persons[personIndex] = person;

        setPersonsState({persons: persons});
    };

    const deletePersonHandler = (personIndex) => {
        // const persons = personsState.persons.slice();
        const persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({persons: persons});
    };
    const togglePersonHandler = () => {
        const doesShow = showPersons;
        setShowPersons(!doesShow);
    };
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };
    let persons = null;
    if (showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return <Person click={() => deletePersonHandler(index)}
                                   name={person.name}
                                   age={person.age}
                                   key={person.id}
                                   changed={(event) => nameChangeHandler(event, person.id)}/>;
                })}
            </div>
        );
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    const classes = [];
    if (personsState.persons.length <= 2) {
        classes.push('red'); //classes = ['red']
    }
    if (personsState.persons.length <= 1) {
        classes.push('bold');//classes = ['red', 'bold']
    }

    return (
        <div className="App">
            <h1>Hi Im React App</h1>
            <p className={classes.join(' ')}>This Also working</p>
            <button style={style}
                    onClick={togglePersonHandler}>Switch Name
            </button>
            {persons}
        </div>
    );
};

export default Radium(App);


