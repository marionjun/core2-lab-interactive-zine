//cake

let cakeImage = document.querySelector(".cake");

let dessertOne = document.querySelector(".dessert-one");

dessertOne.addEventListener('mouseover', function() {
    cakeImage.classList.add("show");
})

dessertOne.addEventListener('mouseout', function() {
    cakeImage.classList.remove("show");
})

//icecream

let icecreamImage = document.querySelector(".icecream");

let dessertTwo = document.querySelector(".dessert-two");

dessertTwo.addEventListener('mouseover', function() {
    icecreamImage.classList.add("show");
})

dessertTwo.addEventListener('mouseout', function() {
    icecreamImage.classList.remove("show");
})

//pie

let pieImage = document.querySelector(".pie");

let dessertThree = document.querySelector(".dessert-three");

dessertThree.addEventListener('mouseover', function() {
    pieImage.classList.add("show");
})

dessertThree.addEventListener('mouseout', function() {
    pieImage.classList.remove("show");
})

//cupcake

let cupcakeImage = document.querySelector(".cupcake");

let dessertFour = document.querySelector(".dessert-four");

dessertFour.addEventListener('mouseover', function() {
    cupcakeImage.classList.add("show");
})

dessertFour.addEventListener('mouseout', function() {
    cupcakeImage.classList.remove("show");
})