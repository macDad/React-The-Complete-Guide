import Person from "./Person/Person";
import React from "react";

const persons = (props) => props.persons.map((person, index) => {
        return <Person click={() => props.clicked(index)}
                       name={person.name}
                       age={person.age}
                       key={person.id}
                       changed={(event) => props.changed(event, person.id)}/>;
    }
);

export default persons;
