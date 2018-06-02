/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"
    let title = document.title;
    switch (title) {
        case "About Me":
            let paragraphMe = document.getElementById("textInMainPage");
            let myTextAboutMe = "I am Dey. I don't want to write my full name here to make it harder for someone serching the web to link this page to me. Right now my mission is to make this webpage.";
            paragraphMe.textContent = myTextAboutMe;
            let titleMe = document.getElementById("meInMainPage");
            let titleMeText = "me";
            titleMe.textContent = titleMeText;
            break;

            case "Projects":
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


    }


})();