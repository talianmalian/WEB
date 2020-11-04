
//2.
let sentence = "Example text sentence."
document.write(sentence,"<br>");

var signs =[".",","," ", "!", "&","?","%","^", ";",":","#","/","*", "-" ];

var letters = 0;
for (var i = 0; i <sentence.length; i++) {
    if (signs.includes(sentence[i])){
        continue;
    }else {
    	letters++;
    }
}

var num = sentence.split(" ");

document.write( "Слов в строке: "+num.length+"<br>");
document.write( "Букв в строке: "+letters+"<br>");
console.log(document.URL);
console.log(window.location.href );


let div = document.createElement('div');
div.className = "URL";
div.innerHTML = document.URL;
document.body.append(div);


//5.
//protocol
var str = document.URL.indexOf(":");
var protocol = document.URL.substring(0,str);
document.write("<br>Имя протокола: ", protocol);
//extension
str = document.URL.lastIndexOf("/");
var extension = document.URL.substring(str + 1, document.URL.length);
document.write("<br>Полное имя файла: ", extension);


document.write("<br>Имя: " + extension.split(".")[0]);
document.write("<br>Расширение: " + extension.split(".")[1]);



// 6.


var fakeLink = "https://vk.com/im?sel=1&send=heart&sign=anonymous";
document.write("<br>", fakeLink);

var IndexOfQuestionSign = fakeLink.indexOf("?");

let pr = {};

let parametrs = fakeLink.substring(IndexOfQuestionSign+1, fakeLink.length).split("&");
for(let key in parametrs){
	
	pr[parametrs[key].split("=")[0]] = parametrs[key].split("=")[1];
	
}

// Основные тэги в документе

// 1 Добавление анкоров 

for(let key=0;key<Math.random()*10;key++){

	let a = document.createElement('a');
	a.name = 'Anchor'+key;
	a.innerHTML = '<br>Anchor'+key;
	document.body.append(a);

}
// 2 Добавление ссылок

for(let key=0;key<Math.random()*10;key++){

	let index= Math.trunc(Math.random()*1000000);
	let a = document.createElement('a');
	a.href = 'https://vk.com/id185'+index;
	a.innerHTML = '<br>https://vk.com/id185'+index;
	document.body.append(a);

}

// 3 Добавление изображений

	let img1 = document.createElement('img');
	img1.src = "https://mtdata.ru/u13/photo8019/20215908767-0/original.jpg";
	img1.id = "Crimea";
	img1.setAttribute("width", "350px");
	img1.setAttribute("height", "300px");
	document.body.append(img1);



	let img2 = document.createElement('img');
	img2.src = "https://aikea.by/u/2018/04/fikus-bendzhamina-natasha-rastenie-v-gorshke-fikus-bendzhamina-natasha-12-sm-703-808-98-1.jpg";
	img2.id = "Ficus";
	img2.setAttribute("width", "400px");
	img2.setAttribute("height", "400px");
	document.body.append(img2);

	let ANumbers = document.getElementsByTagName("a");

