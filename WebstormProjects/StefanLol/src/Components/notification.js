import React from 'react';

var Notification = React.createClass({

    render: function () {
        return (
            <div>
                <button onClick={this.openModal}>Click</button>
            </div>
        )
    }
});
export default Notification;