var React = require('react')

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<p>It is currently {temp} degrees in {location}.</p>
		</div>
	)
}


module.exports = WeatherMessage
