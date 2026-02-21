let cart = ['Pizza','Burger','Coke','Sandwhich'];

function placingOrder(cart,callback) {
  console.log("Talking with Dominos....");
  setTimeout(() => {
    console.log("Order Placed");
    const order = {orderid:223,food:cart,restaurant:"Dominos",location:"Hisar"};
    callback(order);
  }, 2000);
}
function preparingOrder(order,callback) {
  console.log("Order preparation started....");
  setTimeout(() => {
    console.log("Order prepared");
    const foodDetails = {token: 13,restaurant: order.restaurant, location: order.location};
    callback(foodDetails);
  }, 5000);
}
function pickingOrder(foodDetails,callback) {
  console.log("Reach to resaurant for picking order....");
  setTimeout(() => {
    console.log("Order Picked up");
    const dropLocation = foodDetails.location;
    callback(dropLocation);
  }, 3000);
}
function deliverOrder(dropLocation) {
  console.log("Order out for delivery....");
  setTimeout(() => {
    console.log("Order Delivered");
  }, 3000);
}

// placingOrder(cart,preparingOrder);
// preparingOrder(order,pickingOrder);
// pickingOrder(foodDetails,deliverOrder);
// deliverOrder(dropLocation);

placingOrder(cart, (order) => {
    preparingOrder(order, (foodDetails) => {
        pickingOrder(foodDetails, (dropLocation) => {
            deliverOrder(dropLocation);
        });
    });
});

