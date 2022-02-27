const tabs = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".content_description");
const openTab = document.querySelector("[data-open]");

function tabsNavigation() {
  const hiddenAllContents = () => {
    contents.forEach((section) => section.classList.add("display_off"));
  };

  const removeAllActiveClass = () => {
    tabs.forEach((removeActiveTabs) => {
      removeActiveTabs.className =
        removeActiveTabs.className.replace("active_tab");
    });
  };

  const showCurrentTab = (id) => {
    const content = document.querySelector("#" + id);
    hiddenAllContents();
    removeAllActiveClass();
    content.classList.remove("display_off");
    content.classList.add("animate__bounceInDown");
  };
  const selectTab = (event) => {
    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);
    target.classList.add("active_tab");
  };

  const openCurrentTabs = () => {
    tabs.forEach((tab) => tab.addEventListener("click", selectTab));
  };

  const startApplication = () => {
    openCurrentTabs();
    openTab.click();
  };

  return startApplication();
}

window.addEventListener("load", () => tabsNavigation());
