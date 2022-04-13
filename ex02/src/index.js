const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(days) {
    var week = ['SAT', 'SUN'];
    days.push(...week);
    week = days;
    return week;
}

console.log(myWeek(workDays));
module.exports = myWeek;