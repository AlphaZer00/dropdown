const dropDownBtn = document.querySelector(".dropdown-btn");
const dropDownItems = document.querySelectorAll(".dropdown-item");
let isOpen = false;

dropDownItems.forEach((item) => {
    item.style.visibility = "hidden";
});

dropDownBtn.addEventListener("click", () => {
    if (!isOpen) {
        dropDownItems.forEach((item) => {
            item.style.visibility = "visible";
        });
        isOpen = true;
    } else if (isOpen) {
        dropDownItems.forEach((item) => {
            item.style.visibility = "hidden";
        });
        isOpen = false;
    }
});
