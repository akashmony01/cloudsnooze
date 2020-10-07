// side bar dropdown script
// ========================
$(document).ready(function(){
    $(".sideMenuLink").click(function(){
        $(this).toggleClass("showed");
        $(this).next().toggleClass("showed");
    });
});