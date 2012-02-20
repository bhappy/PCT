function geo_success(p) {
  var lat = p.coords.latitude;
  var lng = p.coords.longitude;	
  //alert("Found you at latitude " + p.coords.latitude + ", longitude " + p.coords.longitude);
  codeLatLng(lat, lng);		
}

function geo_error() {
  alert("We were not able to locate you!");
}

function codeLatLng(lat, lng) {

	// http://stackoverflow.com/questions/6797569/html5-geolocation-easiest-way-to-get-city-name
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          //var address= results[0].formatted_address; 
		  for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {
        		switch(results[0].address_components[i].types[b])
				{
					case "country":
					  country = results[0].address_components[i];
					  break;
					case "administrative_area_level_1":
					  state = results[0].address_components[i];
					  break;
					case "locality":
					  city = results[0].address_components[i];
					  break;  
					default:
					  address = results[0].formatted_address;
				}
	        }
          }
	      $.ajax({
		    url: "/products/offer?city="+ city.long_name + "&state="+state.long_name + "&country="+country.long_name,
		    cache: false,
		    //success: function(html){
		    //  $("#offer-wrapper").append(html);
		    //}
		  });		
		} else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
}