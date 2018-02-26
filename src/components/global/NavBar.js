import '../../_styles/components/global/NavBar.css';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class  NavBar extends Component {
  constructor() {
    super();
    this.NavToggle = this.NavToggle.bind(this);

    this.state = {
      nav_open: false
    }
  }

  NavToggle() {
    this.setState({
      nav_open: !this.state.nav_open
    });
  }

  render() {
    const { nav_open } = this.state;
    const nav_icon = nav_open ?
    <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>;
    const nav_visible = nav_open ?
    'show-nav' : 'hide-nav';

    const renderNavBar = (
      <div className={`NavBar`}>
        <div className={`nav-wrapper ${nav_visible}`}>
          <ul className="nav-items">
            <li onClick={this.NavToggle} className="nav-item"><Link to="/home">Home</Link></li>
            <li onClick={this.NavToggle} className="nav-item"><Link to="/new-page">New Page</Link></li>
            <li onClick={this.NavToggle} className="nav-item"><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={this.NavToggle}>
          {nav_icon}
        </div>
      </div>
    );

    return (
    renderNavBar
    );
  }

};
