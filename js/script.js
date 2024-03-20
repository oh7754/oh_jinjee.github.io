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

        


        $(window).on('scroll', function() {
            var isVisible = checkVisible($('#sub_con_1 h1'));
            // $("#Anchovy").css("top", isVisible ? "-40%" : "0%");
            $("#Anchovy , .subcon_title").css("opacity", isVisible ? "0%" : "100%");
            $("#Anchovy , .subcon_title").css("pointer-events", isVisible ? "none" : "all");
            $("#sub_con_1 spline-viewer").css("opacity", isVisible ? "100%" : "0%");
            $("#sub_con_1 spline-viewer").css("pointer-events", isVisible ? "all" : "none");
        });
        
        var isVisible = false;

        function checkVisible(elm, eval) {
            eval = eval || "object visible";
        
            var viewportHeight = $(window).height(); // Viewport Height
            var scrolltop = $(window).scrollTop(); // Scroll Top
            var y = $(elm).offset().top; // Element Top Position
            var elementHeight = $(elm).height(); // Element Height
        
            console.log("Element Top Position:", y);
        
            if (eval === "object visible") {
                return (y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight));
            } else if (eval === "above") {
                return (y < (viewportHeight + scrolltop));
            }
        }
        
        
        
    }
);