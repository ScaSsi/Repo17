const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(days) {
    var week = ['SAT', 'SUN'];
    days.push(...week);
    return days;
}

console.log(myWeek(workDays));
module.exports = myWeek;