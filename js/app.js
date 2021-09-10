function changeBarColor() {
    let bar = document.getElementById("black-shirt-bar");
    if (bar.style.backgroundColor == "rgb(34, 134, 201)") {
        bar.style.backgroundColor = "orange";
    }
    else {
        bar.style.backgroundColor = "rgb(34, 134, 201)";
    }

    console.log(`Changing bar color to ${bar.style.backgroundColor}`);
}