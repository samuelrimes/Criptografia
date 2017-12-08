function vigenere(texto,chave){

	var i = (texto.length) - (chave.length);

	for(j=0;j<i;j++){
		chave.push(chave[j]);
	}

	texto = convertedc(texto);

	console.log(texto);

	chave = convertedc(chave);

	console.log(chave);

	for(k=0;k<texto.length;k++){
		var m = texto[k]*chave[k];
		m = calchx(m);
		texto[k]=m;
	}

	return texto;
}