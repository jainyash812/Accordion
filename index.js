const accQtns = document.querySelectorAll(".acc-qtn");
const accAns = document.querySelectorAll(".acc-ans");
function toggleAccordion() {
  //console.log(this.nextElementSibling.classList);

  // toggle the classes on the accordion clicked //
  this.classList.toggle("open");
  this.nextElementSibling.classList.toggle("close");

  // Calling the function to hide All Accordion //
  //Except the one which was clicked //
  hideAllAccordionOpened(this.nextElementSibling);
}

function hideAllAccordionOpened(ele) {
  console.log(ele.innerText);
  accAns.forEach((item) => {
    if (item.innerText !== ele.innerText) {
      item.classList.add("close");
      item.previousElementSibling.classList.remove("open");
    }
  });
}

accQtns.forEach((element) => {
  element.addEventListener("click", toggleAccordion);
});
