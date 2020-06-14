import React from 'react';

import Toolbar from "./components/Topbar"

import './App.scss';

import Filter from "./components/Filters"
import Contacts from './components/Contacts';


class App extends React.Component {
  state = {
    filter: "name",
    search: "",
  }

  handleChange = event => {
    this.setState({search:event.target.value.trim()});
  }
  getFilter = filter => {
    this.setState({filter: filter})
  }
  render() {
    return (
      <React.Fragment >
        <div data-testid="app" className="app">
          <Toolbar/>
          <Filter getFilter={this.getFilter.bind(this)} getSearch={this.handleChange.bind(this)}/>
          <Contacts filter={this.state.filter} search={this.state.search}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
