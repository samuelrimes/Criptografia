function convertedc(texto){
	var char = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

	var cripchar = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];

	var cripto = [];

	for(i=0;i<texto.length;i++){
		for(k=0;k<char.length;k++){
			if(texto[i]==char[k]){
				cripto[i]=cripchar[k];
			}
		}
	}
	return cripto;
}