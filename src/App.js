import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom'
import SoundBoard from './SoundBoard'
import GifTranslator from './GifTranslator'
import Home from './Home'
import NotFound from './NotFound'

class App extends Component {
  render() {

  const appLinks = (
    <div className="buttons">
      <NavLink activeClassName="active" to={"/soundboard"}>
        <button>SoundBoard</button>
      </NavLink>
      <NavLink activeClassName="active" to={"/giftranslator"}>
        <button>GifTranslator</button>
      </NavLink>
    </div>
  )

    return (
      <div className="App">
        <header className="App-header">
          <iframe title="cageHead" className="App-logo" src="https://giphy.com/embed/2v170e71aanfi" frameBorder="0" allowFullScreen />
          {appLinks}
        </header>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/soundboard" component={SoundBoard}/>
          <Route path="/giftranslator" component={GifTranslator}/>
          <Route component={NotFound}/>
        </Switch>

      </div>
    );
  }
}

export default App;
