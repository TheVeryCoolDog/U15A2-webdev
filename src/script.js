function HideShow(val) {
    let element = document.getElementById(val);

    if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        element.classList.add("d-block");
    } else {
        element.classList.remove("d-block");
        element.classList.add("d-none");
    }
}