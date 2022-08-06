function fetch_data(){
    icoa = (document.getElementById('icoa').value).replaceAll(' ','');
    console.log(icoa)
    fetch(`https://flight-tracker-api.herokuapp.com/demo/${icoa.toUpperCase()}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('flight-data', JSON.stringify(data));
        window.location.href = "info.html";
    })
    .catch(error=>{
        console.log('[ERROR] : ',error);
    })
}
