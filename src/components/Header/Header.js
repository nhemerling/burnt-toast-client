import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import ToastIcon from '../../images/toast.png'
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
      <>
        <li>
          <Link onClick={this.handleMenuClick} to="/search">
              Search
          </Link>
        </li>
        <li>
          <Link onClick={this.handleMenuClick} to={`/profiles/${this.context.user.id}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link
            className='NavLink'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </li>
        <span className='username'>
          {this.context.user.name}
        </span>
     </>
    )
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <Link onClick={this.handleMenuClick} to='/login' className='NavLink'>Login</Link>
        </li>
        <li>
          <Link onClick={this.handleMenuClick} to='/' className='NavLink'>Home</Link>
        </li>
      </>
    )
  }
  handleToggle = (event) => {
    event.preventDefault();
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
      let  ToastIconLink = TokenService.hasAuthToken()
      ? '/search'
      : '/'
    return (
      <>
        <header className="Header">
          <div id="logo" className="Header-item">
            <Link to={ToastIconLink}>
              <img src={ToastIcon} alt="link redirects to home page"/>
            </Link>
          </div>
          <span id="username">{this.context.user.username}</span>
          <div id="username-and-menu" className="menu-group">
            <div onClick={this.handleToggle} className='hamburger-menu'>
              <span className={this.state.menuOpen ? 'rotateDown': ''}></span>
              <span className={this.state.menuOpen ? 'hide': ''}></span>
              <span className={this.state.menuOpen ? 'rotateUp': ''}></span>
            </div>
          </div>
        </header>
        <nav className={this.state.menuOpen ? 'nav' : 'hide'}>
          {<ul id="dropdown-menu">
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}
          </ul>}
        </nav>
      </>
    );
  };
}