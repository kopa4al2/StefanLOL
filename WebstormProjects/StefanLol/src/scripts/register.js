import $ from 'jquery';
import KinveyRequester from '../scripts/kinvey-app-info';


function register() {
    let username = $('#registerUsername').val();
    let password = $('#registerPassword').val();
    let email = $('#registerEmail').val();
    if ( email.indexOf('@') === -1 ) {
        $('#error').show().text("Invalid Email");
        setTimeout(function(){
            $('#error').fadeOut();
        }, 2000)
    } else if ( password.length < 5 ) {
        $('#error').show().text("Password is too short, password must be atleast 5 letters");
        setTimeout(function(){
            $('#error').fadeOut();
        }, 2000)
    } else if(username.length<5) {
        $('#error').show().text('Username must be consisted of atleast 5 characters')
    }
    else {
        KinveyRequester.registerUser(username, password).then(registerSuccessfull, registerFailed);
        function registerSuccessfull(response) {
            $('#success').show().text("Register successfull you can now log in");

            setTimeout(function(){
                $('#success').fadeOut();
                window.location.replace("/#/login_route");
                $('.modal').hide();
            }, 2000)
        }

        function registerFailed(response) {
            $('#error').show().text(response.responseText);
            setTimeout(function(){
                $('#error').fadeOut();
            }, 2000)
        }
    }
}

module.exports = register;