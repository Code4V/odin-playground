const Navigation = (items = [], selected = "") => {
  const navigation = document.createElement("nav");
  navigation.setAttribute("class", "navigation");

  const navigationItems = document.createElement("ul");
  navigationItems.setAttribute("class", "navigation__items");

  items.forEach((element, index) => {
    const item = document.createElement("li");
    item.setAttribute("class", "navigation__items-item");

    if (
      (selected == "" && index === 0) ||
      selected.toUpperCase() === element.toUpperCase()
    )
      item.setAttribute("class", "navigation__items-item active");

    item.textContent = element;
    navigationItems.appendChild(item);
  });

  if (items) {
    navigationItems.childNodes.forEach((element) => {
      element.addEventListener("click", () => {
        element.parentElement.childNodes.forEach((child) => {
          if (child.classList.contains("active"))
            child.setAttribute("class", "navigation__items-item");
        });

        element.classList.add("active");
      });
    });
  }

  navigation.appendChild(navigationItems);

  return navigation;
};

export default Navigation;
