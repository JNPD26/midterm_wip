const turtleIncart = [
    {
        name: "Black-knobbed map turtle",
        img: '<img src="../img/Black knob.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-10%",
        price: "฿3,150",
    },
    {
        name: "Diamondback terrapins",
        img: '<img src="img/Diamond-black.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-5%",
        price: "฿7,200",
    },
    {
        name: "Black pond turtle",
        img: '<img src="/img/Hamilton.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-10%",
        price: "฿1,080",
    },
    {
        name: "Mississippi map turtle",
        img: '<img src="/img/Missisippi.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-15%",
        price: "฿1,275",
    },
    {
        name: "Nicaraguan slider",
        img: '<img src="/img/Peacock.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-5%",
        price: "฿855",
    },
    {
        name: "Pig-nosed turtle",
        img: '<img src="img/Pig-nose.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-5%",
        price: "฿2,375",
    },
    {
        name: "Northern red-bellied cooter",
        img: '<img src="/img/Red-Bellied Side-Necked.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-10%",
        price: "฿855",
    },
    {
        name: "Rio Grande cooter",
        img: '<img src="/img/Riogrand.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-10%",
        price: "฿1,080",
    },
    {
        name: "Chinese pond turtle",
        img: '<img src="/img/Reeves.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-5%",
        price: "฿475",
    },
    {
        name: "Yellow-spotted Amazon river turtle",
        img: '<img src="img/Yellow-spot.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-10%",
        price: "฿1,620",
    },
    {
        name: "Sulcata tortoise",
        img: '<img src="/img/Sulcata.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-15%",
        price: "฿1,275",
    },
    {
        name: "Leopard tortoise",
        img: '<img src="/img/Leopard.jpg" class="img-fluid rounded thumbnail-image">',
        discount: "-10%",
        price: "฿4,050",
    },
];

const clickBuy = document.getElementById("btnTocart btnBuyTocart");

clickBuy.onclick = function(){
    addtocart(a)
}

var cart =[];

function addtocart(a){
    cart.push({...turtleIncart[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "฿ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "฿ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}