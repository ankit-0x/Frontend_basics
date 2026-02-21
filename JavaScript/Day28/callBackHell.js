function placingOrder(callback) {
  console.log("Talking with Dominos....");
  setTimeout(() => {
    console.log("Order Placed");
    callback();
  }, 2000);
}
function preparingOrder(callback) {
  console.log("Order preparation started....");
  setTimeout(() => {
    console.log("Order prepared");
    callback();
  }, 5000);
}
function pickingOrder(callback) {
  console.log("Reach to resaurant for picking order....");
  setTimeout(() => {
    console.log("Order Picked up");
    callback();
  }, 3000);
}
function deliverOrder() {
  console.log("Order out for delivery....");
  setTimeout(() => {
    console.log("Order Delivered");
  }, 3000);
}

// placingOrder(preparingOrder);

placingOrder(()=>{
    preparingOrder(()=>{
        pickingOrder(()=>{
            deliverOrder();
        });
    });
});
