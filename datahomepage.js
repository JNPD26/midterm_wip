const allTurtle = [
    {
        name: "Black-knobbed map turtle",
        price: "3500",
        img: '<img src="../img/Black knob.jpg" width="460px" height="260px" class="card-img-top">',
    },
    {
        name: "Diamondback terrapins",
        price: "8000",
        img: '<img src="img/Diamond-black.jpg" width="460px" height="260px" class="card-img-top">',
    },
    {
        name: "Black pond turtle",
        price: "1200",
        img: '<img src="/img/Hamilton.jpg" width="460px" height="260px" class="card-img-top">',
    },
    {
        name: "Leopard tortoise",
        price: "1500",
        img: '<img src="/img/Leopard.jpg" width="460px" height="260px" class="card-img-top">',
    },
];

const containerAllproduct = document.getElementById("container");
const clickBoxSearch = document.getElementById("inputBoxSearch");

function showAllTurtle() {
    const card = allTurtle.map((i) => {
        return (
            "<div class=card style=width: 40rem; background-color: aqua; >" +
            "<div class=card-body>" +
            i.img+
            "<h5 class=card-title>" +
            i.name +
            "</h5>" +
            "<a href='allproduct.html' class=button_see_more>" +
            "See More" +
            "</a>" +
            "</div>" +
            "</div>"
        );
    });
    containerAllproduct.innerHTML = card;
}

showAllTurtle(allTurtle);