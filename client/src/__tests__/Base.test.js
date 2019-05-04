import React from 'react';
import ReactDOM from 'react-dom';
import User from '../components/User';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';

it('User renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Register renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});