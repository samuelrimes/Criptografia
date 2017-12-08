function cesar(texto){

	var c = new Array;

	//cifra de césar.
	for(i=0;i<texto.length;i++){
		if (texto[i]=="0") {
			c.push(i);
		}
		if (texto[i]=="d") {
			texto[i]="0";
		}
		if (texto[i]=="a") {
			texto[i]="D";
		}
		if (texto[i]=="A") {
			texto[i]="D";
		}
		if (texto[i]=="7") {
			texto[i]="A";
		}
		if (texto[i]=="4") {
			texto[i]="7";
		}
		if (texto[i]=="1") {
			texto[i]="4";
		}
		if (texto[i]=="e") {
			texto[i]="1";
		}
		if (texto[i]=="E") {
			texto[i]="1";
		}
		if (texto[i]=="b") {
			texto[i]="E";
		}
		if (texto[i]=="B") {
			texto[i]="E";
		}
		if (texto[i]=="8") {
			texto[i]="B";
		}
		if (texto[i]=="5") {
			texto[i]="8";
		}
		if (texto[i]=="2") {
			texto[i]="5";
		}
		if (texto[i]=="f") {
			texto[i]="2";
		}
		if (texto[i]=="F") {
			texto[i]="2";
		}
		if (texto[i]=="c") {
			texto[i]="F";
		}
		if (texto[i]=="C") {
			texto[i]="F";
		}
		if (texto[i]=="9") {
			texto[i]="C";
		}
		if (texto[i]=="6") {
			texto[i]="9";
		}
		if(texto[i]=="3"){
			texto[i]="6";
		}
	}
	for(k=0;k<c.length;k++){
		for(j=0;j<texto.length;j++){
			if(c[k]==j){
				texto[j]="3";
			}
		}
	}
	console.log(texto);

	return texto;
}