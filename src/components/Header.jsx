
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = (params) => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt='profile avatar' /> :
              <img src={userIcon} alt='' />
          }

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? <li><a href='/'>{user.name}</a></li> : null}

          {hasUser ?
            <li><a href='#logout' onClick={handleLogOut}>Cerrar Sesion</a></li> :
            (
              <li>
                <Link to='/login'>
                  iniciar Sesion
                </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
