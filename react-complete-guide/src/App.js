import React from 'react';
import './App.css';

function App() {
    //This code will compile to
    return (
        <div className="App">
            <h1>Hi Im React App</h1>
        </div>
    );
    //this code -----> this is JSX
    
    // return React.createElement('div', {className: 'App'},
    //                                 React.createElement('h1', null, 'Hi I\'m React App!!!'));
}

export default App;
