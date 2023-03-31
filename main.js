function handleAccordion() {
  let accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  for (let accordionItemHeader of accordionItemHeaders) {
    accordionItemHeader.addEventListener("click", function (e) {
      let accordionItemHeaderActive = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        accordionItemHeaderActive &&
        accordionItemHeaderActive !== accordionItemHeader
      ) {
        accordionItemHeaderActive.classList.toggle("active");
        accordionItemHeaderActive.nextElementSibling.style.maxHeight = 0;
      }

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
