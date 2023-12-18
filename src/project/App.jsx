import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import TicTacToe from './tictactoe';
import WeatherConverter from './kelvinWeather';
import InfiniteScrolling from './infinite-scrolling';

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
        <Route path="/infinite-scrolling">
          <InfiniteScrolling/>
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
              <li>
                <Link to="/whale-language">(WIP) Whale Language</Link>
              </li>
              <li>
                <Link to="/infinite-scrolling">Infinite Scroller</Link>
              </li>
            </ul>
          </nav>
        </Route>
      </Switch>
    </Router>
  )
}