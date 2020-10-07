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

// -----------------------------------------------
// plan tab script
$(document).ready(function(){
	$(".planTabBtn").click(function(){
		var planTab = $(this).attr('dataTabId');
		
		$(".planTabBtn").removeClass("active");
		$(this).addClass("active");

		$(".cpTabItem").removeClass("active");
		$("#"+planTab).addClass("active");
	});
});

// -----------------------------------------------
// tab content item script
$(document).ready(function(){
	$(".tabContentItem").click(function(){
		var parent = $(this).parent().attr('class');
		// remove active only in this parent
		$("." + parent + "> .tabContentItem" ).removeClass("active");
		// add active to new
		$(this).addClass("active");
	});
});

// -----------------------------------------------
// storage config styles
$(document).ready(function(){

	// filesystem show hide function
	function fileSystemShowHide() {
		if ($("#storageConfig2").is(":checked")) {
			$(".fileSystemOption").show();
		}else{
			$(".fileSystemOption").hide();
		}
	}
	
	$(".storageConfig").change(function(){		
		// add/remove active class to parent
		if ($(this).is(":checked")) {
			$(".storageConfigItem").removeClass("active");
			$(this).parent().addClass("active");
		}
		// file system show hide
		fileSystemShowHide(); 
	});

	// file system show hide
	fileSystemShowHide();
});

// -----------------------------------------------
// add storage hide show
$(document).ready(function(){
	// show add storage option
	$(".addVolume").click(function(){		
		$(".addStorageContent").show();
		$(document).scrollTop(750);
	});
	// hide add storage option
	$(".removeVolume").click(function(){		
		$(".addStorageContent").hide();
	});
});