// var names = ['Mick', 'Rory', 'Ronald']

// names.forEach(function (name) {
// 	console.log('forEach', name)
// })

// names.forEach(name => console.log(name))

// var returnMe = name => name + '!'
// console.log(returnMe('Batman'))

// var person = {
// 	name: 'Batman',
// 	greet: function () {
// 		names.forEach(name => {
// 			console.log(this.name + ' says hi to ' + name)
// 		})
// 	}
// }
//
// person.greet()

function add (a, b) {
	return a + b
}
var add2 = (a, b) => a+b
var add3 = (a, b) => {
	return a+b
}
console.log(add3(1, 3))
console.log(add3(9, 0))
