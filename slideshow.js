var i = 0;  // start point
var images = [];
var time = 2000;

images[0] ="/images/barritas.jpeg"
images[1] = "/images/duvalin.jpeg"
images[2] = "/images/chamoy-covered-gummy-bears.jpeg"
images[3] = '/images/larosa.jpg'

function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
  window.onload=changeImg;