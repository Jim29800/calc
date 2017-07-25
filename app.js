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
// Methode 2 via tableau
var tableau = [];
var tableauFiltre = [];
var result2 = $("#result2");
var monNombre="";
var resultat = 0;

$("button").click(function(){
	tableau.push ($(this).text());
	console.log(tableau);
	console.log(tableauFiltre);
	console.log(monNombre);
for (var i = 0; i < tableau.length; i++) {

	
	if (tableau[i] === "+" || tableau[i] === "-" ||tableau[i] === "/" ||tableau[i] === "*" ||tableau[i] === "="){
		tableauFiltre.push(monNombre)
		monNombre=""
		tableauFiltre.push(tableau[i])
	}
	else {
		monNombre = monNombre + tableau[i]
	}

}











	if ($(this).text() === "=") {
		
		if (tableau[1] === "*") {
			resultat = multi(tableauFiltre[0],tableauFiltre[2])
		}
		else if (tableau[1] === "/") {
			resultat = div(tableauFiltre[0],tableauFiltre[2])
		}
		else if (tableau[1] === "+") {
			resultat = add(tableauFiltre[0],tableauFiltre[2])
		}
		else if (tableau[1] === "-") {
			resultat = sub(tableauFiltre[0],tableauFiltre[2])
		}
		result2.text(resultat)
		console.log(resultat)

	}

	
});
