import React from 'react';
import DimensionsContainer from './components/DimensionsContainer'
import { GlobalStyle } from './components/Styles'


const App = () => (
      <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <DimensionsContainer />
        </header>
      </div>
      </>
)

export default App;
