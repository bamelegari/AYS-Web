/*required css (modify sizes as needed):
	#slideshowDiv {
		float: right;
		width: 100%;
		height: 480px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}

	#slideshowDiv img {
		position: absolute;
		transition: opacity 1.5s;
		opacity: 0;
		margin-left: auto;
		margin-right: auto;
		object-fit: contain;
	}

	#slideshowDiv img.fadeIn {
		opacity: 1;
	}
*/

var slideIndex = 0,
	imgDuration = 5000,
    slidshowDiv = document.getElementById("slideshowDiv"),
    slides = slideshowDiv.childNodes;
    // all images here:
	// note the first image may appear to be the last image if it gets eaten up by loading time. No big deal in this application.
	imgArray1 = [ //mostly square images
        '/assets/129/6/IMG_1040.jpeg',
		'/assets/129/6/IMG_1046.jpeg',
		'/assets/129/6/IMG_1030.jpeg',
		'/assets/129/6/IMG_1028.jpeg'
    ];
	
	imgArray2 = [ //those really wide images
		'/assets/129/6/IMG_1037.jpeg',
		'/assets/129/6/CIDIMG.jpg'
	];

function buildSlideshow(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        var img = document.createElement('img');
        img.src = arr1[i];
        img.alt = "slideshow";
        slideshowDiv.appendChild(img);
    }
	
	for (i = 0; i < arr2.length; i++) {
		var img = document.createElement('img');
		img.src = arr2[i];
		img.alt = "slideshow";
		img.style = "width: 100%; height: auto;";
		slideshowDiv.appendChild(img);
    }
}

function slideshow() {

	function fadeIn(e) {
		e.className = "fadeIn";
	}

	function fadeOut(e) {
		e.className = "";
	}
  
	fadeOut(slides[slideIndex]);
	slideIndex++;
	if (slideIndex == slides.length) {slideIndex = 0;}
	fadeIn(slides[slideIndex]);
	
	setTimeout(function () {slideshow();}, imgDuration);
	
	}
	
buildSlideshow(imgArray1, imgArray2);
slideshow();