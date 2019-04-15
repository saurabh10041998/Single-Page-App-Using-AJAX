$(document).ready(function() {
	//core method $.ajax  


	//function which anchors all loading
	$('a').on('click', function(e) {
		e.preventDefault();

		var pageRef = $(this).attr("href");
		callPage(pageRef)

	})

	// function which loads the page asynchronusly
	function callPage(PageRefInput) {
		$.ajax({
			// the URL for the request
			url: PageRefInput,

			// the data to send (will be converted to query string)
			data: {
				id: 123
			},

			//whether this POST or GET request
			type: "GET",

			//the type of data we expect back
			dataType : "text",

			// code to run if the request succeeds;
			// the response is pased to function

			success : function(response) {
				console.log("the page was loaded", response);
				$(".content").html(response);			
			},

			// code to run if the request fails; the raw request
			// status codes are passed to function
			error: function( error ){
				console.log("the page was not loaded",error);
			},

			//code to run regardless of success or failure
			complete: function( xhr, status) {
				console.log("The request is complete!");
			}

		});
	} 

});