import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
    {
    name: 'Bambang',
    score: 0,
    id: 1
  },
  {
    name: 'Tina',
    score: 0,
    id: 2
  },
  {
    name: 'Ruby',
    score: 0,
    id: 3
  },
  {
    name: 'Eko',
    score: 0,
    id: 4
  }
    ]
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score : prevState.players[index].score += delta
    }));
    console.log('index: ' + index,'delta: ' + delta);
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return{
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }



  render() {
    return (
      <div className='scoreboard'>
        <Header
         title='Scoreboard'
         players={this.state.players}
        />

        {/* Player list */}
        {this.state.players.map((player, index) =>
          (<Player
            name={player.name}
            score={player.score}
            key={player.id.toString()}
            id={player.id}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />)
        )}

        <AddPlayerForm />

      </div>
    );
  }
};

export default App;