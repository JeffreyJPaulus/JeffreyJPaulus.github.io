//<!-------------------------------------------------------
//#Original Author: Jeffrey Paulus                         #
//#Date Created: 5-9-24                                    #
//#Version: 0.1                                            #
//#Date Last Modified: 5-9-24                              #
//#Modified by: Jeffrey Paulus                             #
//#Modification log:                                       #
//#--Version 0.1 - 5-9-24 -  Creation                      #
//--------------------------------------------------------->
"use strict";

const isDate = (date, datePattern) => {
  if (!datePattern.test(date)) {
    return false;
  }
  alert(type);
  if (type == "full") {
    alert("here8");
    const dateParts = date.split("/");
    const month = parseInt(dateParts[0]);
    const day = parseInt(dateParts[1]);

    if (month < 1 || month > 12) {
      return false;
    }
    if (day > 31) {
      return false;
    }
    return true;
  }
  if (type == "cc") {
    const index = date.indexOf("/");
    alert(index);
    const month = parseInt(date.substring(0, index));

    if (month < 1 || month > 12) {
      return false;
    }
    return true;
  }
};

$(document).ready(() => {
  $("#save").click(() => {
    $("span").text(""); // clear any previous error messages

    // get values entered by user
    const email = $("#email").val();
    const phone = $("#phone").val();
    const zip = $("#zip").val();
    const dob = $("#dob").val();
    const card = $("#card").val();
    const ccDate = $("#cc_date").val();

    // regular expressions for validity testing
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const zipPattern = /^\d{5}(-\d{4})?$/;
    const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const ccDatePattern = /^[01]?\d\/\d{4}$/;

    // check user entries for validity
    let isValid = true;
    if (email === "" || !emailPattern.test(email)) {
      isValid = false;
      $("#email").next().text("Please enter a valid email.");
    }
    if (phone === "" || !phonePattern.test(phone)) {
      isValid = false;
      $("#phone")
        .next()
        .text("Please enter a phone number in NNN-NNN-NNNN format.");
    }
    alert("here");
    if (zip === "" || !zipPattern.test(zip)) {
      isValid = false;
      $("#zip").next().text("Please enter a valid zip code.");
    }

    if (isValid) {
      // code that saves profile info goes here
    }

    $("#email").focus();
  });

  // set focus on initial load
  $("#email").focus();
});
