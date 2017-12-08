function rot8(texto){
	for (i=0;i<texto.length;i++) {

		if(texto[i]=="0"){
			texto[i]="8";
		}	

		else if(texto[i]=="1"){
			texto[i]="9";
		}

		else if(texto[i]=="2"){
			texto[i]="a";
		}

		else if(texto[i]=="3"){
			texto[i]="b";
		}

		else if(texto[i]=="4"){
			texto[i]="c";
		}

		else if(texto[i]=="5"){
			texto[i]="d";
		}

		else if(texto[i]=="6"){
			texto[i]="e";
		}

		else if(texto[i]=="7"){
			texto[i]="f";
		}

		else if(texto[i]=="8"){
			texto[i]="0";
		}

		else if(texto[i]=="9"){
			texto[i]="1";
		}

		else if(texto[i]=="a" || texto[i]=="A"){
			texto[i]="2";
		}

		else if(texto[i]=="b" || texto[i]=="B"){
			texto[i]="3";
		}

		else if(texto[i]=="c" || texto[i]=="C"){
			texto[i]="4";
		}

		else if(texto[i]=="d" || texto[i]=="D"){
			texto[i]="5";
		}

		else if(texto[i]=="e" || texto[i]=="E"){
			texto[i]="6";
		}

		else if(texto[i]=="f" || texto[i]=="F"){
			texto[i]="7";
		}
		
	}

	return texto;


}