
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

//modified code snipet from w3 schools and added comments on how it works

//Getting array of elements in class
let coll = document.getElementsByClassName("collapsible");

//looping through array and assigning the event listener on click
for (let i = 0; i < coll.length; i++) 
{
    coll[i].addEventListener
    (
        "click", function() 
        {
            //this.classList.toggle("active");
            let content = this.nextElementSibling;
            //check if child lists are displayed, if not display as block, if already displayed as block then change to display none.
            if (content.style.display === "block") 
            {
                content.style.display = "none";
                coll[i].style.listStyleType = "square";
            } else
            {
                content.style.display = "block";
                coll[i].style.listStyleType = "circle";
            }
        }
    );
}