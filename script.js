var database=[
	{
		username:"andrei",
		password:"888"
	},
	{
		username:"sally",
		password:"1234"
	}
];
var newsFeed=[
	{
		username:"Bobby",
		tiemline: "So tired from all that learning"
	},
	{
		username:"Sally",
		timeline:"Javascript is soooo cool!"
	},
	{
		username:"Mitch",
		timeline:"JavaScript is verygood"
	}
];
var usernamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password?");

function usUserValid(username,password){
	for (var i=0; i<database.length; i++){
		if(database[i].username ===username &&
			database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username,password){
	for (var i=0; i<database.length; i++){
		if(usUserValid(username,password)){
			console.log(newsFeed);
		}else{
			alert("Sorry wrong username or password")
		}
	}
	// if (user===database[0].username &&
	// 	pass===database[0].password){
	// 	console.log(newsFeed);
	// }else{
	// 	alert("Sorry, wrong username and password!")
	// }
}
signIn(usernamePrompt,passwordPrompt)