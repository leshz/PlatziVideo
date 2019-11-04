import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';
import { loginRequest } from '../actions';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit} autoComplete='off'>
          <input
            name='email'
            className='input'
            autoComplete='off'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            autoComplete='off'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='google login' />
              Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='twitter login' />
              Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
              No tienes ninguna cuenta
          <Link to='/register'>
            Registrate
          </Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {

  loginRequest,

};

export default connect(null, mapDispatchToProps)(Login);
