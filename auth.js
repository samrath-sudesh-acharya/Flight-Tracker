function auth(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    $.ajax({
        type: "POST",
        url: "auth.php",
        data: {"email": email,"password":password},
        success: function (response) {
            alert(response)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
    })
}

// var options = 'email='+email+'&password='+password;

// var httpr=new XMLHttpRequest();
// httpr.open("POST","./php/auth.php",true);
// httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
// httpr.onreadystatechange=function(){
//     if(httpr.readyState==4&& httpr.status==200){
//         console.log(httpr.responseText);
//     }
// }
// httpr.send(options);

// $(document).ready(function() {
// 			 	$(".btnLoad").click(function() {
// 			 		// Fetching data using post() method.
// 			 		$.post("mypost.php", {
// 			 			name: "Firstname Lastname",
// 			 			location: "Countryname"
// 			 		}, function(data, status) {
// 			 			$("#loadedData").html(data);
// 			 			alert(status);
// 			 		});
// 			 	});
// 			 });