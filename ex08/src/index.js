const users = [
    {firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
]

function getUsers() {
    var output = "";
    var i=0;
    while( i !== users.length) {
        output += findUsers(users[i].firstName, users[i].gender);
        output += "\n";
        i++;
    }
    console.log(output);
    return output;
}

function findUsers(firstName, gender) {
    try {
        var user = () => {
            for(var i=0; i<users.length; i++) {
                if(users[i].firstName === firstName && users[i].gender === gender)
                    return users[i];
            }
        }

        let iFindUser = user().firstName + " " + user().lastName + " is " + user().age + ", " + user().gender;

        //console.log(iFindUser)
        return iFindUser;
    }catch (e) {
        return "Cannot read property " + firstName + " of undefined";
    }
}

getUsers();
//findUsers("Jim", "male");

module.exports = findUsers;