import React, {Component} from 'react';
import './App.css';
import './styles/loader-style.css'
import NavBar from './Components/nav-bar';
import $ from 'jquery';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.username,
            userId: sessionStorage.userId
        }
    }

    render() {
        return (
            <div>
                <NavBar username={this.state.username}/>
                <div className="cs-loader">
                    <div className="cs-loader-inner">
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                    </div>
                </div>
                <div id="error" className="notification"></div>
                <div id="success" className="notification"></div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }

    componentDidMount() {
        $("#error, #success").click(function() {
            $(this).fadeOut();
        });
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: function () {
                $(".cs-loader").show()
            },
            ajaxStop: function () {
                $(".cs-loader").hide()
            }
        });
    }

}

export default Layout;
