import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/cardlist';
import SearchBox from './components/searchbox';
import Scroll from './components/scroll';
import ErrorBoundary from './components/errorboundary';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({robots: json}))
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value}); 
  }

  render(){
    const matchingRobots = (robot) => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    const filteredRobots = this.state.robots.filter(matchingRobots);
    if(this.state.robots.length === 0){
      return (
        <div className="tc">
          <h2>Loading</h2>
        </div>
      )
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
    
  };
}

export default App;
