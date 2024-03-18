var map = L.map('map', {
    minZoom: 10,
    maxZoom: 18
}).setView([10.0455, 105.7469], 13);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var currentLocationMarker; // Biến để lưu marker hiện tại
var searchLocationMarker;  // Biến để lưu marker của vị trí tìm kiếm

// Thêm control tìm kiếm vị trí
var searchControl = L.Control.geocoder({
    defaultMarkGeocode: false
}).on('markgeocode', function(e) {
    var latLng = e.geocode.center;
    
    // Xóa marker tìm kiếm trước đó nếu tồn tại
    if (searchLocationMarker) {
        map.removeLayer(searchLocationMarker);
    }
    
    // Hiển thị marker tìm kiếm mới
    searchLocationMarker = L.marker(latLng).addTo(map).bindPopup(e.geocode.name).openPopup();

    // Nếu marker vị trí hiện tại đã được tạo, cập nhật địa điểm cuối cùng cho control dẫn đường
    if (currentLocationMarker) {
        routeControl.setWaypoints([currentLocationMarker.getLatLng(), latLng]);
    }
}).addTo(map);

// Thêm control dẫn đường
var routeControl = L.Routing.control({
    routeWhileDragging: true
}).addTo(map);

// Lấy vị trí hiện tại của người dùng
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateMapLocation);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Cập nhật vị trí hiện tại lên bản đồ
function updateMapLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latLng = L.latLng(latitude, longitude);

    // Tạo marker vị trí hiện tại và thêm vào bản đồ
    currentLocationMarker = L.marker(latLng).addTo(map);

    // Nếu đã có marker vị trí tìm kiếm, cập nhật lại địa điểm cuối cùng cho control dẫn đường
    if (searchLocationMarker) {
        routeControl.setWaypoints([latLng, searchLocationMarker.getLatLng()]);
    }
}

// Gọi hàm để lấy vị trí hiện tại khi trang được tải
getLocation();


