import React from 'react';
import {Link} from 'react-router';
var register = require('../scripts/register');

//OLD REGISTER WITH MODAL
/*
var Modal = require('react-modal');

var customStyle = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 300,
        right             : 250,
        bottom            : 200,
        backgroundColor   : 'rgba(255, 255, 255, 0)'
    },
    content: {
        position                   : 'relative',
        top                        : '40px',
        left                       : '200px',
        right                      : '10px',
        bottom                     : '40px',
        border                     : '1px solid #ccc',
        background                 : '#e5f3fa',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
    }
} //modal styling

var RegisterForm = React.createClass({
    openModal: function () {
        let parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.renderModal('login');
    },
    getInitialState: function () {
        return {modalIsOpen: false};
    },
    closeModal: function () {
        this.setState({modalIsOpen: false});
    },
    render: function() {
        return (
            <form className="registerForm">
                <h3><b>Join us</b></h3>
                <p>and have lots of fun!</p>
                <input type="text" id="registerUsername" placeholder="Email or username"/>
                <br/>
                <input type="password" id="registerPassword" placeholder="Password"/>
                <br/>
                <input type="text" id="registerEmail" placeholder="Email"/>
                <br/>
                <button id="registerButton" onClick={register.bind(this)}>Register</button>
                <div className="modalFooterRegister">
                    <Link to="login_route" id="haveAnAccount"><a onClick={this.openModal} href="#">Already registered?</a></Link>
                    <Modal className="modal"
                           isOpen={this.state.modalIsOpen}
                           onAfterOpen={this.afterOpenModal}
                           onRequestClose={this.closeModal}
                           style={customStyle}
                    ><a href="#" id="close" onClick={this.closeModal}>X</a><LoginForm/>
                    </Modal>
                </div>
            </form>
        )
    }
});*/

var RegisterForm = React.createClass({

    render: function() {
        return (
            <form className="registerForm">
                <h3><b>Join us</b></h3>
                <p>and have lots of fun!</p>
                <input type="text" id="registerUsername" placeholder="Email or username"/>
                <br/>
                <input type="password" id="registerPassword" placeholder="Password"/>
                <br/>
                <input type="text" id="registerEmail" placeholder="Email"/>
                <br/>
                <button id="registerButton" onClick={register.bind(this)}>Register</button>
                <div className="modalFooterRegister">
                    <Link to="login_route" id="haveAnAccount">Already registered?</Link>
                </div>
            </form>
        )
    }
});

export default RegisterForm;