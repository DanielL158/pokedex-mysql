import React from 'react';
import axios from 'axios';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updating: false,
      newName: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleClick(e) {
    this.setState({
      updating: !this.state.updating
    }, ()=> console.log(this.state.updating))
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    if (!!this.state.newName) {
      axios.patch(`/pokedex/${this.props.pokemon.id}`, {name: this.state.newName})
        .then(() => {
          this.props.getPokemons()
        }
      )
      .then(() => {
        this.handleClick();
      })
        .catch((err) => {
          if (err) {
            console.error(err)
          }
        })
    }
  }

  delete() {
    axios.delete(`/pokedex/${this.props.pokemon.id}`)
    .then(() => {
      this.props.getPokemons()
      })
      .catch((err) => {
        if (err) {
          console.error(err)
        }
       })
  }

  render () {
    if (this.state.updating) {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input name="newName" onChange={this.onChange}></input>
            <button type="submit" name="nameChange">Change Name</button>
            <button name="cancel" onClick={this.handleClick}>Cancel</button>
          </form>
          <img src={this.props.pokemon.img}/>
          <div>
          Type: {this.props.pokemon.type}
          </div>
          <button name="delete" onClick={this.delete}>Delete</button>
        </div>
        )
    } else {
      return (
      <div>
      <h3>
        <div onClick={this.handleClick}>
          {this.props.pokemon.name}
          </div>
      </h3>
      <img src={this.props.pokemon.img}/>
      <div>
        Type: {this.props.pokemon.type}
        </div>
    </div>
      )
    }
  }
};