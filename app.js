// Fonction de calcule
function add(a,b){
	return parseInt(a) + parseInt(b)
};
function div(a,b){
	return parseInt(a) / parseInt(b)
};
function multi(a,b){
	return parseInt(a) * parseInt(b)
};
function sub(a,b){
	return parseInt(a) - parseInt(b)
};

// METHODE 1
$("#buttonForm").click(function() {
	var resultat = 0;
	var c1 = $("#input1").val();
	var c2 = $("#input2").val();
	var signe = $("#selectOperation").val();
	var result = $("#result");
	if (signe === "*") {
		resultat = multi(c1,c2)
	}
	else if (signe === "/") {
		resultat = div(c1,c2)
	}
	else if (signe === "+") {
		resultat = add(c1,c2)
	}
	else if (signe === "-") {
		resultat = sub(c1,c2)
	}

	result.text(resultat)
});
// METHODE 2
// var chiffre1 = "";
// var chiffre2 = "";
// var ope = "";
// var result2 = $("#result2");

// // chiffre 
// $("#btn-1").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 1;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 1;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}

// });
// $("#btn-2").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 2;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 2;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-3").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 3;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 3;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-4").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 4;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 4;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-5").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 5;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 5;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-6").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 6;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 6;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-7").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 7;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 7;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-8").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 8;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 8;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-9").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 9;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 9;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });
// $("#btn-0").click(function() {
// 	if (ope === ""){
// 		chiffre1 += 0;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// 	else{
// 		chiffre2 += 0;
// 		return result2.text(chiffre1 + ope + chiffre2)
// 	}
// });

// // Operateur

// $("#btn-plus").click(function() {
// 	ope ="+";
// 	return result2.text(chiffre1 + ope + chiffre2)
// });

// $("#btn-minus").click(function() {
// 	ope ="-";
// 	return result2.text(chiffre1 + ope + chiffre2)
// });
// $("#btn-times").click(function() {
// 	ope ="*";
// 	return result2.text(chiffre1 + ope + chiffre2)
// });
// $("#btn-divide").click(function() {
// 	ope ="/";
// 	return result2.text(chiffre1 + ope + chiffre2)
// });

// // Calcul

// $("#btn-calculer").click(function() {
// 	var resultat = 0;
// 	console.log(chiffre1);
// 	console.log(ope);
// 	console.log(chiffre2);
// 	if (ope === "*") {
// 		resultat = multi(chiffre1,chiffre2)
// 	}
// 	else if (ope === "/") {
// 		resultat = div(chiffre1,chiffre2)
// 	}
// 	else if (ope === "+") {
// 		resultat = add(chiffre1,chiffre2)
// 	}
// 	else if (ope === "-") {
// 		resultat = sub(chiffre1,chiffre2)
// 	};

// 	result2.text(chiffre1 + ope + chiffre2 + "=" + resultat);
// 	chiffre1 = "";
// 	chiffre2 = "";
// 	ope = "";
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var tableau = [];
var result2 = $("#result2");

// chiffre 
$("#btn-1").click(function() {
	tableau.push(1)

});
$("#btn-2").click(function() {
	tableau.push(2)
});
$("#btn-3").click(function() {
	tableau.push(3)
});
$("#btn-4").click(function() {
	tableau.push(4)
});
$("#btn-5").click(function() {
	tableau.push(5)
});
$("#btn-6").click(function() {
	tableau.push(6)
});
$("#btn-7").click(function() {
	tableau.push(7)
});
$("#btn-8").click(function() {
	tableau.push(8)
});
$("#btn-9").click(function() {
	tableau.push(9)
});
$("#btn-0").click(function() {
	tableau.push(0)
});

// Operateur

$("#btn-plus").click(function() {
	tableau.push("+")
});

$("#btn-minus").click(function() {
	tableau.push("-")
});
$("#btn-times").click(function() {
	tableau.push("*")
});
$("#btn-divide").click(function() {
	tableau.push("/")
});