
//function add(){
//	var a = 'here i am';
//}

//console.log(a);

//funtion getGreeting(name){
//	var greeting = 'hello';
//	return greeting + name;

//}

//	console.log(getGreeting('Shane')); //'hello Shane'
//	console.log(greeting); // undefined


//for(var i = 0; i < 10; i++){
//
//	var x = i;
//}

//console.log(i,x);

//function greet(name){
//	greeting = 'hello';
//	return greeting + name;
//}

//console.log(greet('Shane'))


//var greet = function(name2);

//var greet = function(){

//	console.log('Hello' + city);
//}

//greet();

//function outer(){

//	var x = 'x';

//	function inner(){

//		var y = 'y';

//		console.log(x);

//		return y;
//	}
//	var z = inner();

//console.log(z);
//}

//outer();

//______________________________________________________________________________________________________________________________________________________________
//var landscape = function() {
                //var result = "";
                
                //function flat(size) {
                    //for (var count = 0; count < size; count++)
                        //result += " _ ";
                //};
                
                
                //var mountain = function(size) {
                    //result += "/";
                    //for (var count = 0; count < size; count++)
                        //result += " '";
                    //result += "\\";
                //};
                
                //flat(3);
                //mountain(4);
                //flat(6);
                //mountain(1);
                //flat(1);
                //return result;
            //};

            //console.log(landscape());
//_______________________________________________________________________________________________________________________________________________________________


//var name = 'Shane';

//var greet = function(){

//	var name = 'Matt';
//	console.log(name);
//	return 'xyz';
//}


//console.log(name);
//console.log(greet(name));
//console.log(name)

//______________________________________________________________________________________________________________________________________________________________


//var a = 'code';

//var b = 'software';

//var abouterfunction = function(){

//	console.log(a);
//	console.log(b);


//	var abinnerfunction = function(){

		var a = 'build';
		var b = 'hardware';


		console.log(a);
		console.log(b);

//	}
//	abinnerfunction();
// 
//	console.log(a);
//	console.log(b);
//}


//abouterfunction();
//_____________________________________________________________________________________________________________________________________________________________


//function sayName(){

//	console.log(this.name);

//}

//var teacher1 = {
//	name: 'asaaf'
//	lastname: 'abc'
//	speak: sayName
//}

//var teacher2 = {
//	name: 'Shane'
//	lastname: ''
//	speak:
//}

//_____________________________________________________________________________________________________________________________________________________________


var slideshow = { 

		photoList: ['photo1','photo2','photo3'],
		currentPhotoIndex: 1,
		nextPhotoIndex: function(){
			return getNext(this.currentPhotoIndex);
		},
		prevPhotoIndex: function(){
			return getPrev(this.currentPhotoIndex);
		},

	}

	function getPrev(i){ return i-1;}
	function getNext(i){return  i+1;}
	function showMySlide(){
		console.log('now: ' + slideshow.currentPhotoIndex);
		console.log('next: ' + slideshow.nextPhotoIndex());
		console.log('prev' ' + slideshow.prevPhotoIndex());
	}

	showMySlide();

	function changeSlide(){
		
	}



// 	var photo1 = {
// 		people: 'The Holdsworth\'s',
// 		action: 'Vacation',
// 		location: 'Thailand'
// 		year: '2011',
// 	}
// 	var photo2 = {
// 		people: 'Myles',
// 		action: 'Cooking School',
// 		location: 'Culinary Institute of America',
// 		year: '2008'
// 	}
// 	var photo3 = {
// 		people: 'Halley',
// 		action: 'Developing Ads',
// 		location: 'New York City',
// 		year: '2010',
// 	}

// function nextPhoto(){


// }

// function prevPhoto(){



// }

