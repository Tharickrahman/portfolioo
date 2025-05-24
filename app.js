function openSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.right = "0";
  sideBar.style.opacity = "1";
}
function closeSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.right = "-150%";
  sideBar.style.opacity = "0";
}
