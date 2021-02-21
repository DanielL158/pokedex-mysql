import React from 'react';
import axios from 'axios';
import Pokedex from './Pokedex.jsx';

export default class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      pokemon: [],
      types: [],
      currentType: 'Show All'
    }
    this.getPokemons = this.getPokemons.bind(this);
    this.getTypes = this.getTypes.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    this.getPokemons()
    this.getTypes()
  }

  getPokemons() {
    axios.get('/pokedex')
    .then ((results) => {
      this.setState({
        pokemon: results.data
      })
    })
    .catch ((err) => {
      console.error(err)
    })
  }

  getTypes() {
    axios.get('/pokedex/type')
    .then ((results) => {
      this.setState({
        types: results.data
      })
    })
    .catch ((err) => {
      console.error(err)
    })
  }

  handleSelect(e) {
    this.setState({
      currentType: e.target.value
    }, ()=> console.log(this.state))
  }

  showAll() {
    this.setState({
      currentType: 'Show All'
    })
  }

  render () {
    if (this.state.currentType === 'Show All') {
      return (
        <div>
            <h1>Fullstack Pokedex!</h1>
              <button onClick={this.showAll}> Show All</button>
              <select id="types" onChange={this.handleSelect}>
               <option>Sort by Type</option>
                {this.state.types.map((result, index) => {
                  return (
                    <option value={result.type} key={index}> {result.type} </option>)
                  })
                }
              </select>
          <Pokedex pokemon={this.state.pokemon} getPokemons={this.getPokemons}/>
        </div>
      )
    } else {
      if (this.state.currentType) {
        var array = [];
        for (var i = 0; i < this.state.pokemon.length; i++) {
          if (this.state.pokemon[i].type === this.state.currentType) {
            array.push(this.state.pokemon[i])
          }
        }
        return (
          <div>
          <h1>Fullstack Pokedex!</h1>
            <button onClick={this.showAll}>Show All</button>
            <select id="types" onChange={this.handleSelect}>
             <option>Sort by Type</option>
              {this.state.types.map((result, index) => {
                return (
                  <option value={result.type} key={index}> {result.type} </option>)
                })
              }
            </select>
          <Pokedex pokemon={array} getPokemons={this.getPokemons}/>
          </div>
        )
      }
    }
  }
}
