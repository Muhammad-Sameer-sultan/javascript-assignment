// Question /Answer ============> 01
 var number1 = parseFloat(prompt("Enter the first number:"));
 var number2 = parseFloat(prompt("Enter the second number:"));

 var sum = number1 + number2;
 alert("sum of "+number1 +"and "+number2+" is "+sum);

 // Question /Answer ============> 02
 var sub = number1 - number2;
 var mul = number1 * number2;
 var div = number1 / number2;
alert("sum of "+number1 +"and "+number2+" is "+sum);
alert("sum of "+number1 +"and "+number2+" is "+sub);
alert("sum of "+number1 +"and "+number2+" is "+mul);
alert("sum of "+number1 +"and "+number2+" is "+div);

// Question /Answer ============> 03
 // a. Declare a variable.
 var myVariable;

 // b. Show the value of the variable after declaration.
 document.write("<p>Value after variable declaration is: " + myVariable + "</p>");

 // c. Initialize the variable with some number.
 myVariable = 3;

 // d. Show the initial value of the variable.
 document.write("<p>Initial value: " + myVariable + "</p>");

 // e. Increment the variable.
 myVariable++;

 // f. Show the value of the variable after increment.
 document.write("<p>Value after increment is: " + myVariable + "</p>");

 // g. Add 7 to the variable.
 myVariable += 7;

 // h. Show the value of the variable after addition.
 document.write("<p>Value after addition is: " + myVariable + "</p>");

 // i. Decrement the variable.
 myVariable--;

 // j. Show the value of the variable after decrement.
 document.write("<p>Value after decrement is: " + myVariable + "</p>");

 // k. Show the remainder after dividing the variable’s value by 3.
 var remainder = myVariable % 3;
 document.write("<p>The remainder is: " + remainder + "</p>");


 // Question /Answer ============> 04
 var ticketPrice = 600;

 // Calculate the cost of buying 5 tickets
 var numberOfTickets = 5;
 var totalCost = ticketPrice * numberOfTickets;

 // Display the result
 document.write("<h2>Movie Ticket Cost</h2>");
 document.write("<p>Cost of one movie ticket: " + ticketPrice + " PKR</p>");
 document.write("<p>Number of tickets: " + numberOfTickets + "</p>");
 document.write("<p>Total cost for 5 tickets: " + totalCost + " PKR</p>");
 
 
 
 // Question /Answer ============> 05
var number=4;
 // Display the multiplication table in the browser
 document.write("<h2>Multiplication Table for " + number + "</h2>");

 for (var i = 1; i <= 10; i++) {
   var result = number * i;
   document.write("<p>" + number + " x " + i + " = " + result + "</p>");
 }

  // Question /Answer ============> 06
  var celsiusTemperature = parseFloat(prompt("Enter the temperature in Celsius:"));

  // b. Convert it to Fahrenheit.
  var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

  document.write("<h2>Temperature Converter</h2>");
  document.write("<p>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</p>");

  // c. Now store a Fahrenheit temperature into a variable.
  var fahrenheitTemperatureInput = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

  // d. Convert it to Celsius.
  var celsiusTemperatureInput = (fahrenheitTemperatureInput - 32) * 5/9;

  document.write("<p>" + fahrenheitTemperatureInput + "°F is " + celsiusTemperatureInput + "°C</p>");



 // Question /Answer ============> 07
 var priceItem1 = parseFloat(prompt("Enter the price of item 1:"));
 var quantityItem1 = parseInt(prompt("Enter the ordered quantity of item 1:"));

 var priceItem2 = parseFloat(prompt("Enter the price of item 2:"));
 var quantityItem2 = parseInt(prompt("Enter the ordered quantity of item 2:"));

 var shippingCharges = parseFloat(prompt("Enter the shipping charges:"));

 // Calculate the total cost
 var totalCostItem1 = priceItem1 * quantityItem1;
 var totalCostItem2 = priceItem2 * quantityItem2;
 var subtotal = totalCostItem1 + totalCostItem2;
 var totalCost = subtotal + shippingCharges;

 // Display the checkout details
 document.write("<h2>Checkout Process</h2>");
 document.write("<p>Price of item 1: $" + priceItem1.toFixed(2) + "</p>");
 document.write("<p>Ordered quantity of item 1: " + quantityItem1 + "</p>");
 document.write("<p>Price of item 2: $" + priceItem2.toFixed(2) + "</p>");
 document.write("<p>Ordered quantity of item 2: " + quantityItem2 + "</p>");
 document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
 document.write("<p>Shipping charges: $" + shippingCharges.toFixed(2) + "</p>");
 document.write("<p><strong>Total cost: $" + totalCost.toFixed(2) + "</strong></p>");


 
