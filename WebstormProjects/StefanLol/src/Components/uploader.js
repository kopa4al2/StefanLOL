import React, {Component} from 'react';
import $ from 'jquery';
import KinveyRequester from '../scripts/kinvey-app-info';
import '../styles/uploader.css';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        let title = $("#postTitle").val();
        console.log(title)
        if (title.length === 0 )
            $('#error').show().text("Please add a title to your post");
        else {
            let formData = new FormData();
            formData.append('file', this.state.file);
            formData.append('upload_preset', 'zbt07dal');
            $.ajax({
                method: 'POST',
                url: "https://api.cloudinary.com/v1_1/dt33hi6os/image/upload",
                xhr: function () {  // Custom XMLHttpRequest
                    var myXhr = $.ajaxSettings.xhr();
                    if ( myXhr.upload ) { // Check if upload property exists
                        //  myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
                    }
                    return myXhr;
                },
                data: formData,
                cache: false,
                contentType: false,
                processData: false
            }).then(this.ajaxSuccess, function () {
                alert('error')
            });
        }
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[ 0 ];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    ajaxSuccess(response) {
        let picId = response.public_id; //Id in cloudinary
        let picFormat = response.format; // *.?
        let picType = response.resource_type; //Maybe a video?
        let postTitle = $('#postTitle').val();
        let author = sessionStorage.username;
        KinveyRequester.createPost(postTitle, author, picId, picType, picFormat) //add a Post to Kinvey backend

    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if ( imagePreviewUrl ) {
            $imagePreview = (<img src={imagePreviewUrl}/>);
        }

        return (
            <div>
                <form id="uploader-form" onSubmit={this._handleSubmit}>
                    <input type="text" id="postTitle" placeholder="Post title"/>
                    <br/>
                    <input type="file" onChange={this._handleImageChange}/>
                    <br/>
                    <div id="imagePreview">
                    {$imagePreview}
                    </div>
                    <br/>
                    <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                </form>
            </div>
        )
    }

}

export default ImageUpload;