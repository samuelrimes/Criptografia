function prepara(){

	var texto = $("#texto1").val();
	texto = texto.split("");

	//confirmando se funcionou.
	//console.log(texto);

	//pegando a chave.
	var chave = $("#chave").val();
	var chave = chave.split("");
	//confirmando se funcionou.
	//console.log(chave);

	var chave = convertehx(chave);

	chave = chave.join("");
	chave = chave.split("");

	console.log(chave);

	//convertendo para hexadecimal.
	texto = convertehx(texto);
	//separando os caracteres em cada posição do array.
	texto = texto.join("");
	texto = texto.split("");

	console.log(texto);

	//cifra de césar.
	texto = cesar(texto);
	chave = cesar(chave);

	texto = vigenere(texto,chave);
	texto = texto.join("");
	texto = texto.split("");

	
	texto = transposicao(texto,chave);

	$("#cifrado").append($("<p/>").text(texto));

	//console.log(texto);
}