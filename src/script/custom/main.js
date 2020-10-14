// -----------------------------------------------
// page loader script
$(window).on('load', function(){
	$(".loader").addClass("hidden");
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