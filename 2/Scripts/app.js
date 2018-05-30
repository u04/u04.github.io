/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    // About Button Click event handler

    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }


    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }

    function AboutContent() {
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "";

        paragraph.textContent = mySentence;

        let myArray = [
            {name: "Tom", age: 25},
            {name: "Bob", age: 35},
            {name: "Mike", age: 45},
            {name: "Juan", age: 55},
            {name: "Smyth", age: 65}
        ];

        myArray.push( {name: "Carol", age: 15});
        myArray.unshift( {name: "Peter", age: 25});


        let content = document.getElementsByClassName("content");
        console.log("myArray length: " + myArray.length);

        //loop type # 6 - while (classic)
        let index = 0;
        while (index < myArray.length) {
            console.log(myArray[index].name);
            index++;
        }
        

        let arrayEmpty;

        // ternary operator - alternate toggle conditional statement
        arrayEmpty = (myArray.length > 0 ) ?  false : true;

        // === checks both value and type where == only checks value
        if(myArray[0].age === 25) {
            
            console.log("First Element is Peter");
        }


        // associative arrays create this key / value pair association but there is no iterator
        // which means you can't loop through them
        let myAssociateArray = [];

        myAssociateArray["Name"] = "Tom";
        myAssociateArray["Age"] = 30;
        myAssociateArray["StudentNum"] = "P008490";

        console.log(myAssociateArray);
        console.log(myAssociateArray["Name"]);


        let myFavouriteThingsList =[
            "tv",
            "computer",
            "resting"
        ];

        // "hook into" a ul that is empty that has an id of "myFavouriteThings"
        var myFavouriteList = document.getElementById("myFavouriteThings");
        //myFavouritesList = myFavouriteThingsList;

        var counter1=0;
        do{
            console.log(myFavouriteThingsList[counter1]);
            let newItem = document.createElement("li");
            newItem.textContent = myFavouriteThingsList[counter1];
            myFavouriteList.appendChild(newItem);
            counter1++;
        }while(counter1<myFavouriteThingsList.length);
       
        /*
        myFavouriteThingsList.forEach(thing => { let newItem = document.createElement("li");
            newItem.textContent = thing;
            myFavouritesList.appendChild(newItem);
        });
        */
        
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);

    
    return {
        title: document.title

    };
    
})();