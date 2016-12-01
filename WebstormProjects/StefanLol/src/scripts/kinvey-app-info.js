// let authHeaders = btoa('kid_rJki0-DGl' + ':' + 'f4b3d881ed2448a5bf8f35169c7a9f54');
// let app = {
//     appId: 'kid_rJki0-DGl',
//     appPwd: 'f4b3d881ed2448a5bf8f35169c7a9f54',
//     hostAdd: 'https://baas.kinvey.com/',
//     header: {
//         Authorization:'Basic ' + authHeaders
//     }
// }
import $ from 'jquery';

const KinveyRequester = (function() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_rJki0-DGl";
    const appSecret = "f4b3d881ed2448a5bf8f35169c7a9f54";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function registerUser(username, password) {

        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function getKinveyUserAuthHeaders() {
        return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken')
        };
    }

    function logoutUser() {
        sessionStorage.clear();
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });

    }

    function findAllPosts() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/posts",
             headers: {'Authorization': "Kinvey 6552b5d7-93aa-49e4-9369-2473b80b348c.Nmg8KuaThV286el6H4V9TEKKDJEB9Ff9BnMHmaQm4B4="}
        });
    }

    function findPostById(postId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/posts/" + postId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createBook(title, author, description) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description }
        });
    }

    function editBook(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description }
        });
    }

    function deleteBook(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    return {
        loginUser, registerUser, logoutUser,
        findAllPosts, createBook, findPostById, editBook, deleteBook
    }
})();

export default KinveyRequester;