// 4,5 Вывод кол-ва ссылок и анкоров
	
	if (ANumbers.length==0) {

		alert("Нет анкоров или ссылок");
	}else 
	{
		let number_of_links = 0;

		for (let key=0; key<ANumbers.length; key++) {
			if (ANumbers[key].hasAttribute('href')){
				number_of_links++;
			}

		}


		document.write("<br>Количество анкоров: "+(ANumbers.length-number_of_links));
		document.write("<br>Количество ссылок: "+number_of_links);
	}
	
	// 6 Покажите содержимое (innerHTML) первого анкора на странице
	let AnchorLinks = document.querySelectorAll('a');

	let AnchorsNone = true;
	for(let key in AnchorLinks){

		if(AnchorLinks[key].hasAttribute('name')){
			document.write('<br>Текст первого анкора: '+ AnchorLinks[key].innerHTML);
			AnchorsNone = false;
			break;
		}

	}


	if(AnchorsNone){
		document.write('<br>Нет анкоров');
	}

	// 7 Выведите количество картинок

	let All_Images = document.querySelectorAll('img');

	if(All_Images.length > 0){

		document.write('<br>Всего картинок: '+ All_Images.length);
	}else{

		document.write('<br>Нет картинок');
	}

	// 8 Выведите ширину первой картинки
	document.write('<br>Ширина первой картинки: '+document.querySelector('img').width);

	// 9 Выведите ширину самой широкой картинки

	let MaxImgWidth = All_Images[0].width;

	for (let key in All_Images) {
		if(All_Images[key].width> MaxImgWidth){
			MaxImgWidth = All_Images[key].width;
		}
	}

	document.write('<br>Ширина самой широкой картинки: '+MaxImgWidth);

	// 10 Выведите сумму всех высот картинок

	let SumImageHeight = 0;

	for (let key=0; key<All_Images.length;key++) {

		SumImageHeight = SumImageHeight + All_Images[key].clientHeight;
	}

	document.write('<br>Cумма всех высот картинок: '+ SumImageHeight);
	

	// 3.Формы 

	// 1 создание форм 

	for(let key=0;key<10;key++){

		
		let form = document.createElement('form');
		form.name = 'form'+key;
		document.body.append(form);

	}

	// 2 Отобразите на странице имена всех четных форм через запятую.

	let AllForms = document.querySelectorAll('form');

	for(let key in AllForms){

		if(key%2==0){
			document.write(AllForms[key].name+', ');
		}
	}


	// 3 Добавьте в форму не менее 2 полей (разных видов и разное количество).

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_text  = document.createElement('input');
		input_type_text.type = 'text';
		let input_type_checkbox = document.createElement('input');
		input_type_checkbox.type = 'checkbox';
		AllForms[key].appendChild(input_type_text);
		AllForms[key].appendChild(input_type_checkbox);


	}

	// 4 Добавьте в каждую форму кнопку “Показать имя формы”. 
	// При клике на кнопку показать в стандартном всплываюдщем окне текст, отображаемый на кнопке

    function SayName() { 
    	alert(this.value); 
    };

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Показать имя формы';
		input_type_button.type = 'button';
		input_type_button.addEventListener('click', SayName);

		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/color/48/000000/employee-card.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		input_type_button.style.backgroundSize ='30px';
		
		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
 
 
  		AllForms[key].appendChild(input_type_button);
		
	}



// Добавьте в каждую форму кнопку “Принадлежность”. 
// При клике на эту кнопку показать в всплывающем окне id формы, которой принадлежит кнопка.

	function Parent(){
		alert(this.parentElement.name);
	}

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Принадлежность';
		input_type_button.type = 'button';
		input_type_button.addEventListener('click', Parent);

		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/ultraviolet/40/000000/father.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		input_type_button.style.backgroundSize ='30px';
		
		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
 
 
  		AllForms[key].appendChild(input_type_button);
		
	}



// Создайте функцию для сброса полей формы. Добавьте к каждой форме кнопку “Сбросить”.
//  Эта кнопка сбрасывает все значения той формы, на которую кликнул пользователь.


function ResetForm(){
		this.parentElement.reset();
	}

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Сброс';
		input_type_button.type = 'button';
		input_type_button.addEventListener('click', ResetForm);

		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/offices/30/000000/eraser.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		
		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
 
  		AllForms[key].appendChild(input_type_button);
		
	}


// Добавьте в каждую форму кнопку “Показать количество полей”. 
// При клике на ней показывается высплывающее окно с кол-во полей в форме.


function InputNum(){
		alert(this.parentElement.getElementsByTagName('input').length);
	}


for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Показать количество полей';
		input_type_button.type = 'button';


		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/ultraviolet/40/000000/form.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		input_type_button.style.backgroundSize ='30px';

		input_type_button.addEventListener('click', InputNum);

		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
		
 
  		AllForms[key].appendChild(input_type_button);
		
	}

// Оформите все кнопки формы как на картинке ниже.

