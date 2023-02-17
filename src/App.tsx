import React from 'react';
import GridLayout from './components/GridLayout';
import TextBox from './components/TextBox';

class App extends React.Component {
  render() {
    return (
      <GridLayout>
        <TextBox>Header</TextBox>
        <TextBox>Content</TextBox>
        <TextBox>Footer</TextBox>
      </GridLayout>
    );
  }
}

export default App;
