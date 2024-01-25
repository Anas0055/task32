// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current usernames
var currentUsers = ["John", "Alice", "Bob", "Eva", "admin"];
// List of new usernames
var newUsers = ["Alice", "Dave", "Bob", "Frank", "Mia"];
// Loop through new_users to check for uniqueness
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    // Convert both usernames to lowercase for case-insensitive comparison
    var lowercaseNewUser = newUser.toLowerCase();
    // Check if the lowercase new username is in the lowercase current usernames
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(lowercaseNewUser)) {
        console.log("The username '".concat(newUser, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
