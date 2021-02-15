import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import TicTacToe from './tictactoe';
import WeatherConverter from './kelvinWeather';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tictactoe">
          <TicTacToe/>
        </Route>
        <Route path="/kelvin-weather">
          <WeatherConverter/>
        </Route>
        <Route path="/">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tictactoe">TicTacToe</Link>
              </li>
              <li>
                <Link to="/kelvin-weather">Kelvin Weather</Link>
              </li>
            </ul>
          </nav>
        </Route>
      </Switch>
    </Router>
  )
}