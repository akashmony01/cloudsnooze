// -----------------------------------------------
// page loader script
$(window).on('load', function(){
	$(".loader").addClass("hidden");
});

// -----------------------------------------------
// scroll top btn
$(document).ready(function(){

	$(window).scroll(function() {
		var windowScroll= $(window).scrollTop()
		
		if (windowScroll > 100) {
			$(".scrollTop").addClass("active");
		}else{
			$(".scrollTop").removeClass("active");
		}
	});

	$(".scrollTop").click(function(){
		$(document).scrollTop(0);
	});
});


// -----------------------------------------------
// activating tooltip
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

// -----------------------------------------------
// side menu slider
$(document).ready(function(){
	$(".sideMenuSlider").click(function(){
		$(this).toggleClass("slided");
		$(".sideBar").toggleClass("slided");
		$(".mainContent").toggleClass("slided");
	});
});

// -----------------------------------------------
// main menu drop down script
$(document).ready(function(){
	$(".seconderyLink").click(function(){
		// button class slided toggle
		$(this).toggleClass("slided");
		// parent class add
		$(this).parent().toggleClass("slided");
		// secondery menu toggle class
		$(this).next(".seconderyList").toggleClass("slided");
	});

	// hide on mouse leave
	$(".seconderyItem").mouseleave(function(){
		$(this).removeClass("slided");
		$(".seconderyLink").removeClass("slided");
		$(".seconderyList").removeClass("slided");
	});
});


// ------------------------------------------------
// main menu search icon show hide in mobile
$(document).ready(function() {
    // show suggestion
    $( "#search" ).focusin(function() {
		$(".mainNav").addClass("droppedSearch");
		$(".mainNav").removeClass("droppedMenu");
    });
    // remove suggestion
    $(document).click (function (e) {
        if (e.target != $('#search')[0]) {
            $(".mainNav").removeClass("droppedSearch");
        }
    });
});


// ------------------------------------------------
// main menu show hide in mobile
$(document).ready(function() {
    // show suggestion
    $( "#mainNavRightMobileOpener" ).click(function() {
		$(".mainNav").toggleClass("droppedMenu");
    });
});
mainNavRightMobileOpener