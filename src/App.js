import { default as React, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// HELLO! arrow function yep :)

const App = () => {
  // We dont need all of this, so we can clear it all out
  // But we do need to keep one JSX element so it doesn't throw an error.

  // We want a 'state' for our game.
  // Lets make a state for our game board.
  // The game board is a nested array
  const initalBoard = [
    ['x', null, null],
    [null, null, null],
    [null, null, null],
  ];

  // hmm :))

  // We want this to be our default state for the board. 
  // We can use 'useState' to do this.App
  // we pass in our 'initialState' object as the initial value for the 'board' variable.
  const [board, setBoard] = useState(initalBoard);

  return (
    <table>
      {/*
        We want to use our state to build the game board you created below.
        We have our rows now :)
        I have taken the board, which is an array, 
        and for each of the rows I am creating a <tr></tr> element

        row => <tr>{JSON.stringify(row, null, 2)}</tr>

        ^ This is just function that takes a row object, and returns some JSX :)
      */}
      { 
        board.map(row => (
          <tr>
            {/*
              Now we want to do the same thing again, but for each of the columns/ tiles.
              here row is also an array ([null, null, null])
              So we can map it again like we did with the rows,
              and the end result should be the same table you had before!
            */}
            { row.map(tile => (
              <td>{tile}</td>
            )) }
          </tr>
        ))
      }
    </table>
  );
}

export default App;
