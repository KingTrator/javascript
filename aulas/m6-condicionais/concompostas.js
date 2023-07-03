// Learning switch
var now = new Date();
var weekDay = now.getDay();
console.log(weekDay);

switch (weekDay) {
    case 0:
        console.log('Sunday');
        break; // Avoids further execution of the switch statement
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
        break;
}
