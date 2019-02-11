function allume(i) {
	var _this = this;
	var element = document.getElementById("block"+i);
	var x = element.className;
	switch(x){
		case 'row block1':
			element.classList.remove('block1');
			element.classList.add('block1On');
			break;
		case 'block2':
			element.classList.remove('block2');
			element.classList.add('block2On');
			break;
		case 'row block3':
			element.classList.remove('block3');
			element.classList.add('block3On');
			break;
		case 'block4':
			element.classList.remove('block4');
			element.classList.add('block4On');
			break;
		case 'block5':
			element.classList.remove('block5');
			element.classList.add('block5On');
			break;
		case 'row block1On':
			element.classList.remove('block1On');
			element.classList.add('block1');
			break;
		case 'block2On':
			element.classList.remove('block2On');
			element.classList.add('block2');
			break;
		case 'row block3On':
			element.classList.remove('block3On');
			element.classList.add('block3');
			break;
		case 'block4On':
			element.classList.remove('block4On');
			element.classList.add('block4');
			break;
		case 'block5On':
			element.classList.remove('block5On');
			element.classList.add('block5');
			break;
	};	
}