$(document).ready(function () {
    $("#signup-form-ead").validate({
        errorPlacement: function (error, element) {
            element.parent().after(error);
        },
        rules: {
            Email: {
                required: true,
                email:true
            }
        }
    });
    $("#login-form-ead").validate({
        errorPlacement: function (error, element) {
            element.parent().after(error);
        }
    });

    $('#btn-verify-name-ead').click(function () {
        var userName = $('#signup-name-ead').val();
        $.getJSON("/User/UsernameExists?Username=" + userName, function (data) {
            if (data) {
                $('#verify-result-ead').text("User already exists in database");
            }
            else {
                $('#verify-result-ead').text("User Name is available");
            }
        });
    });
});