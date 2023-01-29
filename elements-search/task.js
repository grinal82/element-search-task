const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach((item) => {
    const link = item.querySelector(".menu__link");
    const subMenu = item.querySelector(".menu_sub");

    link.addEventListener("click", (e) => {
        e.preventDefault();

        if (!subMenu) {
            window.location.href = link.getAttribute("href");
            return;
        }

        item.classList.toggle("menu__item_active");
        subMenu.classList.toggle("menu_active");
    });
});
