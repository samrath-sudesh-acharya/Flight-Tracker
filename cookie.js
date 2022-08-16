onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
    const data1 = localStorage.getItem('latitude')
    const data2 = localStorage.getItem('longitude')
    console.log(data1)
    console.log(data2)
}