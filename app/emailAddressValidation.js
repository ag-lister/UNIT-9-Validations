/*

A form input field will accept an email address...

Validate the email address before accepting it into the data object.

What are the rules?

string
has basic email format

Test Plan 

Input 				Expected Output
undefined               invalid
""  			    	invalid
ag.lister       		invalid
@outlook.com		    invalid
@.com			    	invalid
outlook.com	    		invalid 
.com    			    invalid
ag.listeroutlook.com    invalid
ag.lister@outlook.com   valid 


*/


function validateEmail(inEmail)	{
	//Made using the zip we made together in class as a base.
	
	if ( (inEmail + "").trim === "") {
		return false;
	}
    
    //Pulled this from the internet. Since we did that in class for the zip I figured that was ok.
	let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	return emailPattern.test(inEmail + "");
	

}

module.exports = validateEmail;