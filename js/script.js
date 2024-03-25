document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Anchovy").addEventListener("mousedown", function() {
        document.querySelectorAll(".headline").forEach(function(heads) {
            heads.style.fontWeight = "100";
            // heads.classList.add('headline_Pressed');
        });
    });

    document.getElementById("Anchovy").addEventListener("mouseup", function() {
        document.querySelectorAll(".headline").forEach(function(heads) {
            heads.style.fontWeight = "700";
        });
    });

    // // forEach() 함수는 배열의 각 요소를 순회하며 주어진 함수를 호출합니다.
    // 각 요소에 대해 함수를 호출할 때, 해당 요소의 값, 인덱스, 그리고 원본 배열을 인수로 넘겨줍니다. 
    // 주어진 함수는 배열의 크기만큼 반복 실행되며, 배열 요소의 개수에 따라 콜백 함수가 호출되는 횟수가 결정됩니다.
    // >>> 걍 각각 전부 (속성?)값 적용

// 스크롤 인터랙션--------------------------------------------------------------------------

        window.addEventListener("scroll", function() {
            const con2OpenElement = document.querySelector(".con2_open");
            const con2OpenRect = con2OpenElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            const additionalElement = document.getElementById("close");
            const additionalRect = additionalElement.getBoundingClientRect();

            // 태그 변수로 만들어버리기
            const con1Spline = document.getElementById("spline3d-1");
            const con2Spline = document.getElementById("spline3d-2");
            const con3Spline = document.getElementById("spline3d-3");
            const t_box2 = document.querySelector(".t_box2");
            const open = document.querySelector(".con2_open");

            if (con2OpenRect.top >= 0 && con2OpenRect.bottom <= viewportHeight) {
                // .con2_open 요소가 뷰포트에 보일 때 실행할 코드
                console.log(".con2_open is now visible");

                [con1Spline, t_box2].forEach(function(el) {
                    el.style.opacity = "0%";
                    el.style.pointerEvents = "none";
                });

                [con2Spline, open].forEach(function(el) {
                    el.style.opacity = "100%";
                    el.style.pointerEvents = "all";
                });
            } else {

                [con1Spline, t_box2, open].forEach(function(el) {
                    el.style.opacity = "100%";
                    el.style.pointerEvents = "all";
                });

                [con2Spline].forEach(function(el) {
                    el.style.opacity = "0%";
                    el.style.pointerEvents = "none";
                });

            };

            if (additionalRect.top >= 0 && additionalRect.bottom <= viewportHeight) {
                    console.log("close is now visible");

                    [con2Spline, t_box2, open].forEach(function(el) {
                        el.style.opacity = "0%";
                        el.style.pointerEvents = "none";
                    });
                    [con3Spline].forEach(function(el) {
                        el.style.opacity = "100%";
                        el.style.pointerEvents = "all";
                    });
            } else {
                [con3Spline].forEach(function(el) {
                    el.style.opacity = "0%";
                    el.style.pointerEvents = "none";
                });
            }

        });


// 닫기--------------------------------------------------------------------------------------------
});



