import React from 'react';
import '../styles/user-related.css';

var UserMenu = React.createClass({
    render: function() {
        if (this.props.username === null) //NO USER LOGGED
            return (
                <div className="user-menu">
                    <h4>New here?</h4>
                    <p>Signup now to be able to comment, vote and more
                        in the funniest community on the Internet! </p>
                    <button>Sign up</button>
                </div>
            )
        else
            return (
                <div className="user-menu">
                <img class="avatar"/>
                    <div className="title">
                        <p>{this.props.username}</p>
                        <p>Likes</p>
                    </div>
                    <footer className="user-related-footer">
                        <a>Notification</a>.
                        <a>Messages</a>.
                        <a>Settings</a>.
                        <a>Logout</a>
                    </footer>
                </div>
            )

    }
});

export default UserMenu;