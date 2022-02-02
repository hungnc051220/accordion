const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".accordion__content");

  if (item.classList.contains("accordion-open")) {
    item.classList.remove("accordion-open");
    accordionContent.removeAttribute("style");
  } else {
    item.classList.add("accordion-open");
    accordionContent.style.height = accordionContent.scrollHeight + "px";
  }
};
