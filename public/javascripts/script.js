/**
 * Created by skiff on 17.04.14.
 */

$(document).ready(function(){


    $(".logo").animate({opacity: 1}, 3000);
    $(".back_join").css({width: "0", height: "196px"});

    var secondary_nav = $("#sec_nav"), nav_shadow = $(".nav_shadow");

    $(window).scroll(function(){
        if ($(this).scrollTop() > 120){
            secondary_nav.slideDown(1000);
            nav_shadow.slideDown(1000);
        }
        if ($(this).scrollTop() <= 120){
            secondary_nav.slideUp(500);
            nav_shadow.slideUp(500);
        }
    });

    $("#menu_nav_sec ul li a, .top_button_sec a, .joinus a").click(function(){
        var selected = $(this).attr('href');
        $.scrollTo(selected, 500);
        return false;
    });

    $(".katerina").mouseenter(function(){
        $(".katerina span").stop(1, 1).animate({"top":"0"}, 900);
        $(".katerina_mask").stop(1, 1).animate({"background-position":"0%"}, 500);
    }).mouseleave(function(){
            $(".katerina span").stop(1, 1).animate({"top":"100px"}, 300);
            $(".katerina_mask").stop(1, 1).animate({"background-position":"100%"}, 500);
        });

    $(".nikita").mouseenter(function(){
        $(".nikita span").stop(1, 1).animate({"top":"0"}, 900);
        $(".nikita_mask").stop(1, 1).animate({"background-position":"0%"}, 500);
    }).mouseleave(function(){
            $(".nikita span").stop(1, 1).animate({"top":"100px"}, 300);
            $(".nikita_mask").stop(1, 1).animate({"background-position":"100%"}, 500);
        });

    $(".irina").mouseenter(function(){
        $(".irina span").stop(1, 1).animate({"top":"0"}, 900);
        $(".irina_mask").stop(1, 1).animate({"background-position":"100%"}, 500);
    }).mouseleave(function(){
            $(".irina span").stop(1, 1).animate({"top":"100px"}, 300);
            $(".irina_mask").stop(1, 1).animate({"background-position":"0%"}, 500);
        });

    $(".julia").mouseenter(function(){
        $(".julia span").stop(1, 1).animate({"top":"0"}, 900);
        $(".julia_mask").stop(1, 1).animate({"background-position":"100%"}, 500);
    }).mouseleave(function(){
            $(".julia span").stop(1, 1).animate({"top":"100px"}, 300);
            $(".julia_mask").stop(1, 1).animate({"background-position":"0%"}, 500);
        });

    $(".joinus").mouseenter(function(){
        $(".front_join").stop(1, 1).animate({width: "0", height: "196px"}, 200);
        $(".back_join").stop(1, 1).delay(200).animate({width: "251px", height: "196px"}, 200);
    }).mouseleave(function(){
            $(".front_join").stop(1, 1).delay(200).animate({width: "251px", height: "196px"}, 200);
            $(".back_join").stop(1, 1).animate({width: "0", height: "196px"}, 200);
        });


    $(function(){
        $("#file_upload").click(function(){
            $("#file_upload").change(function(){
                var uploaded = $("#file_upload"), upfile = $(".input_upload");
                if(uploaded == 0){
                    upfile.css('backgroundImage','url(images/form/upload.png)');
                }else{
                    upfile.css('backgroundImage','url(images/uploaded.png)');
                };
            });
        });
    });

    //script for service

    $(function(){
        var yourImage = $(".your_image"), yourAmusement = $(".your_amusement"), yourComfort = $(".your_comfort"), yourProductivity = $(".your_productivity"), yourImageCont = $(".your_image_cont"), yourAmusementCont = $(".your_amusement_cont"), yourComfortCont = $(".your_comfort_cont"), yourProductivityCont = $(".your_productivity_cont");

        yourImage.click(function(){
            yourImageCont.fadeIn(800), yourAmusementCont.fadeOut(0), yourComfortCont.fadeOut(0), yourProductivityCont.fadeOut(0); return false;
        });

        yourAmusement.click(function(){
            yourAmusementCont.fadeIn(800), yourImageCont.fadeOut(0), yourComfortCont.fadeOut(0), yourProductivityCont.fadeOut(0); return false;
        });

        yourComfort.click(function(){
            yourComfortCont.fadeIn(800), yourImageCont.fadeOut(0), yourAmusementCont.fadeOut(0), yourProductivityCont.fadeOut(0); return false;
        });

        yourProductivity.click(function(){
            yourProductivityCont.fadeIn(800), yourImageCont.fadeOut(0), yourAmusementCont.fadeOut(0), yourComfortCont.fadeOut(0); return false;
        });

    });

    $(function(){
        var yourImage = $(".your_image"), yourAmusement = $(".your_amusement"), yourComfort = $(".your_comfort"), yourProductivity = $(".your_productivity");
        yourAmusement.click(function(){
            $(".li2").addClass("lin_grad"), $(".li1").removeClass("lin_grad"), $(".li3").removeClass("lin_grad"), $(".li4").removeClass("lin_grad");
        });
        yourImage.click(function(){
            $(".li1").addClass("lin_grad"), $(".li2").removeClass("lin_grad"), $(".li3").removeClass("lin_grad"), $(".li4").removeClass("lin_grad");
        });
        yourComfort.click(function(){
            $(".li3").addClass("lin_grad"), $(".li1").removeClass("lin_grad"), $(".li2").removeClass("lin_grad"), $(".li4").removeClass("lin_grad");
        });
        yourProductivity.click(function(){
            $(".li4").addClass("lin_grad"), $(".li1").removeClass("lin_grad"), $(".li3").removeClass("lin_grad"), $(".li2").removeClass("lin_grad");
        });
    });

    $(function(){
        var yourImage = $(".your_image"), yourAmusement = $(".your_amusement"), yourComfort = $(".your_comfort"), yourProductivity = $(".your_productivity");
        yourAmusement.click(function(){
            yourImage.removeClass("service_normal service_active"), yourAmusement.removeClass("service_normal service_active"), yourComfort.removeClass("service_normal service_active"), yourProductivity.removeClass("service_normal service_active"), yourImage.addClass("service_normal"), yourAmusement.addClass("service_active"), yourComfort.addClass("service_normal"), yourProductivity.addClass("service_normal");
        });
        yourImage.click(function(){
            yourImage.removeClass("service_normal service_active"), yourAmusement.removeClass("service_normal service_active"), yourComfort.removeClass("service_normal service_active"), yourProductivity.removeClass("service_normal service_active"), yourImage.addClass("service_active"), yourAmusement.addClass("service_normal"), yourComfort.addClass("service_normal"), yourProductivity.addClass("service_normal");
        });
        yourComfort.click(function(){
            yourImage.removeClass("service_normal service_active"), yourAmusement.removeClass("service_normal service_active"), yourComfort.removeClass("service_normal service_active"), yourProductivity.removeClass("service_normal service_active"), yourImage.addClass("service_normal"), yourAmusement.addClass("service_normal"), yourComfort.addClass("service_active"), yourProductivity.addClass("service_normal");
        });
        yourProductivity.click(function(){
            yourImage.removeClass("service_normal service_active"), yourAmusement.removeClass("service_normal service_active"), yourComfort.removeClass("service_normal service_active"), yourProductivity.removeClass("service_normal service_active"), yourImage.addClass("service_normal"), yourAmusement.addClass("service_normal"), yourComfort.addClass("service_normal"), yourProductivity.addClass("service_active");
        });
    });

    $(function(){
        var yourImage = $(".your_image"), yourAmusement = $(".your_amusement"), yourComfort = $(".your_comfort"), yourProductivity = $(".your_productivity");
        var imageLeft = $(".your_image_cont_left"), imageRight = $(".your_image_cont_right"), amusementLeft = $(".your_amusement_cont_left"), amusementRight = $(".your_amusement_cont_right"), comfortLeft = $(".your_comfort_cont_left"), comfortRight = $(".your_comfort_cont_right"), productivityLeft = $(".your_productivity_cont_left"), productivityRight = $(".your_productivity_cont_right");
        yourAmusement.click(function(){
            imageLeft.hide().css({right: "600px"}), imageRight.hide().css({left: "600px"}), comfortLeft.hide().css({right: "600px"}), comfortRight.hide().css({left: "600px"}), productivityLeft.hide().css({right: "600px"}), productivityRight.hide().css({left: "600px"}), amusementLeft.show().animate({right: "0"}, 500), amusementRight.show().animate({left: "0"}, 500);
        });
        yourComfort.click(function(){
            imageLeft.hide().css({right: "600px"}), imageRight.hide().css({left: "600px"}), amusementLeft.hide().css({right: "600px"}), amusementRight.hide().css({left: "600px"}), productivityLeft.hide().css({right: "600px"}), productivityRight.hide().css({left: "600px"}), comfortLeft.show().animate({right: "0"}, 500), comfortRight.show().animate({left: "0"}, 500);
        });
        yourProductivity.click(function(){
            imageLeft.hide().css({right: "600px"}), imageRight.hide().css({left: "600px"}), amusementLeft.hide().css({right: "600px"}), amusementRight.hide().css({left: "600px"}), comfortLeft.hide().css({right: "600px"}), comfortRight.hide().css({left: "600px"}), productivityLeft.show().animate({right: "0"}, 500), productivityRight.show().animate({left: "0"}, 500);
        });
        yourImage.click(function(){
            comfortLeft.hide().css({right: "600px"}), comfortRight.hide().css({left: "600px"}), amusementLeft.hide().css({right: "600px"}), amusementRight.hide().css({left: "600px"}), productivityLeft.hide().css({right: "600px"}), productivityRight.hide().css({left: "600px"}), imageLeft.show().animate({right: "0"}, 500), imageRight.show().animate({left: "0"}, 500);
        });
    });


    //script for works

    $(function(){
        var brandingCont = $(".nav_branding"), webCont = $(".nav_web"), printCont = $(".nav_print"), packingCont = $(".nav_packing"), architecturalCont = $(".nav_architectural"), appsCont = $(".nav_apps"), gamedevCont = $(".nav_gamedev"), branding = $(".branding_li"), web = $(".web_li"), print = $(".print_li"), packing = $(".packing_li"), arch = $(".arch_li"), apps = $(".apps_li"), gamedev = $(".gamedev_li"), allview = $(".view_li");

        branding.click(function(){
            brandingCont.show(800), webCont.hide(), printCont.hide(), packingCont.hide(),  architecturalCont.hide(),  appsCont.hide(),  gamedevCont.hide(); return false;
        });

        web.click(function(){
            webCont.show(800), brandingCont.hide(), printCont.hide(), packingCont.hide(),  architecturalCont.hide(),  appsCont.hide(),  gamedevCont.hide(); return false;
        });

        print.click(function(){
            printCont.show(800), webCont.hide(), brandingCont.hide(), packingCont.hide(),  architecturalCont.hide(),  appsCont.hide(),  gamedevCont.hide(); return false;
        });

        packing.click(function(){
            packingCont.show(800), webCont.hide(), brandingCont.hide(), printCont.hide(),  architecturalCont.hide(),  appsCont.hide(),  gamedevCont.hide(); return false;
        });

        arch.click(function(){
            architecturalCont.show(800), webCont.hide(), brandingCont.hide(), printCont.hide(),  packingCont.hide(),  appsCont.hide(),  gamedevCont.hide(); return false;
        });

        apps.click(function(){
            appsCont.show(800), webCont.hide(), brandingCont.hide(), printCont.hide(),  architecturalCont.hide(),  packingCont.hide(),  gamedevCont.hide(); return false;
        });

        gamedev.click(function(){
            gamedevCont.show(800), webCont.hide(), brandingCont.hide(), printCont.hide(),  architecturalCont.hide(),  appsCont.hide(),  packingCont.hide(); return false;
        });

        allview.click(function(){
            packingCont.show(800), webCont.show(800), brandingCont.show(800), printCont.show(800),  architecturalCont.show(800),  appsCont.show(800),  gamedevCont.show(800); return false;
        });

    });

    $(function(){
        var branding = $(".branding_li"), web = $(".web_li"), print = $(".print_li"), packing = $(".packing_li"), arch = $(".arch_li"), apps = $(".apps_li"), gamedev = $(".gamedev_li"), allview = $(".view_li");

        branding.click(function(){
            branding.addClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        web.click(function(){
            branding.removeClass("act_gal_nav"), web.addClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        print.click(function(){
            branding.removeClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.addClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        packing.click(function(){
            branding.removeClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.addClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        arch.click(function(){
            branding.removeClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.addClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        apps.click(function(){
            branding.removeClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.addClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        gamedev.click(function(){
            branding.removeClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.addClass("act_gal_nav"), allview.removeClass("act_gal_nav");
        });

        allview.click(function(){
            branding.removeClass("act_gal_nav"), web.removeClass("act_gal_nav"), print.removeClass("act_gal_nav"), packing.removeClass("act_gal_nav"),  arch.removeClass("act_gal_nav"),  apps.removeClass("act_gal_nav"),  gamedev.removeClass("act_gal_nav"), allview.addClass("act_gal_nav");
        });

    });

});
