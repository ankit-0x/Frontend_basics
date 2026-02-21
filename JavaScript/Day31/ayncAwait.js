let cart = ["Pizza", "Burger", "Coke", "Sandwhich"];

function placingOrder(cart) {
  console.log("Talking with Dominos....");
  const food_available = true;
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (food_available) {
        console.log("Order Placed Successfully");
        const order = {
          orderid: 223,
          food: cart,
          restaurant: "Dominos",
          location: "Hisar",
        };
        resolve(order);
      } else {
        reject("Items out of stock");
      }
    }, 2000);
  });
  return pr;
}
function preparingOrder(order) {
  console.log("Order preparation started....");
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Order prepared");
      const foodDetails = {
        token: 13,
        restaurant: order.restaurant,
        location: order.location,
      };
      resolve(foodDetails);
    }, 5000);
  });
  return pr;
}
function pickingOrder(foodDetails) {
  console.log("Reach to resaurant for picking order....");
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Order Picked up");
      const dropLocation = foodDetails.location;
      resolve(dropLocation);
    }, 3000);
  });
  return pr;
}

function deliverOrder(dropLocation) {
  console.log("Order out for delivery....");
  setTimeout(() => {
    console.log("Order Delivered");
  }, 3000);
}

// async function greet(){
//     const order = await placingOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const  dropLocation = await pickingOrder(foodDetails);
//     deliverOrder(dropLocation);
// }

// with error handling
async function greet(){
    try{
    const order = await placingOrder(cart);
    const foodDetails = await preparingOrder(order);
    const  dropLocation = await pickingOrder(foodDetails);
    deliverOrder(dropLocation);
    }
    catch(error){
        console.log(error);
    }
}

greet();