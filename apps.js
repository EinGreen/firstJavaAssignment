var userAge = "18";
var is_subscription = "1";

if (userAge >= 18) {
    console.log("User is an Adult");
} else if (userAge <= 10) {
    alert("you are not allowed on this site");
} else {
    console.log("User is a teenager");
}

if (is_subscription == true) {
    console.log("user is subscribed");
} else {
    console.log("user is not subscribed");
}

if (userAge>= 18 && is_subscription == true) {
    console.log("user is an Adult and Subscribed")
} else if (userAge>= 18 && is_subscription == false) {
    console.log("user is an Adult but not Subscribed")
} else if (userAge<= 18 && is_subscription == ture) {
    console.log("user is not an Adult but is Subscribed")
} else {
    console.log("user is not an Adult and not Subscribed")
}

