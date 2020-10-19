// -----------------------------------------------
// configuration type
$(document).ready(function(){

	// configuration show hide function
	function configTypeShowHide() {
		if ($("#configByPass").is(":checked")) {
            // hide ssh config
            $(".sshConfiguration").hide();
            $(".sshConfiguration > textarea").prop('required',false);
            // show pass config
            $(".passConfiguration").show();
            $(".passConfiguration > input").prop('required',true);

            // remove active from sibling
            $("#sshConfigItem").removeClass('active');
            // add active to choose
            $("#passConfigItem").addClass('active');
        }
        
        else if ($("#configBySsh").is(":checked")) {
            // hide pass config
            $(".passConfiguration").hide();
            $(".passConfiguration > input").prop('required',false);
            // show ssh config
            $(".sshConfiguration").show();
            $(".sshConfiguration > textarea").prop('required',true);
            
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

// -----------------------------------------------
// configuration type
$(document).ready(function(){
    // check confirm password function
	function chkConfPass(e) {
        // main pass value
        var adminPass = $( "#adminUserPass" ).val();
        // confirm pass value
        var confPass = $( "#confirmPass" ).val();

        // fail msg
        var failMsg = "<span class='failAlert'>(password doesn't match)<span>";

        // getting the current parent
        var containerParent = $("#confirmPass").parents(".form-group");
        // getting the current label
        var inputLabel = $( containerParent ).children(".formLabel");


        if (adminPass != confPass) {
            $(inputLabel).children(".failAlert").remove();
            $(inputLabel).append(failMsg);

            e.preventDefault();
        }else{
            $(inputLabel).children(".failAlert").remove();
        }
	}

    // form alidation function
    function formValidation() {
        $('form.scForm').find('input, textarea, select').each(function(){
            if($(this).prop('required')){
                // get input type
                var inputType = $(this).attr('type');

                // fail alert with span tatg and class 
                var failMsg = "<span class='failAlert'>(this field is required)<span>";

                // getting the current parent
                var containerParent = $( this ).parents(".form-group");
                // getting the current label
                var inputLabel = $( containerParent ).children(".formLabel");
                // alert container
                var alertContainer = $( inputLabel ).children(".failAlert");

                // show fail msg
                function showFailMsg() {
                    // reseting label if already has alert
                    $( alertContainer ).remove();
                    // append fail message
                    $( inputLabel ).append(failMsg);
                }

                // hide fail msg
                function hideFailMsg(){
                    $( alertContainer ).remove();
                }
                
                // for radio type input
                if (inputType == "radio") {                
                    if ($('input[type="radio"]:checked').length == 0) {        
                        showFailMsg();
                    }else{
                        hideFailMsg();
                    }
                }
                // for checkbox type input
                else if (inputType == "checkbox") {
                    if ($('input[type="checkbox"]:checked').length == 0) {        
                        showFailMsg();
                    }else{
                        hideFailMsg();
                    }
                }
                // for text, password, email, textare input 
                else{
                    if (!$(this).val()) {        
                        showFailMsg();
                    }else{
                        hideFailMsg();
                    }
                }

            }
        });
    }

    // hide fail msg by self focus out
    $( "input, textarea, select" ).focusout(function() {
        // getting the current parent
        var containerParent = $( this ).parents(".form-group");
        // getting the current label
        var inputLabel = $( containerParent ).children(".formLabel");
        // alert container
        var alertContainer = $( inputLabel ).children(".failAlert");

        if ($(this).val()) {        
            // reseting label if already has alert
            $( alertContainer ).remove();
        }
    });

    // call conifrm password function 
    $( "#confirmPass" ).focusout(function(e) {
        chkConfPass(e);
    });

    // call validation function
    $("#submitForm").click(function(e){
        formValidation();
        chkConfPass(e);
    });
});