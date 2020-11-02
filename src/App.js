import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Language from './Project/Language'
import './language.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Language/>
      </div>
    </Provider>
  );
}

export default App;
