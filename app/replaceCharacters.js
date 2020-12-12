/*

A form input field will accept a value...

This requires no validation because I'm assuming this is just to check for script inserts or something
before I would want to continue to use the string afterwards.

What are the rules?

Value passed in can be literally anything.

Test Plan 

Input 				Expected Output
Andy				Andy
Andy'   			Andy-
Andy/'/				Andy---
Andy/'/<		    Andy----
Andy/'/<>			Andy----- 
Andy/////			Andy-----


*/

var replaceCharacters = function(inValue){

    //No input validation is needed, if the inValue doesn't have the characters, then
    //it just gets returned. So even if someone passes in a number, the number just gets returned.
    //I did it this way because in a web setting I would be checking for these first, but then I would
    //still want to do other things with the value so I would want the value to be returned by this function
    //whatever it is

    //Seperate while loops to check for individual occurances of the characters

    while(inValue.search("'") != -1){
        inValue = inValue.replace("'", "-")
    }

    while(inValue.search("/") != -1){
        inValue = inValue.replace("/", "-")
    }

    while(inValue.search("<") != -1){
        inValue = inValue.replace("<", "-")
    }

    while(inValue.search(">") != -1){
        inValue = inValue.replace(">", "-")
    }

    return inValue;

}

module.exports = replaceCharacters;