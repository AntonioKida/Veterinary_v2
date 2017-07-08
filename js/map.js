function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 19.191418,
        lng: -96.136771
    },
    zoom: 18,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: {
        lat: 19.191418,
        lng: -96.136771
    },
    map: map,
    title: 'Hello World!'
  });
}
