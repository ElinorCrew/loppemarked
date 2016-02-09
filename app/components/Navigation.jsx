import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div className="ui fixed menu">
        <Link className="header item" to="/">Skattekartet</Link>  
        <div className="right menu">
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
