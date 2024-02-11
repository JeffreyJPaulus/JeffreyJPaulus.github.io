
/****************************************************************
*Original Author: Jeffrey Paulus                                *
*Date Created: 2-9-24                                           *
*Version: 0.1                                                   *
*Date Last Modified: 2-9-24                                     *
*Modified by: Jeffrey Paulus                                    *
*Modification log:                                              *
***0.1 - 2-7-24 - Created for Project 2                         *
*************************************************************** */


"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");

    
        // create an error message and set it to an empty string
        let errorMessage = "";
        let validEntry = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            errorMessage += "First email is required.\n";
            email1.nextElementSibling.textContent = "* (Required Field)"
            validEntry = false;
        }
    
        if (email2.value == "") { 
            errorMessage += "Second email is required.\n";
            email2.nextElementSibling.textContent = "* (Required Field)"
            validEntry = false;
        }
    
        if (email1.value != email2.value) { 
            errorMessage += "Both emails must match.\n";
            email1.nextElementSibling.textContent = "* (Both emails much match)"
            email2.nextElementSibling.textContent = "* (Both emails much match)"
            validEntry = false;
        }
    
        if (firstName.value == "") {
            errorMessage += "First name is required.\n";
            firstName.nextElementSibling.textContent = "* (Required Field)"
            validEntry = false;
        }
    
        // submit the form if error message is an empty string
        if (errorMessage == "" && validEntry == true) {
            //$("#email_form").submit();
            if($("#news_letter").checked == true)
            {
                alert('Thanks for joining our email list and our News Letter!');
            }
            else
            {
                alert('Thanks for joining our email list!');
            }
            
        } else {
            alert(errorMessage);            
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
        $("#news_letter").checked = true;
        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});