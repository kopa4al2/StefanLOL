import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import ForgotPassword from './Components/forgot-password-form';
import LoginForm from './Components/login-form';
import RegisterForm from './Components/register-form';
import ImageUploader from './Components/uploader';
import Main from './Main';
import './index.css';

document.body.style.backgroundColor = '#161618';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="forgot_password" component={ForgotPassword}></Route>
            <Route path="login_route" component={LoginForm}></Route>
            <Route path="register_route" component={RegisterForm}></Route>
            <Route path="upload_route" component={ImageUploader}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);

