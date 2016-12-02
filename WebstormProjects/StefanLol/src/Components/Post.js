import React from 'react';
import {Image} from 'cloudinary-react';
import '../styles/post.css';

let Post = React.createClass({
    render: function () {
        return (
            <div className="post" id={this.props.id}>
                <a className="title">{this.props.title}</a>
                <br/>
                <Image cloudName="dt33hi6os" publicId={this.props.picId + '.jpg' } width="300"
                       crop="scale"/>
                <div className="post-action">
                    <div className="action-container-upvote"><a className="upvote"></a></div>
                    <div className="action-container-downvote"><a className="downvote"></a></div>
                    <div className="action-container-comments"><a className="comments"></a></div>
                </div>
                <br/>
            </div>
        )
    }
});

export default Post;