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
    this.setState({search:event.target.value});
  }
  getFilter = filter => {
    this.setState({filter: filter})
  }
  render() {
    return (
      <React.Fragment>
        <Toolbar/>
        <Filter getFilter={this.getFilter.bind(this)} getSearch={this.handleChange.bind(this)}/>
        <article className="container contact" data-testid="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
        </article>  
        <Contacts filter={this.state.filter} search={this.state.search}/>

      </React.Fragment>
    )
  }
}

export default App;
