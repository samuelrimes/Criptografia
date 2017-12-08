 function substituicao (texto){
 		for (i=0;i<texto.length;i++) {

		if(texto[i]=="0"){
			texto[i]="2a ";
		}	

		else if(texto[i]=="1"){
			texto[i]="3f ";
		}

		else if(texto[i]=="2"){
			texto[i]="d6 ";
		}

		else if(texto[i]=="3"){
			texto[i]="d1 ";
		}

		else if(texto[i]=="4"){
			texto[i]="f7 ";
		}

		else if(texto[i]=="5"){
			texto[i]="c9 ";
		}

		else if(texto[i]=="6"){
			texto[i]="3b ";
		}

		else if(texto[i]=="7"){
			texto[i]="ff ";
		}

		else if(texto[i]=="8"){
			texto[i]="54 ";
		}

		else if(texto[i]=="9"){
			texto[i]="ae ";
		}

		else if(texto[i]=="a" || texto[i]=="A"){
			texto[i]="77 ";
		}

		else if(texto[i]=="b" || texto[i]=="B"){
			texto[i]="0a ";
		}

		else if(texto[i]=="c" || texto[i]=="C"){
			texto[i]="95 ";
		}

		else if(texto[i]=="d" || texto[i]=="D"){
			texto[i]="7d ";
		}

		else if(texto[i]=="e" || texto[i]=="E"){
			texto[i]="6a ";
		}

		else if(texto[i]=="f" || texto[i]=="F"){
			texto[i]="66 ";
		}
		
	}

	return texto;
 }