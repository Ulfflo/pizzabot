const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);

let orderName = prompt("Enter the name of the pizza you want to order today.");

function checkOrderName(orderName) {
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}
if (!checkOrderName(orderName)) {
  alert("Sorry, we don't have that on the menu.");
} else {
let orderQuantity = prompt(`How many of ${orderName} do you want?`);
orderQuantity = parseInt(orderQuantity);

function totalCost(orderQuantity) {
  let orderTotal = pizzaPrice * orderQuantity;
  return orderTotal;
}

let orderTotal = totalCost(orderQuantity);



function cookingTime(orderQuantity) {
if (orderQuantity >= 1 && orderQuantity <= 2) {
  return 10;
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  return 15;
} else if (orderQuantity >= 6) {
  return 20;
}
}
let time = cookingTime(orderQuantity);

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`
);
}
