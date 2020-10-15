import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

export default class Header extends Component {
  static contextType = UserContext;

  state = {
    menuOpen: false,
  };

  handleMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <nav>
          <Link
            className='NavLink'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
        <span className='username'>
          {this.context.user.name}
        </span>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className='NavLink'>Login</Link>
        {/* {' | '}
        <Link to='/register' className='NavLink'>Sign up</Link> */}
      </nav>
    )
  }

  render() {
    return (
      <header className="Header-group">
        <div id="logo" className="Header-item">
          <img src="#" alt="PLACEHOLDER TEXT" />
        </div>
        <div id="username-and-menu" className="menu-group">
          <p id="username" className="menu-item">{this.context.user.name}username</p>
          <nav className="menu-item">
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={this.handleMenuClick.bind(this)}
            />
            {this.state.menuOpen && <ul id="dropdown-menu">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/profiles/${this.context.user.id}`}>
                  Profile
                </Link>
              </li>
              <li>
                <div className='NavBar'>
                  {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </div>
              </li>
            </ul>}
          </nav>
        </div>
      </header>
    );
  };
}