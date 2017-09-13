/**
 * Chris Gonzalez 2017
 * This js file is where I make the addition of a JQuery UI dialog form. 
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {

    $(function () {

        var dialog, form;
        /*register inputs*/
        var $newEmail = $('#newEmail');
        var $newPassword = $('#newPassword');
        var $firstName = $('#firstName');
        var $lastName = $('#lastName');
        var $registerForm = $('#registerForm');

        /*log in inputs*/
        var $email = ('#newEmail');
        var $password = ('#password');
        var $loginForm = $('#loginForm');

        function createAccount() {
            registerDialog.dialog("close");
            $('#registerForm')[0].reset();
        }

        function logIn() {
            loginDialog.dialog("close");
            $('#loginForm')[0].reset();
        }

        loginDialog = $("#login-form").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                "Log in": logIn,
                Cancel: function () {
                    loginDialog.dialog("close");
                }
            },
            close: function () {
                loginDialog.dialog("close");
            }
        });

        registerDialog = $("#register-form").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                "Create an account": createAccount,
                Cancel: function () {
                    registerDialog.dialog("close");
                }
            },
            close: function () {
                registerDialog.dialog("close");
            }
        });




        $("#customer_login_link").button().on("click", function () {
            loginDialog.dialog("open");
            return false;
        });

        $("#customer_register_link").button().on("click", function () {
            registerDialog.dialog("open");
            return false;
        });

    });

}(window.jQuery, window));