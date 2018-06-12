let buttons = document.querySelectorAll(".buttons button");
let article = document.querySelector("article");
const topics = {
    recycle: {
        title: "Recycle",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat rhoncus erat, nec pellentesque neque imperdiet vitae. Cras consequat orci nisl, eu porttitor neque blandit a. Proin vehicula lacus vitae nibh blandit sollicitudin. Proin justo lectus, elementum a elementum a, tincidunt ac arcu. Morbi dolor ante, aliquet dignissim leo vel, aliquam vulputate dui. Vestibulum hendrerit iaculis quam. Morbi posuere enim ac eros tempus, non luctus justo pulvinar. Nam semper eleifend justo, sit amet suscipit felis pretium eu. In hac habitasse platea dictumst.",
        image: "./img/img-1.png"
    },
    energy: {
        title: "Green Energy",
        body: "Vivamus porttitor id tellus in vulputate. Nullam congue rhoncus finibus. Nam ut nisl ultricies, sollicitudin nunc eu, feugiat lectus. Curabitur a lectus turpis. Curabitur sollicitudin feugiat leo, ut dictum eros efficitur et. Nam a laoreet eros, quis cursus diam. Etiam dolor ligula, iaculis non cursus vel, pretium sit amet nibh. Aliquam in risus pellentesque, sagittis dui at, maximus felis. Quisque mollis risus sed massa pharetra, quis pretium tortor ultrices. Ut at nunc eget leo convallis commodo at eleifend felis. Vestibulum non pharetra urna.",
        image: "./img/img-2.png"
    },
    nature: {
        title: "See the Nature Grow",
        body: "Nunc quis ultrices nisl. Nunc rhoncus venenatis purus, ut faucibus metus semper in. Aliquam erat volutpat. Nam sed nunc elit. Ut sed elit quis felis dignissim pretium nec non tortor. Phasellus nec tincidunt augue, non faucibus metus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non aliquam neque. Sed tempor fringilla justo vitae vestibulum.",
        image: "./img/img-3.png"
    }
};

// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.png",
        "./img/img-2.png",
        "./img/img-3.png"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);



function loadContent(ev) {
    let clickedBtn = ev.target;
    let key = clickedBtn.getAttribute("data-content");

    article.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = topics[key].title;
    article.appendChild(h2);

    let img = document.createElement("img");
    img.src = topics[key].image;
    article.appendChild(img);

    let p = document.createElement("p");
    p.textContent = topics[key].body;
    article.appendChild(p);

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("class")) {
            buttons[i].removeAttribute("class");
        }
    }
    clickedBtn.setAttribute("class", "active");

}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadContent);
}
