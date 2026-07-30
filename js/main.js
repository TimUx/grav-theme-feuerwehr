document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger-toggle");
    const menu = document.querySelector(".main-nav .menu");

    if (!burger || !menu) return;

    const setExpanded = (open) => {
        burger.setAttribute("aria-expanded", open ? "true" : "false");
    };

    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = menu.classList.toggle("open");
        setExpanded(open);
    });

    document.querySelectorAll(".submenu-toggle").forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const parentLi = toggle.closest("li");
            parentLi.classList.toggle("open");
            toggle.textContent = parentLi.classList.contains("open") ? "▾" : "▸";
        });
    });

    document.querySelectorAll(".main-nav li:not(.has-submenu) a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.addEventListener("click", (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnBurger = burger.contains(e.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    function closeMenu() {
        menu.classList.remove("open");
        setExpanded(false);
        document.querySelectorAll(".submenu-toggle").forEach(toggle => {
            toggle.textContent = "▸";
        });
        document.querySelectorAll(".main-nav li.open").forEach(li => {
            li.classList.remove("open");
        });
    }
});
