$("#profile-form-ead").validate({
    errorPlacement: function (error, element) {
        element.parent().after(error);
    }
});