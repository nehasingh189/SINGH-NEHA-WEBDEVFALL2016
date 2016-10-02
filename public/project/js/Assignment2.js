function RedirectToRegistration()
{
    window.open('../User/Register.html', '_self');
}

function RedirectToLogin()
{
    window.open('../User/Login.html', '_self');
}

function RedirectToWishList()
{
    window.open('../WebSite/website-list.html', '_self');
}

function RedirectToWidgetList() {
    window.open('../Widget/widget-list.html', '_self');
}

function RedirectToPageList() {
    window.open('../Pages/Page-list.html', '_self');
}

function ValidateLogin()
{
    $('#form1').bootstrapValidator({
        //container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }, //end of feedbackIcons
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Username is required.'
                    }
                }
            },
            inputPassword: {
                validators: {
                    notEmpty: {
                        message: 'Password is required.'
                    }
                }
            }
        } // end of fields
        //onSuccess: function (e, data) {
        //    alert('Success');
        //    window.open('../User/Profile.html', '_self');
        //}
    });// end of form1
}

function ValidateRegistration()
{
    $('#form1').bootstrapValidator({
        //container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }, //end of feedbackIcons
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Username is required.'
                    }
                }
            },
            inputPassword: {
                validators: {
                    notEmpty: {
                        message: 'Password is required.'
                    },
                    identical: {
                        field: 'verifyPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            verifyPassword: {
                validators: {
                    notEmpty: {
                        message: 'Verify password is required.'
                    },
                    identical: {
                        field: 'inputPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
        } // end of fields
    });// end of form1
}

function ValidateProfile()
{
    $('#form1').bootstrapValidator({
        //container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }, //end of feedbackIcons
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Username is required.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required.'
                    }
                }
            },
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'First name is required.'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'Last name is required.'
                    }
                }
            }
        } // end of fields
        //onSuccess: function (e, data) {
        //    alert('Success');
        //    window.open('../User/Profile.html', '_self');
        //}
    });// end of form1
}