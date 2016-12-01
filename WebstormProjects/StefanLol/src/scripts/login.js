import KinveyRequester from '../scripts/kinvey-app-info';
import $ from 'jquery';
let login = function () {
    let username = $("#loginUsername").val();
    let password = $("#loginPassword").val();
    if ( username.length === 0 )
        $('#error').show().text('Please fill in your username');
    else if ( password.length === 0 )
        $('#error').show().text('Please fill in your password');
    else {
        KinveyRequester.loginUser(username, password).then(function (response) {
                let auth = response._kmd.authtoken;
                let username = response.username;
                sessionStorage[ 'username' ] = username;
                sessionStorage[ 'authToken' ] = auth;
                $("#success").show().text('Login successful')
                setTimeout(function () {
                    window.location.replace("/#");
                    $("#success").fadeOut();
                    location.reload();
                }, 1000)
            },
            function errorLoggingIn(r) {
            let response = JSON.parse(r.responseText);
                $("#error").show().text(response.description);
            })
}
};
module.exports = login;