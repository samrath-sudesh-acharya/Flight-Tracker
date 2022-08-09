function fetch_data(){
    icoa = (document.getElementById('icoa').value).replaceAll(' ','');
    console.log(icoa)
    fetch(`https://flight-tracker-api.herokuapp.com/demo/${icoa.toUpperCase()}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('flight-data', JSON.stringify(data));
        fetch(`http://127.0.0.1:8000/map/${data[0]}`)
        .then(response =>console.log(response))
        window.location.href = "next.html";
    })
    .catch(error=>{
        console.log('[ERROR] : ',error);
    })
}
