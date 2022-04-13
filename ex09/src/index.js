const users = [
    {id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
]

function getUsers() {
    var output = "";
    var i=0;
    while( i !== users.length) {
        output += findUserById(users[i].id);
        output += "\n";
        i++;
    }
    console.log(output);
    return output;
}

function findUserById(id) {
    try {
        var user = () => {
            for(var i=0; i<users.length; i++) {
                if(users[i].id === id)
                    return users[i];
            }
        }

        let iFindUser = user().id + " - " + user().firstName + " " + user().lastName + " is " + user().age + ", " + user().gender;

        //console.log(iFindUser)
        return iFindUser;
    }catch (e) {
        return "Cannot read property " + id;
    }
}

getUsers();
//findUserById("Jim", "male");

module.exports = findUserById;