import React from 'react';
import {render} from 'react-dom';
import Lobby from './Lobby.jsx';
import Client from './Client.jsx';

class App extends React.Component {
  render() {
    if (window.location.search === '?play')
      return <Client />
    return <Lobby />
  }
}

render(<App/>, document.getElementById('root'));

