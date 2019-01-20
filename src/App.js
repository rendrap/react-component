import React from 'react';
import Header from './Header'
import Player from './Player'

class App extends React.Component {
  state = {
    players: [
    {
    name: 'Bambang',
    id: 1
  },
  {
    name: 'Tina',
    id: 2
  },
  {
    name: 'Ruby',
    id: 3
  },
  {
    name: 'Eko',
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