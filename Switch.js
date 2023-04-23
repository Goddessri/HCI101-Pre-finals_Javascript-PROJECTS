/*
Day of the Week
This project uses displays the day of the week along with a corresponding quote.

Key concepts covered :-
1.) DOM manipulation
2.) Date() Object
3.) switch statement
*/

//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Monday morning blues!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Taco Time!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Two more days to the weekend.';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to party!';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`
