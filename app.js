let map;
        function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 34.134117, lng: -118.321495 },
            zoom: 14
        
        });
        let var_marker = new google.maps.Marker({
            position: map["center"],
            map: map,
            title: "Los Angeles"
        })
    }
    window.initMap = initMap;