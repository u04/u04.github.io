/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
"use strict";
(function() {
  function Start() {
    console.log("[#2] I am inside start funcation");

    let httpRequest = new XMLHttpRequest();
    httpRequest.open("get", ".5/paragraphs.json");
    httpRequest.send(null);

    httpRequest.addEventListener("readystatechange", Start(){
      if(httpRequest.status === 200){
        if(httpRequest.readyState === 4){
          console.log("[#3.1.1] I am inside the if statemant located at start/jsonFileReadByAjax/iAmReady funcition");
          let jsonFile = JSON.parse(httpRequest.responseText);
          document.getElementById("idOfProjectTextz").innerHTML = jsonFile.paraFromJson[1];
          document.getElementById("idOfProjectTextk").innerHTML = jsonFile.paraFromJson[2];
        }
      }
    }
  
  )
/*
    function jsonFileReadByAjax() {
      console.log("[#3] I am inside jsonFileReadByAjax function");
      //let httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = iAmReady;
      function iAmReady() {
        console.log("[#3.1] I am inside iAmReady function which is inside the jsonFileReadByAjax function");
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log("[#3.1.1] I am inside the if statemant located at start/jsonFileReadByAjax/iAmReady funcition");
          let jsonFile = JSON.parse(httpRequest.responseText);
          document.getElementById("idOfProjectTextz").innerHTML = jsonFile.paraFromJson[1];
          document.getElementById("idOfProjectTextk").innerHTML = jsonFile.paraFromJson[2];
        }
        //httpRequest.open("get", ".5/paragraphs.json");
        //httpRequest.send(null);
      }
    }
    */

    let title = document.title;
    switch (title) {
      case "About Me":
        let paragraphMe = document.getElementById("textInMainPage");
        let myTextAboutMe =
          "I am Dey. I don't want to write my full name here to make it harder for someone serching the web to link this page to me. Right now my mission is to make this webpage.";
        paragraphMe.textContent = myTextAboutMe;
        let titleMe = document.getElementById("meInMainPage");
        let titleMeText = "me";
        titleMe.textContent = titleMeText;
        break;
      case "Projects":
      console.log("I am inside the switch saatement for the projects page");
        jsonFileReadByAjax();
      /*
        console.log("in project of switch");
        let proj = document.getElementById("idOfProjectText");
        proj.textContent = usingJson();

        /*
            let proj = document.getElementById("idOfProjectText");
            let projText = "having a github account";
            proj.textContent = projText;
            let projz = document.getElementById("idOfProjectTextz");
            let textz = "Hooking onto HTMLElements";
            projz.textContent = textz;
            let projzk = document.getElementById("idOfProjectTextk");
            let textzf = "Hooking onto HTMLElements";
            projzk.textContent = textzf;
            break;
*/
      case "Contact":
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
