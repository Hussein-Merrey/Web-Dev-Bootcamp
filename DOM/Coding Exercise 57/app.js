const links = document.querySelectorAll("li");
for (let i = 0; i < links.length; i++) {
    if (links[i].classList.contains("highlight")) {
        links[i].classList.remove("highlight");
    }
    else
        links[i].classList.add("highlight");
}