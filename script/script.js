// write main codes
// select element
let button = document.querySelector("#counter-btn");
let text = document.querySelector("#nav-text");
let count = document.querySelector("#count");

// words array -->
let singleDot = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
let doubleDot = ["ت", "ق"];
let tripleDot = ["پ", "ث", "ش"];
let SuspiciosLetter = "ی";

// button click event
button.addEventListener("click", ()=> {

    let dotVal = 0;
    let TextArray = text.value.split("");

    for (i in TextArray) {

        for (s in singleDot) {

            if(singleDot[s] == TextArray[i]) {

                dotVal+=1;

                continue;

            }

        }

        for (d in doubleDot) {

            if(doubleDot[s] == TextArray[i]) {

                dotVal+=2;

                continue;

            }

        }

        for (t in tripleDot) {

            if(tripleDot[t] == TextArray[i]) {

                dotVal+=3;

                continue;
                
            }

        }

        if (TextArray[i] == SuspiciosLetter) {

            let NextElementID = Number(i) + 1;

            if(TextArray[String(NextElementID)] != "" && TextArray[String(NextElementID)] != undefined && TextArray[String(NextElementID)] != " ") {

                dotVal += 2;


            }

        }

    }

    count.innerHTML = dotVal;

});