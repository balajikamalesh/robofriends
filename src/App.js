import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/cardlist';
import SearchBox from './components/searchbox';
import Scroll from './components/scroll';
import ErrorBoundary from './components/errorboundary';

function App(){
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    console.log('effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setRobots(json))
  },[]) //ComponentDidMount

  const onSearchChange = (event) => {
    setSearchField(event.target.value); 
  }

  const matchingRobots = (robot) => robot.name.toLowerCase().includes(searchField.toLowerCase());
  const filteredRobots = robots.filter(matchingRobots);

  if(robots.length === 0){
    return (
      <div className="tc">
          <h2>Loading</h2>
        </div>
    )
  } else {
    return (
      <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
    )
  }
  
}

export default App;

