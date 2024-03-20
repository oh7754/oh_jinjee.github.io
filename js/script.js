$(document).ready(
    function() {
        $("#Anchovy").mousedown(
            function(){
            $("h1").css("font-weight", "100"); 
            }
        );
        $("#Anchovy").mouseup(
            function(){
            $("h1").css("font-weight", "700"); 
            }
        );
    }    
    
);
// $().mousedown