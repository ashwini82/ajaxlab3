//exercise 3//
//var arrayWords = ['apple','banana','orange']
//var complexArray = ['apple', 34, true]

function makeAllCaps(a){
	return new Promise((resolve, reject) => {
		let capsArray = a.map(word => {
     if(typeof word === 'string'){
     	return word.toUpperCase()
     } else {
     	reject('Error:Not all items in the array are strings!')
     }
		})
		resolve(capsArray) 
	})
}


function sortWords(a){
	return new Promise((resolve,reject) =>{
		if(a){
			a.forEach((element) => {
				if(typeof element !== 'string'){
					reject('Error:Not all items in the array are strings!')
				} else {
					resolve(b=a.sort())
				}
			})
		}
	})
}
var arrayWords = ['apple','banana','orange']
var complexArray = ['apple', 34, true]

makeAllCaps(arrayWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))


makeAllCaps(complexArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))