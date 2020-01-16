import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = '';
   if(props.showPersons) btnClass = classes.Red;

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);//classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi Im React App</h1>
            <p className={assignedClasses.join(' ')}>This Also working</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name
            </button>
        </div>
    );
}

export default cockpit;
