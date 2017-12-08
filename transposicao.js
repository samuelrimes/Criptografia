function transposicao(texto,chave){

	var chave1  = "";

	chave = convertestr(chave);

	for ( i = 1; i<chave.length;i++) {
		if(chave1.includes(chave[i])==false){
			chave1 = chave1 + chave[i];
		}
	}

	console.log(chave);


}