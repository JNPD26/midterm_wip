const allTurtle = [
  {
    name: "xxxxxx",
    price: "3500",
  },
  {
    name: "Diamondback terrapins",
    price: "8000",
  },
];

const containerAllproduct = document.getElementById("container");
console.log(containerAllproduct, "ccc");
const clickBoxSearch = document.getElementById("inputBoxSearch");

clickBoxSearch.onclick = function () {
  inputBoxSearch();
  showSelectTurtle(allTurtle);
};

function inputBoxSearch() {
//   document.getElementById("input-box").value;
  //   showTurtle(allTurtle);xs
}

function showSelectTurtle(all) {
  const card = all.map((i) => {
    return (
      "<div class=card-body>" +
      "<h5 class=card-title>" +
      i.name +
      "</h5>" +
      "<a href=# class=button_see_more>" +
      "See More" +
      "</a>" +
      "</div>"
    );
  });
  console.log(card);
  containerAllproduct.innerHTML = card;
}
function showAllTurtle() {
  const card = allTurtle.map((i) => {
    return (
      "<div class=card style=width: 20rem; background-color: aqua; >" +
      "<div class=card-body>" +
      "<h5 class=card-title>" +
      i.name +
      "</h5>" +
      "<a href=# class=button_see_more>" +
      "See More" +
      "</a>" +
      "</div>" +
      "</div>"
    );
  });
  containerAllproduct.innerHTML = card;
}

showAllTurtle(allTurtle);
