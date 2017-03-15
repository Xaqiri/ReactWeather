// function getTempCallback (location, callback) {
// 	callback(undefined, 78)
// 	callback('City not found')
// }
//
// getTempCallback('Panama City', function (err, temp) {
// 	if (err) {
// 		console.log('error', err)
// 	} else {
// 		console.log('success', temp)
// 	}
// })
//
// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			resolve(79)
// 			reject('City not found')
// 		}, 1000)
// 	})
// }
//
// getTempPromise('Panama City').then(
// 	temp => {	console.log('promise success', temp) },
// 	err => { console.log('promise error', err) }
// )

function addPromise (a, b) {
	return new Promise((resolve, reject) => {
		if (typeof a === 'number' && typeof b === 'number') {
			 resolve(a+b)
		}
		else reject('Both must be numbers')
	})
}

addPromise(2, 3).then(
	sum => console.log(sum),
	err => console.log(err)
)
