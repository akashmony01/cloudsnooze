// -----------------------------------------------
// select vesrion script
$(document).ready(function(){
    $(".versionName").click(function(){
        // get the value of version
        var versionName = $(this).html();
        // get the current siutable item parent
        var currentDistro = $(this).parents('.distroFooter');
        var distroVersion = $(currentDistro).children('.distroVersion');
        
        // set choosen version
        $('.choosenVersion').html("select version");
        $(distroVersion).children('.choosenVersion').html(versionName);
    });
});

// -----------------------------------------------
// plan tab script
$(document).ready(function(){
	$(".cosTabBtn").click(function(){
		var cosTab = $(this).attr('cosTabId');
		
		$(".cosTabBtn").parent().removeClass("active");
		$(this).parent().addClass("active");

		$(".cosTabItem").removeClass("active");
		$("#"+cosTab).addClass("active");
	});
});

// -----------------------------------------------
// distro content item script
$(document).ready(function(){
    // filesystem show hide function
	function sshAlertShowHide() {
        var currentActiveDistro = $(".distroItem.active");

        if ( $( currentActiveDistro ).hasClass( "sshRequired" ) ) {
            $(".sshAlert").show();
		}else{
			$(".sshAlert").hide();
		}
    }
    
	$(".distroItem").click(function(){
        // remove active from siblings
		$('.distroItem').removeClass("active");
		// add active to new
        $(this).addClass("active");


        var currentImg = $(this).find("img");
        var imgSrc = $(currentImg).attr("src");
        var imgUrl = imgSrc.split(/\.(?=[^\.]+$)/)[0];
        var imgExt = imgSrc.split(/\.(?=[^\.]+$)/)[1];
        var chngUrl = imgUrl + "-blue." + imgExt

        $(currentImg).attr("src", chngUrl);

        // ssh alert show hide
        sshAlertShowHide();
    });


    
    // ssh alert show hide
    sshAlertShowHide();
});

// ------------------------------------------------
// on focus show hide suggestions
$(document).ready(function() {
    // show suggestion
    $( "#searchMarketPlace" ).focusin(function() {
        $( this ).addClass("active");
        $( ".searchItemContainer" ).addClass("active");
    });
    // remove suggestion
    $(document).click (function (e) {
        if (e.target != $('#searchMarketPlace')[0]) {
            $( "#searchMarketPlace" ).removeClass("active");
            $( ".searchItemContainer" ).removeClass("active");
        }
    });
});


// ------------------------------------------------
// select choosen application item from recommended
$(document).ready(function() {
    $(".applicationItem").click(function(){
        // remove active from siblings
        $(".applicationItem").removeClass("active");
        // add active to new
        $(this).addClass("active");
    });
});

// ------------------------------------------------
// select choosen application item from search
$(document).ready(function() {
    $( ".searchItemContainer > .applicationItem" ).click(function() {
        var choosenApplicationData = $( this ).html()
        var choosenItem = $(".choosenApplication > .choosenAppContainer > .applicationItem");
        
        $(".recommendedApplication").hide();
        $(".applicationItem").removeClass("active");
        
        $(choosenItem).html(choosenApplicationData);
        $(choosenItem).addClass("active");
        $(".choosenApplication").addClass("active");
    });
});


// ------------------------------------------------
// import url modal
$(document).ready(function() {
    // show modal
    $(".importUrlBtn").click(function(){
        $(".wrapperForImportUrlModal").addClass("active");
    });
    // hide modal
    $(".cancelUrl").click(function(){
        $(".wrapperForImportUrlModal").removeClass("active");
        $("#importedUrl").val(" ");
    });
    $(".confirmUrl").click(function(){
        $(".wrapperForImportUrlModal").removeClass("active");
    });
});



