import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import ToastIcon from '../../images/toast.svg'
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
//  TODO: need to change this to a more generic generate links when logged in function 
  renderLogoutLink() {
    return (
      <div>
        <nav>
           <li>
                <Link to="/search">
                  Search
                </Link>
              </li>
              <li>
                <Link to={`/profiles/${this.context.user.id}`}>
                  Profile
                </Link>
              </li>
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
        {' | '}
        <Link to='/' className='NavLink'>Home</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className="Header-group">
        <div id="logo" className="Header-item">
          <img src={ToastIcon} alt="PLACEHOLDER TEXT" />
        </div>
        <div id="username-and-menu" className="menu-group">
          <span id="username" className="menu-item">{this.context.user.username}</span>
          <nav className="menu-item">
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={this.handleMenuClick.bind(this)}
            />
            {this.state.menuOpen && <ul id="dropdown-menu">
              {/* <li>
                <Link to="/search">
                  Search
                </Link>
              </li>
              <li>
                <Link to={`/profiles/${this.context.user.id}`}>
                  Profile
                </Link>
              </li> */}
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