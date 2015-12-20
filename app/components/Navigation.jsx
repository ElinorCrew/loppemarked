import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { logOut } from 'actions/users';
// import {Button} from 'react-semantify';
// import styles from 'scss/components/_navigation';

class Navigation extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div className="ui fixed menu">
        <div className="header item">Skattekartet</div>
        <div className=" item ui floating labeled icon dropdown tiny">
          <span className="text"> Valgt område: <b>Oslo</b></span>
          <i className="icon dropdown"></i>
          <div className="menu">
            <div className="header">
              Velg område
            </div>
            <div className="ui left icon input">
              <i className="search icon"></i>
              <input type="text" name="search" placeholder="Søk..."/>
            </div>
            <div className="header">
              <i className="tags icon"></i>
              Områder
            </div>
            <div className="divider"></div>
            <div className="item">
              <div className="ui red empty circular label"></div>
              Bergen
            </div>
            <div className="item">
              <div className="ui blue empty circular label"></div>
              Trondheim
            </div>
            <div className="item">
              <div className="ui black empty circular label"></div>
              Oslo
            </div>
          </div>
        </div>
         <div className="right menu">
          <a className="item">Logg inn</a>
        </div>
      </div>


      // <nav className={styles.navigation} role="navigation">
      //     <Link to="/" className={styles.navigation__item + ' ' + styles['navigation__item--logo']} activeClassName={styles['navigation__item--active']}>Ninja Ocean</Link>
      //     { this.props.user.authenticated ? (
      //       <Link onClick={()=> dispatch(logOut())}
      //         className={styles.navigation__item} to="/logout">Logout</Link>
      //     ) : (
      //       <Link className={styles.navigation__item} to="/login">Log in</Link>
      //     )}
      //     <Link className={styles.navigation__item} to="/dashboard">Dashboard</Link>
      //     <Link to="/about" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>About</Link>
      // </nav>
    );
  }

}

Navigation.propTypes = {
  user: PropTypes.object,
};

export default Navigation;
