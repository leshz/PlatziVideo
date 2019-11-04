import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit} className='register__container--form'>
          <input
            className='input'
            onChange={handleInput}
            name='name'
            type='text'
            placeholder='Nombre'
          />
          <input
            className='input'
            onChange={handleInput}
            name='email'
            type='text'
            placeholder='Correo'
          />
          <input
            className='input'
            onChange={handleInput}
            name='password'
            type='password'
            placeholder='Contraseña'
          />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <Link to='/login'>
          Iniciar Sesion
        </Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
