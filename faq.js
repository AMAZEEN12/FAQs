
function faqToggle(element) {
    var questionElement = element.querySelector("img");
var answerElement = element.nextElementSibling;


    if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
        questionElement.src = "icon-minus.svg";
    } else {
        answerElement.style.display = "none";
        questionElement.src = "icon-plus.svg";
    }
}

