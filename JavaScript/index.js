
// write an any text and show in console
console.log("Hi This Tufail and Want to Learn JavaScript")

// show the data type of string
var userName = "tufail";
console.log(typeof userName);

// show the data type of age
var age =20;
console.log(typeof age);

//concatinate two words
var firsName = "Tufail";
var secondName = "khan";
var fullName = firsName+ " "+secondName;
console.log(fullName);

//show of lenght of string and index of string
console.log(firsName.length);
console.log(firsName[4]);

//replace a string over another string
var text = "www.tufail.com";
console.log(text.replace("www.tufail.com", "www.tufailrose.com"));

//some basic maths operation
var num1 =10;
var num2 =20;
var result = num1 + num2;
console.log(result);

var result2 = num1 - num2;
console.log(result2);

var result3 = num1 * num2;
console.log(result3);

var result4 = num1/num2;
console.log(result4);

//The math objects

var power = Math.pow(10,20);
console.log(power);

var roundNumber = Math.round(5.8);
console.log(roundNumber);

var roundNumber2 = Math.ceil(2.4);
console.log(roundNumber2);

var roundNumber3 = Math.floor(2.4);
console.log(roundNumber3);

var roundNumber4 = Math.sqrt(4);
console.log(roundNumber4);

var text = "this is ex1.js";
console.log(text);



//for age caculation
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", function(){
  var inputValue = $("#txtInput").val();
  var age = parseInt(moment().diff(inputValue,'years',true));
  
  $("#spantext").html(age + ' years.');
})


//set this in div which id is student-message
// Variables to store first name, last name, and year of birth
var firstName = "tufail";
var lastName = "khan";
var yearOfBirth = 1995; // Example year of birth

// Update text inside the blue box (div)
var blueBox = $("#student-message");

// Construct the text using variables
var text = "Hi, my name is " + firstName + " " + lastName + " " + ", I'm " + (new Date().getFullYear() - yearOfBirth) + " " + " years old and I'm learning JavaScript.";

// Set the text inside the blue box (div)
blueBox.html(text);

//average formula
var num1 = 101;
var num2 = 7;
var result = num1+num2/2;
var std =$("#student-data");
var ave = "the average is"+ " " + (result);
std.html(ave);

//divide two numbers and result with two decimal places
var num1 = 101;
var num2 = 7;
var twodecimal = +((num1 / num2).toFixed(2));
var text1 =$("#two-decimal");
var deci = "the average is"+ " " + (twodecimal);
text1.html(deci);

//test phon number valid or not
function validate()
{
  var text = document.getElementById("pno").value;
  var regx = new RegExp("^\\d{9}$");
  if(regx.test(text))
    alert("valid");
  else
    alert("invalid");
}