// Все типовые кнопки (которые должны выполнять одинаковые функции в формах) должны иметь одинаковые иконки. 
// Выберите иконки на свой вкус и скачайте с этого сайта. При наведении мыши фон кнопки должен менять цвет.
// Контуры кнопки скруглены (10пк), уменьшите размер исходной иконки до 20пк и поместите ее в качестве фона.
// Задайте отступы для текста и отступы для фоновой картинки, задав ее расположение left top.


	let DivA = document.createElement('div');
		DivA.id="DivLinks";
		document.body.append(DivA);

	for(let key=0;key<10;key++){

		let index= Math.trunc(Math.random()*1000000);
		let a = document.createElement('a');
		a.href = 'https://vk.com/id185'+index;
		
		if(key%2==1){
			a.innerHTML = '<br>Нечетная ссылка';
		} 

		if(key%2==0){
			a.innerHTML = '<br>Четная ссылка';
		} 
		if((key==3)|| (key==1)) {
			a.innerHTML = '<br>Еще ссылочки';
		}
		
		DivA.append(a);

	}


//Выводит ссылки через запятую 


	// let A = DivA.getElementsByTagName('a');


	// let Elem =  function (innerHTML, href){

	// 	this.name = innerHTML;
	// 	this.links = [href];


	// }



	// var arr = [];

	// for (let key=0; key<A.length; key++) {
		
	// 	if(arr.length==0){
	// 			arr.push(new Elem(A[key].innerHTML,A[key].href))
	// 	}else{

	// 		let flag = false;
	// 		let index;

	// 		for (let i = 0; i<arr.length; i++ ) {
	// 			if(arr[i].name == A[key].innerHTML){
	// 				flag = true;
	// 				index = i;
	// 				break;
	// 			}
	// 		}


	// 		if(flag){
	// 			arr[index].links.push(A[key].href);

	// 		}else{

	// 			arr.push(new Elem(A[key].innerHTML,A[key].href))
	// 		}

	// 	}

	// }

	// let Tb = document.createElement('table');
	// document.body.append(Tb);

	// for (let key=0; key<arr.length; key++) {

	// 	let Tr =document.createElement('tr');
	// 	Tb.appendChild(Tr);

	// 	let tdName = document.createElement('td');
	// 	tdName.innerHTML = arr[key].name;
	// 	Tr.appendChild(tdName);


	// 	let tdNumber = document.createElement('td');
	// 	tdNumber.innerHTML = arr[key].links.length;
	// 	Tr.appendChild(tdNumber);


	// 	let tdLinks = document.createElement('td');
	// 	tdLinks.innerHTML = arr[key].links;
	// 	Tr.appendChild(tdLinks);

	// }


	

	
// Выводит ссылки как объекты DOM

let A = DivA.getElementsByTagName('a');


	let Elem =  function (innerHTML, href){

		this.name = innerHTML;
		this.links = [href];


	}



	var arr = [];

	for (let key=0; key<A.length; key++) {
		
		if(arr.length==0){
				arr.push(new Elem(A[key].innerHTML,A[key]))
		}else{

			let flag = false;
			let index;

			for (let i = 0; i<arr.length; i++ ) {
				if(arr[i].name == A[key].innerHTML){
					flag = true;
					index = i;
					break;
				}
			}


			if(flag){
				arr[index].links.push(A[key]);

			}else{

				arr.push(new Elem(A[key].innerHTML,A[key]))
			}

		}

	}

	let Tb = document.createElement('table');
	document.body.append(Tb);

	for (let key=0; key<arr.length; key++) {

		let Tr =document.createElement('tr');
		Tb.appendChild(Tr);

		let tdName = document.createElement('td');
		tdName.innerHTML = arr[key].name;
		Tr.appendChild(tdName);


		let tdNumber = document.createElement('td');
		tdNumber.innerHTML = arr[key].links.length;
		Tr.appendChild(tdNumber);


		let tdLinks = document.createElement('td');
		Tr.appendChild(tdLinks);

		for(let i in arr[key].links){
			tdLinks.appendChild(arr[key].links[i]);

		}
		

	}
