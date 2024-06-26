document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#Anchovy").addEventListener("mousedown", function() {
        document.querySelectorAll(".headline").forEach(function(heads) {
            heads.style.fontWeight = "100";
            // heads.classList.add('headline_Pressed');
        });
    });

    document.querySelector("#Anchovy").addEventListener("mouseup", function() {
        document.querySelectorAll(".headline").forEach(function(heads) {
            heads.style.fontWeight = "700";
        });
    });

    // // forEach() 함수는 배열의 각 요소를 순회하며 주어진 함수를 호출합니다.
    // 각 요소에 대해 함수를 호출할 때, 해당 요소의 값, 인덱스, 그리고 원본 배열을 인수로 넘겨줍니다. 
    // 주어진 함수는 배열의 크기만큼 반복 실행되며, 배열 요소의 개수에 따라 콜백 함수가 호출되는 횟수가 결정됩니다.
    // >>> 걍 각각 전부 (속성?)값 적용

// 스크롤 인터랙션--------------------------------------------------------------------------

// *******************************************
// * 내일은 이거 변수말고 클레스인 버전 하나더 만들어보기 *
// *******************************************

        window.addEventListener("scroll", function() {
            const con2OpenElement = document.querySelector(".con2_open");
            const con2OpenRect = con2OpenElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            const additionalElement = document.querySelector(".close");
            const additionalRect = additionalElement.getBoundingClientRect();

            const BoxElement = document.querySelector(".box");
            const BoxRect = BoxElement.getBoundingClientRect();

            // 태그 변수로 만들어버리기----
            const con1Spline = document.querySelector("#spline3d-1");
            const con2Spline = document.querySelector("#spline3d-2");
            const con3Spline = document.querySelector("#spline3d-3");
            const t_box2 = document.querySelector(".t_box2");
            const open = document.querySelector(".con2_open");
            const con4 = document.querySelector(".con4");

            // 스타일 한방에 바꾸기----
            const AnchoVi = { opacity : "100%" , pointerEvents : "all"}
            const AnchoInVi = { opacity : "0%" , pointerEvents : "none"}
            const openVi = { opacity : "100%" , pointerEvents : "none"}

            if (con2OpenRect.top >= 0 && con2OpenRect.bottom <= viewportHeight) {
                // .con2_open 요소가 뷰포트에 보일 때 실행할 코드----
                console.log(".con2_open is now visible");

                [con1Spline, t_box2].forEach(function(el) {
                    Object.assign(el.style, AnchoInVi);
                });

                [con2Spline].forEach(function(el) {
                    Object.assign(el.style, AnchoVi);
                });

                Object.assign(open.style, openVi);

            } else {

                [con1Spline, t_box2].forEach(function(el) {
                    Object.assign(el.style, AnchoVi);
                });

                Object.assign(open.style, openVi);

                Object.assign(con2Spline.style, AnchoInVi);
            };

            if (additionalRect.bottom <= viewportHeight) {
                    console.log("close is now visible");
                    // 여러개 바꿀때--------------
                    [con1Spline, con2Spline, t_box2, open].forEach(function(el) {
                        Object.assign(el.style, AnchoInVi);
                    });
                    // 1개만 바꿀때--------------
                    [con4, con3Spline].forEach(function(el) {
                        Object.assign(el.style, AnchoVi);
                    }); 
                    
            } else {

                [con4, con3Spline].forEach(function(el) {
                    Object.assign(el.style, AnchoInVi);
                }); 
            }

        });
// 닫기--------------------------------------------------------------------------------------------
});
