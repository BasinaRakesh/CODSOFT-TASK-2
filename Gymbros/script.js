document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    document.querySelector(".hero button").addEventListener("click", function () {
        scrollToSection("products");
    });
});
