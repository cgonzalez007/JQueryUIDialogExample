/**
 * Chris Gonzalez 2017
 * This js file is where I make the addition of a JQuery UI dialog forms for 
 * registering a new user and logging in. 
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


        var $registerForm = $('#registerForm');

        /*unneeded right now*/
//        var $email = ('#newEmail');
//        var $password = ('#password');


        var $loginForm = $('#loginForm');
        /**
         * Closes dialog and clears inputs. In a real scenario the email and
         * password would have to be sent to the server and verified. 
         */
        function createAccount() {
            registerDialog.dialog("close");
            $registerForm[0].reset();
        }
        /**
         * Closes dialog and clears inputs. In a real scenario the inputs would
         * be sent to the server to create a new user record. More would be
         * done to validate/check inputs as well. 
         */
        function logIn() {
            $('#loginForm').validate({
		onkeyup: false,
		rules: {
			password: {
				required: true,
				range: [8,16]
			},email: {
				required: true,
				range: [10,50]
			}
		},
		messages: {
			password: {
				required: "Please enter your password.",
				range: "Password must be between 10 and 16 \n\
                                        characters."
			},email: {
				required: "Please enter your email.",
				range: "Password must be between 10 and 50 \n\
                                        characters."
			}
		},
		errorContainer: $("#errorContainer"),
		errorLabelContainer: $("#errorContainer ul"),
		wrapper: "li"
	});
            loginDialog.dialog("close");
            $loginForm[0].reset();
        }
        /*Configurations for login dialog box*/
        var loginDialog = $("#login-form").dialog({
            autoOpen: false,
            height: 300,
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
        /*Configurations for register dialog box*/
        var registerDialog = $("#register-form").dialog({
            autoOpen: false,
            height: 435,
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

        $("#customer_login_link").on("click", function () {
            loginDialog.dialog("open");
            return false;
        });

        $("#customer_register_link").on("click", function () {
            registerDialog.dialog("open");
            return false;
        });
        
        

    });

}(window.jQuery, window));