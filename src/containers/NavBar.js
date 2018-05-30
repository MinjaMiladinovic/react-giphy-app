import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <Link to="/"  className="navbar-brand">GIPHY</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link">TRENDING </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">SEARCH GIF</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}