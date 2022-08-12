function fetch_data(){
    icoa = (document.getElementById('icoa').value).replaceAll(' ','');
    console.log(icoa);
    fetch(`https://flight-tracker-api.herokuapp.com/demo/${icoa.toUpperCase()}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('flight-data', JSON.stringify(data));
        fetch(`https://flight-tracker-api.herokuapp.com/map/departure=${data[0]["departure"]["airport"]}&arrival=${data[0]["arrival"]["airport"]}`)
        .then(data=>data.text())
        .then(data=>{
            // var FileSaver = require('file-saver');
             var blob = new Blob([`${data}`],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, "map.html");
            window.location.href = "next.html";
            
        })
    })
    .catch(error=>{
        console.log('[ERROR] : ',error);
    })
}


