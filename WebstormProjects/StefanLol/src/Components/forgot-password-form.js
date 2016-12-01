import React from 'react';
import {Link} from 'react-router';
import '../styles/acounte-related-forms.css';
let ForgotPasswordForm = React.createClass({
    render: function () {
        return (
                <form id="forgotPasswordForm">
                    <h3>Forgot your password?</h3>
                    <p>Enter your email or username</p>
                    <input type="text" placeholder="Email or Username"/>
                    <br/>
                    <button>Reset password</button>
                    <div className="modalFooter">
                        <Link className="forgotPwdLogin" to="login_route">Want to login</Link>
                        <Link className="forgotPwdRegister" to="register_route">Need an account</Link>
                    </div>
                </form>
        )
    }
});
export default ForgotPasswordForm;