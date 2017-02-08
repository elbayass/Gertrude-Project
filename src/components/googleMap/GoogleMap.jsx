import React from 'react';
class GoogleMap extends React.Component {

	render() {
		return (

<div>
	<iframe
	  frameborder="0" style={{border:0,width:"100%",height:"25px",zoom:9}}
	  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyn4n9NbE91_kcahkbnUKGPYoEca7LEMg&q=55+rue+de+vincennes,Montreuil+FR" allowFullScreen>
	</iframe>

</div>

			);
		}
	}

export default GoogleMap;
