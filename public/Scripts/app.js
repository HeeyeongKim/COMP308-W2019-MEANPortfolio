/*
 COMP308-W2019-Assignment2 (MEANPortfolio)
 Student Name: Heeyeong Kim
 Student Number: 300954759
 Date: 03/30/2019
*/

// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log(`%c App Started...`,
            "font-size: 20px; color: blue; font-weight: bold");

        $(".btn-danger").click(function (event) {
            if (!confirm("Are you sure???")) {
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });
    }
    window.addEventListener("load", Start);
})();
