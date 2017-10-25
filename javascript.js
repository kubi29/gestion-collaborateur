$(document).ready(function() {
    $("#tIdentity").click(function() {
                
                $("#identity").show();
                $("#poste").hide();
                $("#cb").hide();
            });
            $("#tPoste").click(function() {
                
                $("#identity").hide();
                $("#poste").show();
                $("#cb").hide();
            });
            $("#tCb").click(function() {
                
                $("#identity").hide();
                $("#poste").hide();
                $("#cb").show();
            });
            $("#identity").hide();
                $("#poste").hide();
                $("#cb").hide();
        });


