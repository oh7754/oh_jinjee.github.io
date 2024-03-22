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

});


    // console.log(document.querySelector("h1"));
    // function scrollToElement() {
    //     var subCon1 = document.querySelector('#sub_con_1 h2');
    //     var subCon1Rect = subCon1.getBoundingClientRect();
    //     var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    //     if (subCon1Rect.top >= 0 && subCon1Rect.bottom <= viewportHeight) {
    //         // 요소가 뷰포트에 있는 경우 실행할 코드
    //         // console.log('#sub_con_1 is now visible');
    //         document.querySelectorAll("#Anchovy , .subcon_title").forEach(function(element) {
    //             element.style.opacity = "0%";
    //             element.style.pointerEvents = "none";
    //         });
    //         document.getElementById("canvas3d-1").style.opacity = "100%";
    //         document.getElementById("canvas3d-1").style.pointerEvents = "all";
    //         document.querySelector("#sub_con_1 h2").style.fontSize = "2em";
    //     } else {
    //         // 요소가 뷰포트에 없는 경우 실행할 코드
    //         document.querySelectorAll("#Anchovy , .subcon_title").forEach(function(element) {
    //             element.style.opacity = "100%";
    //             element.style.pointerEvents = "all";
    //         });
    //         document.getElementById("canvas3d-1").style.opacity = "0%";
    //         document.getElementById("canvas3d-1").style.pointerEvents = "none";
    //         document.querySelector("#sub_con_1 h2").style.fontSize = "2em";
    //     }

    //     if (document.getElementById("close").offsetTop + document.getElementById("close").offsetHeight <= window.scrollY + window.innerHeight) {
    //         // #close가 뷰포트에 보일 때 실행할 코드
    //         // console.log('#close is visible');
            // document.querySelectorAll("#Anchovy , .subcon_title").forEach(function(element) {
            //     element.style.opacity = "0%";
            //     element.style.pointerEvents = "none";
            // });
    //         document.getElementById("canvas3d-1").style.opacity = "0%";
    //         document.getElementById("canvas3d-1").style.pointerEvents = "none";
    //         document.querySelector("#sub_con_1 h2").style.fontSize = "3em";
    //     }
    // }

    // // 초기 로드 시와 스크롤 시 동작 실행
    // scrollToElement();
    // window.addEventListener('scroll', scrollToElement);

    // // 뷰포트 크기 변경 시 재계산을 위해 이벤트 리스너 추가
    // window.addEventListener("resize", function() {
    //     var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    //     var targetElementOffsetTop = document.getElementById('sub_con_1').offsetTop;
    //     var scrollAmountNeeded = targetElementOffsetTop - viewportHeight;
    // });




// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("Anchovy").addEventListener("mousedown", function() {
//         document.querySelector("h1").style.fontWeight = "100";
//     });

//     document.getElementById("Anchovy").addEventListener("mouseup", function() {
//         document.querySelector("h1").style.fontWeight = "700";
//     });

//     function scrollToElement() {
//         var subCon1 = document.querySelector('#sub_con_1 h2');
//         var subCon1Rect = subCon1.getBoundingClientRect();
//         var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

//         if (subCon1Rect.top >= 0 && subCon1Rect.bottom <= viewportHeight) {
//             // 요소가 뷰포트에 있는 경우 실행할 코드
//             // console.log('#sub_con_1 is now visible');
//             document.querySelectorAll("#Anchovy , .subcon_title").forEach(function(element) {
//                 element.style.opacity = "0%";
//                 element.style.pointerEvents = "none";
//             });
//             document.getElementById("canvas3d-1").style.opacity = "100%";
//             document.getElementById("canvas3d-1").style.pointerEvents = "all";
//             document.querySelector("#sub_con_1 h2").style.fontSize = "2em";
//         } else {
//             // 요소가 뷰포트에 없는 경우 실행할 코드
//             document.querySelectorAll("#Anchovy , .subcon_title").forEach(function(element) {
//                 element.style.opacity = "100%";
//                 element.style.pointerEvents = "all";
//             });
//             document.getElementById("canvas3d-1").style.opacity = "0%";
//             document.getElementById("canvas3d-1").style.pointerEvents = "none";
//             document.querySelector("#sub_con_1 h2").style.fontSize = "2em";
//         }

//         if (document.getElementById("close").offsetTop + document.getElementById("close").offsetHeight <= window.scrollY + window.innerHeight) {
//             // #close가 뷰포트에 보일 때 실행할 코드
//             // console.log('#close is visible');
//             document.querySelectorAll("#Anchovy , .subcon_title").forEach(function(element) {
//                 element.style.opacity = "0%";
//                 element.style.pointerEvents = "none";
//             });
//             document.getElementById("canvas3d-1").style.opacity = "0%";
//             document.getElementById("canvas3d-1").style.pointerEvents = "none";
//             document.querySelector("#sub_con_1 h2").style.fontSize = "3em";
//         }
//     }

//     // 초기 로드 시와 스크롤 시 동작 실행
//     scrollToElement();
//     window.addEventListener('scroll', scrollToElement);

//     // 뷰포트 크기 변경 시 재계산을 위해 이벤트 리스너 추가
//     window.addEventListener("resize", function() {
//         var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//         var targetElementOffsetTop = document.getElementById('sub_con_1').offsetTop;
//         var scrollAmountNeeded = targetElementOffsetTop - viewportHeight;
//     });

