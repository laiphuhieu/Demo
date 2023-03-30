function handleAccordion() {
  let accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  for (let accordionItemHeader of accordionItemHeaders) {
    accordionItemHeader.addEventListener("click", function (e) {
      accordionItemHeader.classList.toggle("active");

      let accordionItemBody = accordionItemHeader.nextElementSibling;
      console.log(accordionItemBody);
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  }
}

window.onload = () => {
  handleAccordion();
};
