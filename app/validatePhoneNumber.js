// JavaScript Document

/* The idea here was that in a web environment I would just want to call one function
to do all of the validating. So in this function, if at any point the input does 
not pass, it fails the whole test. 

What are the rules?

numeric
10 digits

Test Plan 

Input 				    Expected Output
    				    false
"515-555-0000"	    	false
515555000.0			    false
5155550000		    	true
5155550000 (10 numbers)	true 
51555500000			    false

*/

var validatePhoneNumber = function(inValue){

    //must have input
    if(inValue == undefined){
        return false;
    }
    
    //must be numeric
    if(isNaN(inValue)){
        return false;
    }

    //must be an integer. Tested this with a decimal and Number here definitely means integer.
    if(inValue instanceof Number){
        return false;
    }

    //must be 10 digits
    if(inValue.toString().length != 10){
        return false;
    }

    return true;


}

module.exports = validatePhoneNumber;