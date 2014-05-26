$(document).ajaxStart(function () {
    $('#file_send').bind("click", function () {
        var imgVal = $('#file_upload').val();
        if (imgVal == '') {
                if ($('#upload_name').val().length > 0) {
                    if ($('#upload_email').val().length > 0) {
                        if ($('#upload_massage').val().length > 0) {
                            if ($(".error").is(":visible") == false) {
                                $('#new_upload').on('click', '.btn', function () {
                                    $("#battest").removeClass("input_upload input_upload_bg").addClass("input_upload loading_but");
                                })
                                console.log("error display none");
                            }
                        }
                    }
                }
        } else {
            if ($('#upload_name').val().length > 0) {
                if ($('#upload_email').val().length > 0) {
                    if ($('#upload_massage').val().length > 0) {
                        console.log("error show.");
                        $('#new_upload').on('click', '.btn', function () {
                            $("#battest").removeClass("input_upload input_upload_bg").addClass("input_upload loading_but");
                        })
                    }
                }
            }
        }

    });
});





//
//$(document).ajaxSuccess(function () {
//    if ($(".error").is(":visible") == true) {
//        console.log("error show.");
//    } else {
//        $('#new_upload').on('click', '.btn', function () {
//            $("#battest").removeClass("input_upload input_upload_bg").addClass("input_upload loading_but");
//        })
//        console.log("error display none.");
//    }
//
//});


