import React, { Component } from 'react';
import Header from './Header'
import Player from './Player'

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
        <Header title='Scoreboard' totalPlayers={this.state.players.length} />

        {/* Player list */}
        {this.state.players.map(player =>
          (<Player
            name={player.name}
            score={player.score}
            key={player.id.toString()}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
          />)
        )}

      </div>
    );
  }
};

export default App;