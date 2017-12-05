function prepara(){

	var texto = $("#texto1").val();
	texto = texto.split("");

	//confirmando se funcionou.
	console.log(texto);

	//pegando a chave.
	var chave = $("#chave").val();
	var chave = chave.split("");
	//confirmando se funcionou.
	console.log(chave);


	//localização das letras maiúsculas.
	var s = new Array();
	for(i = 0; i < texto.length; i++) { 
	 	if(texto[i]=='A'){
			s.push(i);
		}
		if(texto[i]=='B'){
			s.push(i);
		}
		if(texto[i]=='C'){
			s.push(i);
		}
		if(texto[i]=='D'){
			s.push(i);
		}
		if(texto[i]=='E'){
			s.push(i);
		}
		if(texto[i]=='F'){
			s.push(i);
		}
		if(texto[i]=='G'){
			s.push(i);
		}
		if(texto[i]=='H'){
			s.push(i);
		}
		if(texto[i]=='I'){
			s.push(i);
		}
		if(texto[i]=='J'){
			s.push(i);
		}
		if(texto[i]=='K'){
			s.push(i);
		}
		if(texto[i]=='L'){
			s.push(i);
		}
		if(texto[i]=='M'){
			s.push(i);
		}
		if(texto[i]=='N'){
			s.push(i);
		}
		if(texto[i]=='O'){
			s.push(i);
		}
		if(texto[i]=='P'){
			s.push(i);
		}
		if(texto[i]=='Q'){
			s.push(i);
		}
		if(texto[i]=='R'){
			s.push(i);
		}
		if(texto[i]=='S'){
			s.push(i);
		}
		if(texto[i]=='T'){
			s.push(i);
		}
		if(texto[i]=='U'){
			s.push(i);
		}
		if(texto[i]=='V'){
			s.push(i);
		}
		if(texto[i]=='W'){
			s.push(i);
		}
		if(texto[i]=='X'){
			s.push(i);
		}
		if(texto[i]=='Y'){
			s.push(i);
		}
		if(texto[i]=='Z'){
			s.push(i);
		}
	}

	console.log(s);

	//cifra de cesar.
	for(i=0;i<texto.length;i++){
		if(texto[i]==' '){
			texto[i]='RA';
		}
		if(texto[i]=='A'){
			texto[i]='d';
		}
		if(texto[i]=='B'){
			texto[i]='e';
		}
		if(texto[i]=='C'){
			texto[i]='f';
		}
		if(texto[i]=='D'){
			texto[i]='g';
		}
		if(texto[i]=='E'){
			texto[i]='h';
		}
		if(texto[i]=='F'){
			texto[i]='i';
		}
		if(texto[i]=='G'){
			texto[i]='j';
		}
		if(texto[i]=='H'){
			texto[i]='k';
		}
		if(texto[i]=='I'){
			texto[i]='l';
		}
		if(texto[i]=='J'){
			texto[i]='m';
		}
		if(texto[i]=='K'){
			texto[i]='n';
		}
		if(texto[i]=='L'){
			texto[i]='o';
		}
		if(texto[i]=='M'){
			texto[i]='p';
		}
		if(texto[i]=='N'){
			texto[i]='q';
		}
		if(texto[i]=='O'){
			texto[i]='r';
		}
		if(texto[i]=='P'){
			texto[i]='s';
		}
		if(texto[i]=='Q'){
			texto[i]='t';
		}
		if(texto[i]=='R'){
			texto[i]='u';
		}
		if(texto[i]=='S'){
			texto[i]='v';
		}
		if(texto[i]=='T'){
			texto[i]='w';
		}
		if(texto[i]=='U'){
			texto[i]='x';
		}
		if(texto[i]=='V'){
			texto[i]='y';
		}
		if(texto[i]=='W'){
			texto[i]='z';
		}
		if(texto[i]=='X'){
			texto[i]='a';
		}
		if(texto[i]=='Y'){
			texto[i]='b';
		}
		if(texto[i]=='Z'){
			texto[i]='c';
		}
		if(texto[i]=='a'){
			texto[i]='D';
		}
		if(texto[i]=='b'){
			texto[i]='E';
		}
		if(texto[i]=='c'){
			texto[i]='F';
		}
		if(texto[i]=='d'){
			texto[i]='G';
		}
		if(texto[i]=='e'){
			texto[i]='H';
		}
		if(texto[i]=='f'){
			texto[i]='I';
		}
		if(texto[i]=='g'){
			texto[i]='J';
		}
		if(texto[i]=='h'){
			texto[i]='K';
		}
		if(texto[i]=='i'){
			texto[i]='L';
		}
		if(texto[i]=='j'){
			texto[i]='M';
		}
		if(texto[i]=='k'){
			texto[i]='N';
		}
		if(texto[i]=='l'){
			texto[i]='O';
		}
		if(texto[i]=='m'){
			texto[i]='P';
		}
		if(texto[i]=='n'){
			texto[i]='Q';
		}
		if(texto[i]=='o'){
			texto[i]='R';
		}
		if(texto[i]=='p'){
			texto[i]='S';
		}
		if(texto[i]=='q'){
			texto[i]='T';
		}
		if(texto[i]=='r'){
			texto[i]='U';
		}
		if(texto[i]=='s'){
			texto[i]='V';
		}
		if(texto[i]=='t'){
			texto[i]='W';
		}
		if(texto[i]=='u'){
			texto[i]='X';
		}
		if(texto[i]=='v'){
			texto[i]='Y';
		}
		if(texto[i]=='w'){
			texto[i]='Z';
		}
		if(texto[i]=='x'){
			texto[i]='A';
		}
		if(texto[i]=='y'){
			texto[i]='B';
		}
		if(texto[i]=='z'){
			texto[i]='C';
		}
	}


	var tstr = new Array();
	$.each(texto, function(index,texto) {
		var str = texto;
		tstr.push(str);
	});
	console.log(tstr.join(""));
	var fstr = tstr.join("");			

	$("#cifrado").append($("<p />").text(fstr));

	console.log(texto);

	


}