function fetch_data(){
    icoa = (document.getElementById('icoa').value).replaceAll(' ','');
    console.log(icoa)
    fetch(`https://flight-tracker-api.herokuapp.com/demo/${icoa.toUpperCase()}`)
    .then(response => response.json())
    .then(data => display(data))
    .catch(error=>{
        console.log('[ERROR] : ',error);
    })
}

function display(data){
    window.location.href = "info.html";
    console.log(data[0])
    document.getElementById('info').innerHTML = data[0]['airline']['name']
    // document.getElementById('airline_name').innerHTML = data[0]['airline']['name']
}