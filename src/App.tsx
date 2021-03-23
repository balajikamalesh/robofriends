import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header';
import CardList from './components/cardlist';
import SearchBox from './components/searchbox';
import Scroll from './components/scroll';
import ErrorBoundary from './components/errorboundary';

import { requestRobots, setSearchField } from './actions';

export interface robot {
  id: string;
  name: string;
  email: string
}

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App(props: any){
  useEffect(() => {
    props.onRequestRobots();
  },[]) //ComponentDidMount

  const matchingRobots = (robot: robot) => robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  const filteredRobots = props.robots.filter(matchingRobots);

  if(props.isPending === 0){
    return (
      <div className="tc">
          <h2>Loading</h2>
        </div>
    )
  } else {
    return (
      <div className="tc">
          <Header/>
          <SearchBox searchChange={props.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

