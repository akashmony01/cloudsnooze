// ------------------------------------------------
// select location script
$(document).ready(function() {
    $(".clItem").click(function(){
        // remove active from siblings
        $(".clItem").removeClass("active");
        // add active to new
        $(this).addClass("active");
    });

    // select location option
    $(".clCountryOption").click(function(){
               
        if (!$(this).hasClass("disabled")) {
            var currentLocation = $(this).parents('.clItem');
            var currentOption = $(currentLocation).children(".clItemFooter");
            // remove active from siblings
            $(currentOption).children(".clCountryOption").removeClass("active");
            
            // add active to new
            $(this).addClass("active");
        }
    });
});