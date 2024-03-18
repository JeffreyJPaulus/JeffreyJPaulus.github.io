
/****************************************************************
*Original Author: Jeffrey Paulus                                *
*Date Created: 3-17-24                                          *
*Version: 0.1                                                   *
*Date Last Modified: 3-17-24                                    *
*Modified by: Jeffrey Paulus                                    *
*Modification log:                                              *
***0.1 - 3-17-24 - Creation                                     *
*************************************************************** */

"use strict";

const isDate = (date, datePattern,type) => {
    if (!datePattern.test(date)) { return false; }
    if (type == "full") {
        const dateParts = date.split("/");
        const month = parseInt( dateParts[0] );
        const day = parseInt( dateParts[1] );

        if ( month < 1 || month > 12 ) { return false; }
        if ( day > 31 ) { return false; }
        return true;
    }
    if (type == "cc") {
        const index = date.indexOf( "/" );
        const month = parseInt( date.substring( 0, index ) );

        if ( month < 1 || month > 12 ) { return false; }
        return true;
    } 
};

$(document).ready( () => {
    $('#checkboxes').change(function() {
        let selected = [];
        

        $('#checkboxes input:checked').each(function(){
            selected.push($(this).attr('name'));    
        })  
        //putting checkbox names into string
        var selectedNames = $('#checkboxes input:checked').map(function() {
            return this.name;
        }).get().join(';'); // Use .join(';') to get a semicolon-separated string

        $("#results").val(selectedNames.toString());
        //putting string into local storage
        localStorage.setItem("orderedItems",selectedNames.toString());
        let OrderedItems = localStorage.getItem("orderedItems");
    });


    $( "#order" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const name = $("#Name").val();
        const address = $("#address_1").val();
        const City = $("#City").val();
        const State = $("#State").val();
        const zip = $("#ZipCode").val();
        const card = $("#card").val();
        const ccDate = $("#datepicker").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        const ccDatePattern = /^[01]?\d\/\d{4}$/;
        


        // check user entries for validity
        let isValid = true;
        if ( name === "" ) {
            isValid = false;
            $("#Name").next().text("Please enter a valid Name.");
        }
        if ( address === "") {
            isValid = false;
            $("#address_1").next().text("Please enter an address.");
        }
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#ZipCode").next().text("Please enter a valid zip code.");
        }
        if ( card === "" || !cardPattern.test(card)) {
            isValid = false;
            $("#card").next().text("Please enter a credit card in NNNN-NNNN-NNNN-NNNN format.");
        }
        if ( ccDate === "" || !isDate(ccDate, ccDatePattern, "cc")) {
            isValid = false;
            $("#datepicker").next().text("Please enter a valid date in MM/YYYY format.");
        }
        if ( City === "" ) {
            isValid = false;
            $("#City").next().text("Please a City.");
        }
        if ( State === "" ) {
            isValid = false;
            $("#State").next().text("Please enter a State.");
        }
        if ( isValid ) { 
            // code that saves profile info goes here
            window.open('ThankYou.html','_blank');
            
        }
        if (isValid == false) {
			evt.preventDefault();
		}
        $("#Name").focus(); 
    });



    $( "#clear_form" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        $("#Name").val("");
        $("#address_1").val("");
        $("#address_2").val("");
        $("#City").val("");
        $("#State").val("");
        $("#ZipCode").val("");
        $("#card").val("");
        $("#datepicker").val("");
        $("#results").val("");
        

        
        $("#Name").focus(); 
    });



    // set focus on initial load
    $("#Name").focus();

    $( function() {
        $( "#datepicker" ).datepicker(
            {dateFormat: "mm/yy"}
        );
    } );
    


})
