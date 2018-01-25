$(document).ready(function(){

    $("#target").click(function(){

        $.post('https://www.ecopellets.fr/applogin.php',
            { login: $("#username").val(), password: $("#password").val() },
            function(data){
                if(data.auth == "NOK"){
                    $("#resultat").html("<p>"+data.erreur+"</p>");                  
                } else{
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("UniqID", data.UniqID);
                    document.location.href="accueil.html"

                } 
            },
            'json'
        );
    });
});