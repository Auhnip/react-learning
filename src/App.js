import React from 'react';
import GridLayout from './components/GridLayout';
import TextBox from './components/TextBox'

class App extends React.Component {
  render() {
    // both row and column start from 0
    const positions = [
      {
        row: { start: 0, end: 0 },
        col: { start: 0, end: 2 }
      },
      {
        row: {start: 1, end: 2},
        col: {start: 0, end: 0}
      },
      {
        row: {start: 1, end: 2},
        col: {start: 1, end: 2}
      }
    ];

    return (
      <GridLayout positions={positions}>
        <TextBox>
          这是一段很长的文字啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </TextBox>
        <TextBox>
          这是一段很长的文字啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </TextBox>
        <TextBox>
          这是一段很长的文字啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </TextBox>
      </GridLayout>
    );
  }
}

export default App;
