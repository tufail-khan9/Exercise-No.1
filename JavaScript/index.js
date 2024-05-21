
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
var rep = "www.tufail.com";
document.getElementById("trans").innerHTML = rep.replace("www.tufail.com", "http//:www.tufail.com")


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
// var banner = $("#banner-message")
// var button = $("button")

// // handle click and add class
// button.on("click", function(){
//   var inputValue = $("#txtInput").val();
//   var age = parseInt(moment().diff(inputValue,'years',true));
  
//   $("#spantext").html(age + ' years.');
// })

function calculateAge() {
  var birthdateInput = document.getElementById("birthdate").value;
  var birthdate = new Date(birthdateInput);
  var currentYear = new Date().getFullYear();
  var birthYear = birthdate.getFullYear();
  var age = currentYear - birthYear;
  document.getElementById("ageDisplay").innerHTML = "You are " + age + " years old.";
}


// student data that has aVariables to store first name, last name, and year of birth
var firstName = "tufail";
var lastName = "khan";
var yearOfBirth = 1995; // Example year of birth

// Update text inside the blue box (div)
var blueBox = $("#student-message");

// Construct the text using variables
var text = "Hi, my name is " + firstName + " " + lastName + " " + ", I'm " + (new Date().getFullYear() - yearOfBirth) + " " + " years old and I'm learning JavaScript.";

// Set the text inside the blue box (div)
blueBox.html(text);
// End div of student data

//average formula
var num1 = 101;
var num2 = 7;
var result = num1+num2/2;
document.getElementById("student-data").innerHTML =  "the average is"+ " " + (result);




//divide two numbers and result with two decimal places
var num1 = 101;
var num2 = 7;
var twodecimal = +((num1 / num2).toFixed(2));
document.getElementById("two-decimal").innerHTML = "the average is"+ " " + (twodecimal);



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

//power operations here
   var text = "the 32 power 6 is =";
   var power = Math.pow(32,6);
   console.log(text,power);

   //check different errors on console
    var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;
    console.log(quantity += quantity); 
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
    console.log(typeof temperature);


    //transformation to the url
    var currentUrl  = "www.udemy.com";
    var currentUrl2 = "http://www.udemy.com";
    document.getElementById("replace-url").innerHTML = "the &nbsp; www.udemy.com &nbsp; is replace to " + '&nbsp;' + '&nbsp;' + currentUrl.replace("www.udemy.com", "http//:www.udemy.com")
    + "<br>" + "<br>" + "the &nbsp; https://www.udemy.com &nbsp; is replace to "+ '&nbsp;' + '&nbsp;'+ currentUrl2.replace("http://www.udemy.com", "www.udemy.com");





