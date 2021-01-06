import './Navigation.css';
import { Link } from 'react-router-dom';
import React from 'react';

export let LINKS = {
  DateView: "/dateview",
};

export class Navigation extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      path: window.location.pathname,
      checked_login: false,
      logged_in: false
    }
  }

  componentDidUpdate(){    
    window.onpopstate = e => {
      this.setState({path: e.target.location.pathname});
    }
  }

  updatePath(path){
    this.setState({path: path});
    // The following line closes the navbar when an element is selected on mobile
    document.getElementById("navbarNav").className = "collapse navbar-collapse";
  }

  render(){
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to={'/'}><b>RelayDR</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Routing links */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to={LINKS.DateView} onClick={() => this.updatePath(LINKS.DateView)}>Date View</Link></li>
          </ul>

          {/* User profile buttons */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-secondary" onClick={() => this.logout()}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
  }
};