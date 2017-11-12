 // i

 /*
 
 var testString = "Яблоко"
 var lettersArr = testString.split('')

 var vowels = ["а", "е", "и", "о", "у", "я", "ё", "ю", "й", "ы" ]

 var result = "" // e
 

 for (var i=0; i < lettersArr.length; i++) {
 	var currentLetter = lettersArr[i]

 	if (vowels.indexOf(currentLetter.toLowerCase()) !== -1) {
 	result = result + currentLetter
 	}
 }

  console.log(result);

  */


  /*
  function test (a) {
  	var b = a + 10;

  	//code
  	//code
  	//code
  	//code
  	//code

  	return b;
  }

  var resultFunc = test(10);

  console.log(resultFunc);
   */


   /*
   var users = [
   {

   	name: "Алексей",
   	salary: 500

   },
   {

   	name: "Виктор",
   	salary: 1300

   },
   {
   	name: "Иван",
   	salary: 1500
   }
   ];

   function filterBySalary(array, salary) {
   	var resultArr = [];

   	for (var i = 0; i < users.length; i++) {
   	 var user = array[i]

   	if(user.salary >= salary) {
   		resultArr.push(user.name)
   	}

   	}
   
   return resultArr

   }

   var fireThem = filterBySalary(users, 1400)

   console.log(fireThem)
     */

     function isHtml(path, ext) {
     	var isHtmlOrNot = path.slice(ext.length) === ext
     	return isHtmlOrNot
     }

     var result = isHtml('/users/download/for_js.html', 'jpeg')

     console.log(result)