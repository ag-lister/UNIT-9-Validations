// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validatePhoneNumber = require('../app/validatePhoneNumber');
var validateZipCode = require('../app/zipCodeValidation');
var validateEmail = require('../app/emailAddressValidation');
var replaceCharacters = require('../app/replaceCharacters')

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	
	it("Input is required", function(){
		assert.isFalse(validatePhoneNumber());
	});
	it("Input must be numeric (phone# with dashes)", function(){
		assert.isFalse(validatePhoneNumber("515-555-0000"))
	});
	it("Input must be integers (with decimal)", function(){
		assert.isFalse(validatePhoneNumber(515555000.0))
	});
	it("Input must be integers", function(){
		assert.isTrue(validatePhoneNumber(5155550000))
	});
	it("Input must be 10 numbers (10 numbers)", function(){
		assert.isTrue(validatePhoneNumber(5155550000))
	});
	it("Input must be 10 numbers (11 numbers)", function(){
		assert.isFalse(validatePhoneNumber(51555500000))
	});
	
});

describe("Unit 9 Validation tests", function(){
	
	it("5-5555 should fail", function(){
		assert.isFalse(validateZipCode("5-5555"));		
	});
	
	it("Aa-aaaaa... should fail", function(){
		assert.isFalse(validateZipCode("Aa-aaaaa...	"));		
	});

	it("0000 should fail", function(){
		assert.isFalse(validateZipCode("0000"));		
	});

	it("00000 should fail", function(){
		assert.isFalse(validateZipCode("00000"));		
	});

	it("00000-0000 should fail", function(){
		assert.isFalse(validateZipCode("00000-0000"));		
	});

	it("-,.+!@ =/ should fail", function(){
		assert.isFalse(validateZipCode("-,.+!@ =/"));		
	});

	it("null should fail", function(){
		assert.isFalse(validateZipCode(null));		
	});

	it("undefined should fail", function(){
		assert.isFalse(validateZipCode());		
	});

	it("12345 should work", function(){
		assert.isTrue(validateZipCode("12345"));		
	});

	it("12345-6789 should work", function(){
		assert.isTrue(validateZipCode("12345-6789"));		
	});

	it("06001 should work", function(){
		assert.isTrue(validateZipCode("06001"));		
	});




	it("undefined should fail", function(){
		assert.isFalse(validateEmail());		
	});

	it("empty quotes should fail", function(){
		assert.isFalse(validateEmail(""));		
	});
	
	it("ag.lister should fail", function(){
		assert.isFalse(validateEmail("ag.lister"));		
	});

	it("@outlook.com should fail", function(){
		assert.isFalse(validateEmail("@outlook.com"));		
	});
	
	it("@.com should fail", function(){
		assert.isFalse(validateEmail("@.com"));		
	});
	
	it("outlook.com should fail", function(){
		assert.isFalse(validateEmail("outlook.com"));		
	});
	
	it(".com should fail", function(){
		assert.isFalse(validateEmail(".com"));		
	});
	
	it("ag.listeroutlook.com should fail", function(){
		assert.isFalse(validateEmail("ag.listeroutlook.com"));		
	});

	it("ag.lister@outlook.com should pass", function(){
		assert.isTrue(validateEmail("ag.lister@outlook.com"));		
	});

	it("aglister@outlook.com should pass", function(){
		assert.isTrue(validateEmail("aglister@outlook.com"));		
	});

	it("Andy should not be changed", function(){
		assert.equal(replaceCharacters("Andy"), "Andy");		
	});

	it("Andy' should be changed", function(){
		assert.equal(replaceCharacters("Andy'"), "Andy-");		
	});

	it("Andy/'/ should be changed", function(){
		assert.equal(replaceCharacters("Andy/'/"), "Andy---");		
	});

	it("Andy/'/< should be changed", function(){
		assert.equal(replaceCharacters("Andy/'/<"), "Andy----");		
	});

	it("Andy/'/<> should be changed", function(){
		assert.equal(replaceCharacters("Andy/'/<>"), "Andy-----");		
	});

	it("Andy///// should be changed", function(){
		assert.equal(replaceCharacters("Andy/////"), "Andy-----");		
	});

	it("100000000 should not be changed", function(){
		assert.equal(replaceCharacters("100000000"), "100000000");		
	});

});	