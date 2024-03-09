
/****************************************************************
*Original Author: Jeffrey Paulus                                *
*Date Created: 2-9-24                                           *
*Version: 0.1                                                   *
*Date Last Modified: 3-8-24                                     *
*Modified by: Jeffrey Paulus                                    *
*Modification log:                                              *
***0.1 - 2-7-24 - Created for Project 2                         *
***0.2 - 2-25-24 - Updated for Project 3                        *
***0.3 - 3-8-24 - Added some REGEX                              *
*************************************************************** */


"use strict";

$(document).ready( () => {
    
    
    $("#join_list").click( evt => {

        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const name = $("#Name").val();
        const email1 = $("#email_1").val();
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

        
        let isValid = true;

        // validate the first email address
        if ( email1 === "" || !emailPattern.test(email1) ) {
            isValid = false;
            $("#email_1").next().text("Please enter a valid email.");
        }

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry 
        const firstName = $("#first_name").val().trim(); 
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const lastName = $("#last_name").val().trim(); 
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);
    
        // submit the form if error message is an empty string
        if (isValid == true) {
            //$("#email_form").submit();
            if($("#news_letter").checked == true)
            {
                $("#spanThanks").text('Thanks for joining our email list and our News Letter!');
            }
            else
            {
                $("#spanThanks").text('Thanks for joining our email list!');
            }
            
        } else {
            alert(errorMessage);            
        }
        if (isValid == false) {
			evt.preventDefault();
		}
    });

    $("#clear_form").click( () => {
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        $("#last_name").val("");
        $("#news_letter").checked = true;
        // reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");
        $("#last_name").next().text("*");
        $("#email_1").focus();

    });
    
    $("#email_1").focus();
});