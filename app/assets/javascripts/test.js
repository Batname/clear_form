//$(document).ajaxStart(function () {
//    if ($( "label" ).hasClass( "error" )) {
//        $( ".error" ).hide();
//        console.log("test");
//    }
//});
//
//
$(document).ajaxSuccess(function () {
    if ($(".error").is(":visible")) {
        console.log("error show.");
    } else {
        $('#new_upload').on('click', '.btn', function () {
            $("#battest").removeClass("input_upload input_upload_bg").addClass("input_upload loading_but");
        })
        console.log("error display none.");
    }

});


