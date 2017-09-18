function pokeFound(pokeInfo){
	$("#pokedex-window").load("battle.html");
	$("#battle-name").text(pokeInfo.name);
	$("#battle-sprite").attr("src", pokeInfo.sprite);

<<<<<<< HEAD:assets/js/game.js
	foundPokedex(pokeInfo);
}

$("#map-button").on("click", function(){
	$("#pokedex-window").html("");
	$("#pokedex-window").load("map.html");
});

$("#pokeball-button").on("click", function(){
	$("#pokedex-window").html("");
	viewPokedex;
	//$("#pokedex-window").unload("map.html");
	viewPokedex();
});

$("#battle-ok").on("click", function(){
	$("#battle-text").html("A wild" + $("#battle-name").text() + "has appeared!");
	$("#battle-text").html("<button id='battle-catch'>Catch</button><button id='battle-run'>Run</button>");
});

$("#battle-run").on("click", function(){
	$("#battle-text").html("Got away safely! <button id='battle-runok'>Ok</button>");
});

$("#battle-runok").on("click", function(){
	$("#pokedex-window").load("map.html");
});

$("#battle-fled").on("click", function(){
	$("#pokedex-window").load("map.html");
});

$("#pokemon").on("click", function(){
	viewPokemon($("pokedex-id").value());

	$("#pokedex-sprite").attr("src", "")
	$("#poke-info").removeClass("hide");
})

$("#battle-catch").on("click", function(){
	
	if(pokeInfo.id < 130){
		var pokeCatchChance = Math.round(Math.random() * 20);
		var pokeCatchroll = Math.round(Math.random() * 20);
	}else{
		var pokeCatchChance = Math.round(Math.random() * 4);
		var pokeCatchroll = Math.round(Math.random() * 4);
	}

	if(pokeCatchroll === pokeCatchChance){
		$("#battle-text").html(pokeInfo.name + " was caught! <button id='view-pokemon'>Ok</button>");
		caughtPokedex();

	}else{
		var pokeRunChance = Math.round(Math.random() * 10);
		var runState = false;
		
		if(pokeInfo.id === 63){
			if(pokeRunChance !== "2" || pokeRunChance !== "7"){
				run = true;
			}
		}else{
			var pokeRunRoll = Math.round(Math.random() * 5);

			if(pokeRunRoll === pokeRunChance){
				run = true;
			}
		}
		if(runState === true){
			$("#battle-name").addClass("hide");
			$("#battle-sprite").addClass("hide");
			$("#battle-text").html(pokeInfo.name + " has fled! <button id='battle-fled'>Ok</button>");
		}
	}

});

// $('.type-it').typeIt({
//   speed: 900,
//   lifeLike: false,
//   autoStart: true,
//   cursor: false
// })
// .tiType('A wild Pokemon has appeared')
=======
var locTypes = ["airport", "aquarium", "bar", "campground", "cemetery", "electrician", "electronics_store", "fire_station", "florist", "funeral_home", "gym", "library", "liquor_store", "museum", "park", "zoo", "restaurant", "stadium", "doctor", "police","travel_agency", "pharmacy", "shopping_mall", "bakery", "night_club", "train_station", "school", "gas_station", "amusement_park", "cafe", "subway_station", "jewelry_store", "pet_store", "university", "art_gallery", "parking", "rv_park", "veterinary_care", "movie_theater","lodging"]
var searchZone = 5000;

var markerArray = [];

function initMap() {
  var pos = {lat: 37.4213897, lng: -122.083906};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 16
  });

  infowindow = new google.maps.InfoWindow();
  

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pos,
        radius: searchZone,
        types: locTypes,
        rankBy: google.maps.places.RankBy.PROMINENCE,
      }, callback);

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }// end if

  else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function callback(results, status) {

  console.log(results);

  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {

      createMarker(results[i]);
      console.log(results[i].types);
    }
  }
}

function createMarker(place) {

	//replace with pokeCall
	var imgTest ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"; 

	var placeLoc = place.geometry.location;

	markerArray.push(placeLoc);
	console.log("Ma" + markerArray);

	var marker = new google.maps.Marker({

		map: map,
		position: place.geometry.location,
		animation: google.maps.Animation.DROP,
		icon: imgTest

	});//make markers

	google.maps.event.addListener(marker, 'click', function() {

		var rangeCheck = true;

		if (rangeCheck === false){
			// radius comparision nooot working atm.
			// TDL.
		}

		else{
			infowindow.setContent("Pokemon Found!");
			infowindow.open(map, this);
			toggleBounce();
			soundBattle();
		}

	});
	
	var batSound = new Audio('assets/sound/14-battle-wild-poke-mon-.mp3');
	
	function soundBattle(){
		batSound.play();
		setTimeout(soundStop, 3000);
	}

	function soundStop(){
		batSound.pause();
		marker.setMap(null);
	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}
}
>>>>>>> c3b92947c2d0c42c9eabed0a634fb0467f4cff09:assets/js/map.js