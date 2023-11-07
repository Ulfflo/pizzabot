const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

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

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else if (orderQuantity >= 6) {
    return 20;
  }
}

function submitOrder() {
  const pizzaType = document.getElementById("pizzaType").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!checkOrderName(pizzaType)) {
    document.getElementById("response").innerHTML =
      "<p>Sorry, we don't have that on the menu.</p>";
  } else {
    

    const orderTotal = totalCost(quantity);
    const time = cookingTime(quantity);

    const response = `Great, I'll get started on your ${pizzaType} right away. It will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`;

    document.getElementById("response").innerHTML = `<p>${response}</p>`;
  }
}
