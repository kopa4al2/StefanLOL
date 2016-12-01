/* eslint-disable */
//import '../styles/popups.css';
//import LoginForm from './login-form';             AGAIN FOR OLD NAVBAR
//import RegisterForm from './register-form';   AGAIN FOR OLD NAVBAR
//import Modal from 'react-modal';  AGAIN FOR OLD NAVBAR
import React from 'react';
import {Link} from 'react-router';
import '../styles/nav-bar.css';
import KinveyRequester from '../scripts/kinvey-app-info';

//OLD NAVIGATION WITH MODALS
/*
var customStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,// 300,
        right: 250,
        bottom: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        height: 2000,
        width: 2000
    },
    content: {
        position: 'relative',
        top: '40px',
        left: '500px',
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
var RenderForm;
// var NavBar = React.createClass({
//
//     renderModal: function (i) {
//
//         i === 'login' ? RenderForm = LoginForm : RenderForm = RegisterForm;
//         this.openModal();
//     },
//
//     getInitialState: function () {
//         return {modalIsOpen: false};
//     },
//
//     openModal: function () {
//         this.setState({modalIsOpen: true});
//     },
//
//
//     closeModal: function () {
//         this.setState({modalIsOpen: false});
//     },
//
//     openDropdown: function () {
//         let dropDown = document.getElementById('profileDown');
//         if ( dropDown.style.display == 'none' )
//             dropDown.style.display = 'block';
//         else
//             dropDown.style.display = 'none';
//     },
//     logout: function() {
//         KinveyRequester.logoutUser();
//         location.reload();
//     },
//
//     render: function () {
//         if ( this.props.username == null )
//             return (<header>
//                       <span className="browse-posts">
//                //TODO logo
//                <a href="#">Hot</a>
//                <a href="#">Rising</a>
//                <a href="#">Fresh</a>
//            </span>
//
//                     <span className="user-related">
//                <a id="search">   </a>
//                <Link id="loginLink" onClick={() => this.renderModal('login')}>Login</Link>
//                <Link id="registerLink" onClick={() => this.renderModal('register')}>Register</Link>
//                     <Modal className="modal"
//                            isOpen={this.state.modalIsOpen}
//                            onAfterOpen={this.afterOpenModal}
//                            onRequestClose={this.closeModal}
//                            style={customStyle}
//                     ><a href="#" id="close" onClick={this.closeModal}>X</a><RenderForm/>
//             </Modal>
//            </span>
//                 </header>
//             );
//
//         else {
//             return (<header>
//                       <span className="browse-posts">
//                //TODO logo
//                <a href="#">Hot</a>
//                <a href="#">Rising</a>
//                <a href="#">Fresh</a>
//            </span>
//                     <span className="user-related-logged">
//                         <a id="search">   </a>
//                         <a id="notification">   </a>
//                         <a id="messages">   </a>
//                         <a id="headerProfile" onClick={this.openDropdown}>
//                             <img className="avatar-icon" src="https://hugelolcdn.com/avatar/100x100/0.png"/>
//                             <span>You</span>
//                         </a>
//               <input type="button" value="Upload"/>
//
//            </span>
//                     <div id="profileDown">
//                         <Link to="/profile" id="profile">Profile</Link>
//                         <Link to="/settings" id="setting">Setting</Link>
//                         <Link id="logout" onClick={this.logout}>Logout</Link>
//                     </div>
//                 </header>
//             )
//         }
//     }
// });*/

var NavBar = React.createClass({

    openDropdown: function () {
        let dropDown = document.getElementById('profileDown');
        if ( dropDown.style.display == 'none' )
            dropDown.style.display = 'block';
        else
            dropDown.style.display = 'none';
    },
    logout: function() {
        KinveyRequester.logoutUser();
        location.reload();
    },

    render: function () {
        if ( this.props.username == null )
            return (<header>
                      <span className="browse-posts">
               //TODO logo
               <a href="#">Hot</a>
               <a href="#">Rising</a>
               <a href="#">Fresh</a>
           </span>

                    <span className="user-related">
               <a id="search">   </a>
               <Link id="loginLink" to="login_route">Login</Link>
               <Link id="registerLink" to="register_route">Register</Link>
           </span>
                </header>
            );

        else {
            return (<header>
                      <span className="browse-posts">
               //TODO logo
               <a href="#">Hot</a>
               <a href="#">Rising</a>
               <a href="#">Fresh</a>
           </span>
                    <span className="user-related-logged">
                        <a id="search">   </a>
                        <a id="notification">   </a>
                        <a id="messages">   </a>
                        <a id="headerProfile" onClick={this.openDropdown}>
                            <img className="avatar-icon" src="https://hugelolcdn.com/avatar/100x100/0.png"/>
                            <span>You</span>
                        </a>
              <input type="button" value="Upload"/>

           </span>
                    <div id="profileDown">
                        <Link to="/profile" id="profile">Profile</Link>
                        <Link to="/settings" id="setting">Setting</Link>
                        <Link id="logout" onClick={this.logout}>Logout</Link>
                    </div>
                </header>
            )
        }
    }
});

export default NavBar