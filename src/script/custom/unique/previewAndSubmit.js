// -----------------------------------------------
// configuration type
$(document).ready(function(){

	// filesystem show hide function
	function configTypeShowHide() {
		if ($("#configByPass").is(":checked")) {
            // hide ssh config
            $(".sshConfiguration").hide();
            // show pass config
            $(".passConfiguration").show();

            // remove active from sibling
            $("#sshConfigItem").removeClass('active');
            // add active to choose
            $("#passConfigItem").addClass('active');
        }
        
        else if ($("#configBySsh").is(":checked")) {
            // hide pass config
            $(".passConfiguration").hide();
            // show ssh config
            $(".sshConfiguration").show();
            
            // add active to choose
            $("#passConfigItem").removeClass('active');
            // add active to choose
            $("#sshConfigItem").addClass('active');
		}
	}
    
    // show on change of input
	$(".configInput").change(function(){		
		configTypeShowHide();
	});

	// file system show hide
	configTypeShowHide();
});