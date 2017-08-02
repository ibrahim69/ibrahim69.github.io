function checkScroll(){
    var startY = $('.navbar').height() * 0.1; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}


// // Google maps
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
//
// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 14,
//         scrollwheel: false,
//         DoubleClickZoom: true,
//
//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(-7.075711, 110.360372), // New York
//
//         // How you would like to style the map.
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
//     };
//
//     // Get the HTML DOM element that will contain your map
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');
//     var map = new google.maps.Map(mapElement, mapOptions);
//     var icon = {
//       url: "img/map-marker.svg", // url
//       scaledSize: new google.maps.Size(50, 50), // scaled size
//       origin: new google.maps.Point(0,0), // origin
//       anchor: new google.maps.Point(0, 0) // anchor
//     };
//    var point = new google.maps.LatLng(-7.075711, 110.360372);
//    var data = "Ngrembel Asri <br> One Stop Recreation <br><br> <a href='https://www.google.com/maps/place/Museum+of+Modern+Art/@40.7584387,-73.9968041,14z/data=!3m1!5s0x89c258fbd5ec7547:0x7edf0a3ab30aad59!4m5!3m4!1s0x89c258f97bdb102b:0xea9f8fc0b3ffff55!8m2!3d40.7614327!4d-73.9776216'>View on Google Maps</a>";
//    var infowindow = new google.maps.InfoWindow({
//      content: data
//    });
//     var marker = new google.maps.Marker({
//         position: point,
//         map: map,
//         icon: icon,
//     });
//     google.maps.event.addListener(marker, 'click', function() {
//      infowindow.open(map,marker);
//    });
// }
