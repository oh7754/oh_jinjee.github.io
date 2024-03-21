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

        // // 요소까지의 초기 거리 계산
        // var targetElementOffsetTop = $('#sub_con_1 h1').offset().top;
        // var viewportHeight = $(window).height();
        // var scrollAmountNeeded = targetElementOffsetTop - viewportHeight;

        // // 스크롤 이벤트를 대체하는 함수
        // function scrollToElement() {
        //     // 'scrollAmountNeeded' 이상 스크롤 했는지 체크
        //     if ($(window).scrollTop() >= scrollAmountNeeded) {
        //         // 요소가 뷰포트 내에 들어왔을 때 실행할 코드
        //         console.log('#sub_con_1 is now visible');
        //         $("#Anchovy , .subcon_title").css("opacity", "0%");
        //         $("#Anchovy , .subcon_title").css("pointer-events", "none");
        //         $("#canvas3d-1").css("opacity", "100%");
        //         $("#canvas3d-1").css("pointer-events", "all");
        //         $("#sub_con_1 h1").css("font-size", "2em");
        //     } else {
        //         // 요소가 아직 뷰포트에 도달하지 않았을 때 실행할 코드
        //         $("#Anchovy , .subcon_title").css("opacity", "100%");
        //         $("#Anchovy , .subcon_title").css("pointer-events", "all");
        //         $("#canvas3d-1").css("opacity", "0%");
        //         $("#canvas3d-1").css("pointer-events", "none");
        //         $("#sub_con_1 h1").css("font-size", "2em");
        //     }

        //     // #close 요소가 뷰포트에 보일 때 실행
        //     if ($('#close').offset().top + $('#close').outerHeight() <= $(window).scrollTop() + $(window).height()) {
        //         // #close가 뷰포트에 보일 때 실행할 코드
        //         console.log('#close is visible');
        //         $("#Anchovy , .subcon_title").css("opacity", "0%");
        //         $("#canvas3d-1").css("opacity", "0%");
        //         $("#canvas3d-1").css("pointer-events", "none");
        //         $("#Anchovy , .subcon_title").css("pointer-events", "none");
        //         $("#sub_con_1 h1").css("font-size", "3em");
        //     }
            
        // }

        // // 초기 로드 시와 스크롤 시 동작 실행
        // scrollToElement();
        // $(window).on('scroll', scrollToElement);

        // // 뷰포트 크기 변경 시 재계산을 위해 이벤트 리스너 추가
        // $(window).resize(function() {
        //     viewportHeight = $(window).height();
        //     scrollAmountNeeded = targetElementOffsetTop - viewportHeight;
        //     scrollToElement();
        // });

    }
);
