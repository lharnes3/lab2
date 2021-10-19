import React from 'react';
import ReactDOM from 'react-dom';

class Switch extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      p1: 1,
      p2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };

  }
  render()
  {
    return (
      <button onClick={() =>
                        {
                          let newState = (this.state.switch === 'OFF')? 'ON' : 'OFF';
                          this.setState({'switch':newState});
                        }

                      } >
          {this.state.switch}
      </button> 
    );
  }
}


class SwitchBoard extends React.Component
{
    render()
    {
      return (
        <div>
          <Switch />
          <Switch />
          <Switch />
          <Switch />
          <Switch />
          <Switch />
          <Switch />
        </div>
        
      );
    }
}

//let btn = <Switch />

let board = <SwitchBoard/>

ReactDOM.render(
  board
  ,
  document.getElementById('root')
);


