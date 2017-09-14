/**
 * Chris Gonzalez 2017 - JQueryUI widget project - Dialog
 * original site: https://www.lewsstuff.com/
 * This js file is where I make the addition of a JQuery UI dialog forms for 
 * registering a new user and logging in. There is some simple validation using 
 * JQuery Validation. When inputs are "valid", the form submits. However, being 
 * that this project was just created for demonstrating one JQueryUI widget, nothing is 
 * actually being sent to a server. 
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {

    $(function () {


        /*unneeded right now*/
//        var $newEmail = $('#newEmail');
//        var $newPassword = $('#newPassword');
//        var $firstName = $('#firstName');
//        var $lastName = $('#lastName');

//        var $email = ('#newEmail');
//        var $password = ('#password');

        /*Two dialog forms. One for registering users and one for simply logging 
         * in.*/
        var $registerForm = $('#registerForm');
        var $loginForm = $('#loginForm');

        /*Configurations for login dialog box*/
        var loginDialog = $("#login-form").dialog({
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true,
            buttons: {
                "Log in": function () {
                    $($loginForm).submit();
                }, Cancel: function () {
                    loginDialog.dialog("close");
                }
            },
            close: function () {
                loginDialog.dialog("close");
            }
        });
        /*Configurations for register dialog box*/
        var registerDialog = $("#register-form").dialog({
            autoOpen: false,
            height: 435,
            width: 350,
            modal: true,
            buttons: {
                "Submit": function () {
                    $($registerForm).submit();
                }, Cancel: function () {
                    registerDialog.dialog("close");
                }
            },
            close: function () {
                registerDialog.dialog("close");
            }
        });
        /**
         * On click will open appropriate dialog window with form for either 
         * logging in, or registering new users, depending on which link was 
         * clicked.
         */
        $("#customer_login_link").on("click", function () {
            loginDialog.dialog("open");
            return false;
        });

        $("#customer_register_link").on("click", function () {
            registerDialog.dialog("open");
            return false;
        });
        
        /**
         * Very simple validation for login dialog form
         */
        $loginForm.validate({
            onkeyup: false,
            rules: {
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 16
                }, email: {
                    required: true,
                    minlength: 10,
                    maxlength: 50
                }
            },
            messages: {
                password: {
                    required: "Please enter your password.",
                    minlength: "Invalid password",
                    maxlength: "Invalid password"
                }, email: {
                    required: "Please enter your email.",
                    minlength: "Invalid email",
                    maxlength: "Invalid email"
                }
            },
            errorContainer: $("#errorContainer"),
            errorLabelContainer: $("#errorContainer ul"),
            wrapper: "li"
        });
        /**
         * Very simple validation for register dialog form
         */
        $registerForm.validate({
            onkeyup: false,
            rules: {
                newPassword: {
                    required: true,
                    minlength: 8,
                    maxlength: 16
                }, newEmail: {
                    required: true,
                    minlength: 10,
                    maxlength: 50
                }, firstName: {
                    required: true,
                    minlength: 2,
                    maxlength: 35
                }, lastName: {
                    required: true,
                    minlength: 2,
                    maxlength: 35
                }
            },
            messages: {
                newPassword: {
                    required: "Please enter your password.",
                    minlength: "Password must be between 10 and 16 \n\
                                        characters.",
                    maxlength: "Password must be between 10 and 16 \n\
                                        characters."
                }, newEmail: {
                    required: "Please enter your email.",
                    minlength: "Email must be between 10 and 16 \n\
                                        characters.",
                    maxlength: "Email must be between 10 and 16 \n\
                                        characters."
                }, firstName: {
                    required: "Please enter your first name.",
                    minlength: "First name must be between 10 and 16 \n\
                                        characters.",
                    maxlength: "First name must be between 10 and 16 \n\
                                        characters."
                }, lastName: {
                    required: "Please enter your last name.",
                    minlength: "Last name must be between 10 and 16 \n\
                                        characters.",
                    maxlength: "Last name must be between 10 and 16 \n\
                                        characters."
                }
            },
            errorContainer: $("#errorContainer"),
            errorLabelContainer: $("#errorContainer ul"),
            wrapper: "li"
        });


    });

}(window.jQuery, window));