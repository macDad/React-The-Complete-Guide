import React, {useState} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
            return p.id === id;
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
    let persons = null;
    let btnClass = '';

    if (showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return <ErrorBoundary key={person.id}>
                        <Person click={() => deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => nameChangeHandler(event, person.id)}/>
                    </ErrorBoundary>;
                })}
            </div>
        );

        btnClass = classes.Red;

    }

    const assignedClasses = [];
    if (personsState.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (personsState.persons.length <= 1) {
        assignedClasses.push(classes.bold);//classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
            <h1>Hi Im React App</h1>
            <p className={assignedClasses.join(' ')}>This Also working</p>
            <button className={btnClass} onClick={togglePersonHandler}>Switch Name
            </button>
            {persons}
        </div>
    );
};

export default App;


