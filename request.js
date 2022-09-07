function fetch_data(){
    icoa = (document.getElementById('icoa').value).replaceAll(' ','');
    console.log(icoa);
    fetch(`https://flight-tracker-api.herokuapp.com/data/${icoa.toUpperCase()}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('flight-data', JSON.stringify(data));
        insert_data(data[0]);
        console.log(data[0]["departure"]["airport"]);
        localStorage.setItem('departure',data[0]["departure"]["airport"]);
        localStorage.setItem('arrival',data[0]["arrival"]["airport"]);
        window.location.href = 'next.html';
    })
    .catch(error=>{
        console.log('[ERROR] : ',error);
    })
}

const but = document.getElementById("btn1");
ser = document.getElementById("load");

but.addEventListener("click", ()=>{
    ser.style.display = "inline-block";

});

function insert_data(data){
    const user_id = localStorage.getItem('user_id');

    json = {
            "airline_name": data['airline']['name'],
            "airline_iata": data['airline']['iata'],
            "airline_icao": data['airline']['icao'],
            "departure_airport": data['departure']['airport'],
            "departure_timezone": data['departure']['timezone'],
            "departure_iata": data['departure']['iata'],
            "departure_icao": data['departure']['icao'],
            "departure_terminal": data['departure']['terminal'],
            "departure_gate": data['departure']['gate'],
            "departure_baggage": data['departure']['baggage'],
            "departure_delay": data['departure']['delay'],
            "departure_scheduled": data['departure']['scheduled'],
            "departure_estimated": data['departure']['estimated'],
            "departure_actual": data['departure']['actual'],
            "departure_estimated_runway": data['departure']['estimated_runway'],
            "departure_actual_runway": data['departure']['actual_runway'],
            "arrival_airport": data['arrival']['airport'],
            "arrival_timezone": data['arrival']['timezone'],
            "arrival_iata": data['arrival']['iata'],
            "arrival_icao": data['arrival']['icao'],
            "arrival_terminal": data['arrival']['terminal'],
            "arrival_gate": data['arrival']['gate'],
            "arrival_baggage": data['arrival']['baggage'],
            "arrival_delay": data['arrival']['delay'],
            "arrival_scheduled": data['arrival']['scheduled'],
            "arrival_estimated": data['arrival']['estimated'],
            "arrival_actual": data['arrival']['actual'],
            "arrival_estimated_runway": data['arrival']['estimated_runway'],
            "arrival_actual_runway": data['arrival']['actual_runway'],
            "flight_number": data['flight']['number'],
            "flight_iata": data['flight']['iata'],
            "flight_icao": data['flight']['icao'],
            "user_id": user_id,
            "flight_date": data['flight_date'],
            "flight_status": data['flight_status']
    }
    console.table(JSON.stringify(json));
    fetch("http://127.0.0.1:8000/data", {
                method: "POST",
                body: JSON.stringify(json),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
        }).catch(error=>{
            console.log('[ERROR]: ',error);
        });
}
