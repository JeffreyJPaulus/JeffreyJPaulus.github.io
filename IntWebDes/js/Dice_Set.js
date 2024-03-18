
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

$(document).ready( () => 
//accordion widget
    $("#accordion").accordion({ 
        event: "click",
        heightStyle: "content",
        collapsible: true,
        active:true 
    })
    )
  
    const toggle = evt => {
        const h2Element = evt.currentTarget;                 // get the clicked h2 element
        const divElement = h2Element.nextElementSibling;     // get h2's sibling div

        h2Element.classList.toggle("minus");
        divElement.classList.toggle("open");

        evt.preventDefault();   // cancel default action of h2 tag's <a> tag
    };

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs h2");
    
    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
});

