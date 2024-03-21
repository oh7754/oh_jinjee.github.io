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
        $(window).scroll(function() {
            var subCon1 = $('#sub_con_1 h2')[0];
            var subCon1Rect = subCon1.getBoundingClientRect();
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        
            if (subCon1Rect.top >= 0 && subCon1Rect.bottom <= viewportHeight) {
                // 요소가 뷰포트에 있는 경우 실행할 코드
                console.log('#sub_con_1 is now visible');
                $("#Anchovy , .subcon_title").css("opacity", "0%");
                $("#Anchovy , .subcon_title").css("pointer-events", "none");
                $("#canvas3d-1").css("opacity", "100%");
                $("#canvas3d-1").css("pointer-events", "all");
                $("#sub_con_1 h2").css("font-size", "2em");
            } else {
                // 요소가 뷰포트에 없는 경우 실행할 코드
                $("#Anchovy , .subcon_title").css("opacity", "100%");
                $("#Anchovy , .subcon_title").css("pointer-events", "all");
                $("#canvas3d-1").css("opacity", "0%");
                $("#canvas3d-1").css("pointer-events", "none");
                $("#sub_con_1 h2").css("font-size", "2em");
            }

            if ($('#close').offset().top + $('#close').outerHeight() <= $(window).scrollTop() + $(window).height()) {
                // #close가 뷰포트에 보일 때 실행할 코드
                console.log('#close is visible');
                $("#Anchovy , .subcon_title").css("opacity", "0%");
                $("#canvas3d-1").css("opacity", "0%");
                $("#canvas3d-1").css("pointer-events", "none");
                $("#Anchovy , .subcon_title").css("pointer-events", "none");
                $("#sub_con_1 h2").css("font-size", "3em");
            }

            // 초기 로드 시와 스크롤 시 동작 실행
            scrollToElement();
            $(window).on('scroll', scrollToElement);

            // 뷰포트 크기 변경 시 재계산을 위해 이벤트 리스너 추가
            $(window).resize(function() {
                viewportHeight = $(window).height();
                scrollAmountNeeded = targetElementOffsetTop - viewportHeight;
                scrollToElement();
            });

        });
    }
);
// document.addEventListener("DOMContentLoaded", function() {
//     var anchovy = document.getElementById("Anchovy");
//     var subCon1Header = document.querySelector("#sub_con_1 h2");
//     var close = document.getElementById("close");
//     var canvas3d1 = document.getElementById("canvas3d-1");

//     anchovy.addEventListener("mousedown", function() {
//         document.querySelectorAll("h1").forEach(function(elem) {
//             elem.style.fontWeight = "100";
//         });
//     });

//     anchovy.addEventListener("mouseup", function() {
//         document.querySelectorAll("h1").forEach(function(elem) {
//             elem.style.fontWeight = "700";
//         });
//     });

//     function handleScroll() {
//         var subCon1Rect = subCon1Header.getBoundingClientRect();
//         var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

//         var isSubCon1Visible = subCon1Rect.top >= 0 && subCon1Rect.bottom <= viewportHeight;
//         var isCloseVisible = close.offsetTop + close.offsetHeight <= window.scrollY + viewportHeight;

//         // #sub_con_1 요소에 따른 CSS 스타일 적용
//         document.querySelectorAll("#Anchovy, .subcon_title").forEach(function(elem) {
//             elem.style.opacity = isSubCon1Visible ? "0" : "100";
//             elem.style.pointerEvents = isSubCon1Visible ? "none" : "all";
//         });
//         canvas3d1.style.opacity = isSubCon1Visible ? "100" : "0";
//         canvas3d1.style.pointerEvents = isSubCon1Visible ? "all" : "none";
//         subCon1Header.style.fontSize = isSubCon1Visible ? "2em" : "2em";

//         // #close 요소에 따른 CSS 스타일 적용
//         document.querySelectorAll("#Anchovy, .subcon_title").forEach(function(elem) {
//             elem.style.opacity = isCloseVisible ? "0" : "100";
//             elem.style.pointerEvents = isCloseVisible ? "none" : "all";
//         });
//         canvas3d1.style.opacity = isCloseVisible ? "0" : "100";
//         canvas3d1.style.pointerEvents = isCloseVisible ? "none" : "all";
//         subCon1Header.style.fontSize = isCloseVisible ? "3em" : "2em";
//     }

//     window.addEventListener("scroll", handleScroll);
// });
