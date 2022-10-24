import React, { useState } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import './App.css';
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/errorBoundry";
import { useEffect } from "react";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users);
            })
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    });

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className="tc" >
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
}

export default App;