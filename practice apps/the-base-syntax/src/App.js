import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'supermax'
    };

    userNameChangeHandler = (event) => {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    changed={this.userNameChangeHandler}
                    currentName={this.state.username}
                />
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={"Max 3"}/>
            </div>
        );
    }
}

export default App;
