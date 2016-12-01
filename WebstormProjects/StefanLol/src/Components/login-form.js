import React from 'react';
import {Link} from 'react-router';
var login = require('../scripts/login');

//OLD LOGIN FORM WITH MODAL
/*var Modal = require('react-modal');
var customStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 300,
        right: 250,
        bottom: 200,
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    content: {
        position: 'relative',
        top: '40px',
        left: '200px',
        right: '10px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#e5f3fa',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    }
}
var LoginForm = React.createClass({


    getInitialState: function () {
        return {modalIsOpen: false};
    },

    openModal: function () {
        let parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.renderModal('register');

    },
    closeModal: function () {
        let parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.setState({modalIsOpen: false});
    },
    render: function () {
        return (
            <form>
                <h3><b>Already registered?</b></h3>
                <p>welcome back!</p>
                <input type="text" id="loginUsername" placeholder="Email or username"/>
                <br/>
                <input type="text" id="loginPassword" placeholder="Password"/>
                <br/>
                <button id="loginButton" onClick={login}>Login</button>
                <div className="modalFooter">
                    <span id="forgotPassword">
                        <Link onClick={this.closeModal} to="forgot_password">Forgot your password?</Link>
                    </span>
                    <Link to="register_route" id="signUp"><a href="#" onClick={this.openModal}>Sign up!</a></Link>
                    <Modal className="modal"
                           isOpen={this.state.modalIsOpen}
                           onAfterOpen={this.afterOpenModal}
                           onRequestClose={this.closeModal}
                           style={customStyle}
                    ><a href="#" id="close" onClick={this.closeModal}>X</a><RegisterForm/>
                    </Modal>
                </div>
            </form>
        )
    }
});*/
var LoginForm = React.createClass({



    render: function () {
        return (
            <form>
                <h3><b>Already registered?</b></h3>
                <p>welcome back!</p>
                <input type="text" id="loginUsername" placeholder="Email or username"/>
                <br/>
                <input type="text" id="loginPassword" placeholder="Password"/>
                <br/>
                <button id="loginButton" onClick={login}>Login</button>
                <div className="modalFooter">
                    <span id="forgotPassword">
                        <Link to="forgot_password">Forgot your password?</Link>
                    </span>
                    <Link to="register_route" id="signUp">Sign up!</Link>
                </div>
            </form>
        )
    }
});

export default LoginForm

