var qualifyURL = function (pathOrURL) {
    if (!(new RegExp('^(http(s)?[:]//)', 'i')).test(pathOrURL)) {
        return $(document.body).data('base') + pathOrURL;
    }

    return pathOrURL;
};

$(document).ready(function () {
    $("#signup-form-ead").validate({
        errorPlacement: function (error, element) {
            element.parent().after(error);
        },
        rules: {
            Name: {
                required: true
            },
            Password: {
                required: true
            },
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
        $.getJSON(qualifyURL("User/UsernameExists") + "?username=" + userName, function (data) {
            if (data) {
                $('#verify-result-ead').text("User already exists in database");
            }
            else {
                $('#verify-result-ead').text("User Name is available");
            }
        });
        return false;
    });
});