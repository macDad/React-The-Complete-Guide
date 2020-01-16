import React, {useState} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (showPersons) {
        persons = <Persons persons={personsState.persons}
                           clicked={deletePersonHandler}
                           changed={nameChangeHandler}/>;
    }
    return (
        <div className={classes.App}>
            <Cockpit title={props.appTitle}
                     showPersons={showPersons}
                     persons={personsState.persons}
                     clicked={togglePersonHandler}/>
            {persons}
        </div>
    );
};

export default App;


