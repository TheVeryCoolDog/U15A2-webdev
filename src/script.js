function HideShow(val) {
    let element;
    switch (val) {
        case "daniel":
            element = document.getElementById('daniel_text');
            break
        case "li":
            element = document.getElementById('li_text');
            break;
        case "rosa":
            element = document.getElementById('rosa_text');
            break;
        default:
            break;
    }
    if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        element.classList.add("d-block");
    } else {
        element.classList.remove("d-block");
        element.classList.add("d-none");
    }
}