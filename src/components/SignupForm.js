import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';

export const SignupForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
    phone: '',
  };
  const [state, setState] = useState(initialState);
  const { logUp } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await logUp(
      state,
      `${process.env.REACT_APP_BASEURL}/api/v1/auth/signup`,
      '/signup',
    );
    console.log('res signup', res);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="fname"
        required
        onChange={(e) => setState({ ...state, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lname"
        required
        onChange={(e) => setState({ ...state, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        required
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setState({ ...state, userName: e.target.value })}
      />
      <input
        type="tel"
        name="phone"
        placeholder="phone"
        required
        onChange={(e) => setState({ ...state, phone: e.target.value })}
      />
      <input className="submit" type="submit" value="Create" button="true" />
    </form>
  );
};
