function getSiblings(elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType !== 1 || sibling === elem) continue;
    siblings.push(sibling);
  }
  return siblings;
}

function handleAccordionToggle() {
  let itemHeaders = document.querySelectorAll(".accordion-item-header");

  for (let itemHeader of itemHeaders) {
    itemHeader.addEventListener("click", function () {
      let _this = this;
      const itemParent = _this.parentNode.closest(".accordion-item");
      const siblingsParents = getSiblings(itemParent);

      _this.classList.toggle("active");

      let itemChildBody = itemParent.querySelector(".accordion-item-body");

      if (itemChildBody.clientHeight > 0) {
        itemChildBody.style.height = `0px`;
      } else {
        itemChildBody.style.height = `${
          itemChildBody.querySelector(".accordion-item-body-content")
            .scrollHeight
        }px`;

        setTimeout(() => {
          itemChildBody.style.height = `${
            itemChildBody.querySelector(".accordion-item-body-content")
              .scrollHeight
          }px`;
        }, 200);
      }

      for (let siblingsParent of siblingsParents) {
        if (siblingsParent.classList.contains("accordion-item")) {
          let itemChildHeader = siblingsParent.querySelector(
            ".accordion-item-header"
          );
          let itemChildSiblingBody = siblingsParent.querySelector(
            ".accordion-item-body"
          );

          if (itemChildHeader.classList.contains("active")) {
            itemChildHeader.classList.remove("active");
          }

          if (itemChildSiblingBody.clientHeight > 0) {
            itemChildSiblingBody.style.height = `0px`;
          }
        }
      }
    });
  }
}

function calcHeightAccordion() {
  let itemBodys = document.querySelectorAll(".accordion-item-body");

  for (let itemBody of itemBodys) {
    if (itemBody.clientHeight > 0) {
      itemBody.style.height = `${
        itemBody.querySelector(".accordion-item-body-content").scrollHeight
      }px`;
    }
  }
}

window.addEventListener("resize", function () {
  calcHeightAccordion();
});

window.onload = () => {
  handleAccordionToggle();
};
