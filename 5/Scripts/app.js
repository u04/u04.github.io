/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
"use strict";
(function () {
  function Start() {
    console.log("[#2] I am inside start funcation");

    let title = document.title;
    switch (title) {
      case "About Me":
 //====================index text===============================================================================
 let XHR = new XMLHttpRequest();       
        XHR.addEventListener("readystatechange", function () {
          if (XHR.status === 200) {
            if (XHR.readyState === 4) {
              let jsonFile = JSON.parse(this.responseText);
              document.getElementById("meInMainPage").innerHTML = jsonFile.paraInMainPage[0];
              document.getElementById("textInMainPage").innerHTML = jsonFile.paraInMainPage[1];
            }
          }
        });
        XHR.open("GET", "Scripts/paragraphs.json");
        XHR.send();
//=======================index header=========================================================================================
let XHR2 = new XMLHttpRequest();       
    let target2 = document.getElementsByTagName("header")[0];
    
    XHR2.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          target2.innerHTML = this.responseText;
          setActiveNavLink();
        }
      }
    });
    XHR2.open("GET", "Views/partials/header.html");
    XHR2.send();
//==========================index footer======================================================================================
let XHR3 = new XMLHttpRequest();       
    let target3 = document.getElementsByTagName("footer")[0];
    
    XHR3.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          target3.innerHTML = this.responseText;
          setActiveNavLink();
        }
      }
    });
    XHR3.open("GET", "Views/partials/footer.html");
    XHR3.send();
//======================================================================================================================
        break;
      case "Projects":
        console.log("I am inside the switch saatement for the projects page");
//=========================project text============================================================================
let XHR4 = new XMLHttpRequest();       
        XHR4.addEventListener("readystatechange", function () {
          if (XHR4.status === 200) {
            if (XHR4.readyState === 4) {
              let jsonFile = JSON.parse(this.responseText);
              document.getElementById("idOfProjectText").innerHTML = jsonFile.paraFromJson[0];
              document.getElementById("idOfProjectTextz").innerHTML = jsonFile.paraFromJson[1];
              document.getElementById("idOfProjectTextLast").innerHTML = jsonFile.paraFromJson[2];
            }
          }
        });
        XHR4.open("GET", "Scripts/paragraphs.json");
        XHR4.send();
//=======================project header=========================================================================================
let target5 = document.getElementsByTagName("header")[0];
let XHR5 = new XMLHttpRequest();
XHR5.addEventListener("readystatechange", function(){
  if(this.status === 200) {
    if(this.readyState === 4)  {
      target5.innerHTML = this.responseText;
      setActiveNavLink();
    }
  }
});
XHR5.open("GET", "Views/partials/header.html");
XHR5.send();
//==========================project footer======================================================================================
let target6 = document.getElementsByTagName("footer")[0];
let XHR6 = new XMLHttpRequest();
XHR6.addEventListener("readystatechange", function(){
  if(this.status === 200) {
    if(this.readyState === 4)  {
      target6.innerHTML = this.responseText;
      setActiveNavLink();
    }
  }
});
XHR6.open("GET", "Views/partials/footer.html");
XHR6.send();
        break;

      case "Contact":
      //=======================contact header=========================================================================================
    let target7 = document.getElementsByTagName("header")[0];
    let XHR7 = new XMLHttpRequest();
    XHR7.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          target7.innerHTML = this.responseText;
          setActiveNavLink();
        }
      }
    });
    XHR7.open("GET", "Views/partials/header.html");
    XHR7.send();
//==========================contact footer======================================================================================
    let target8 = document.getElementsByTagName("footer")[0];
    let XHR8 = new XMLHttpRequest();
    XHR8.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          target8.innerHTML = this.responseText;
          setActiveNavLink();
        }
      }
    });
    XHR8.open("GET", "Views/partials/footer.html");
    XHR8.send();

        var fname = document.getElementById("FirstName");
        var lname = document.getElementById("LastName");
        var email = document.getElementById("EmailAddress");
        var pnumber = document.getElementById("PhoneNumber");
        var message = document.getElementById("Message");

        function DisplayTextToConsole() {
          console.log("first name:" + fname.value);
          console.log("last nsme: " + lname.value);
          console.log("email: " + email.value);
          console.log("phone number: " + pnumber.value);
          console.log("message: " + message.value);
        }

        function DirectToHomepage() {
          location.href = "./index.html";
        }
        document
          .getElementById("submit")
          .addEventListener("click", DisplayTextToConsole);
        document
          .getElementById("cancel")
          .addEventListener("click", DirectToHomepage);
    }
  }

  window.addEventListener("load", Start);
  console.log("[#1] accessing Start funcation after page loades");
})();