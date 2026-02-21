const restaurant = [];
const images = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
const rest_names = [
  "Spice Route",
  "Delhi Darbar",
  "Masala House",
  "Royal Tandoor",
  "Curry Leaf",
  "Urban Tadka",
  "Flavours of India",
  "Punjabi Zaika",
  "The Mughal Kitchen",
  "Tandoori Nights",
  "Saffron Grill",
  "Desi Bites",
  "Spice Junction",
  "Kebab Kingdom",
  "Rasoi Express",
  "The Curry Club",
  "Bombay Bistro",
  "Street Zaika",
  "Heritage Haveli",
  "Taste of Punjab"
];

const foodTypes = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Mughlai",
  "Punjabi",
  "Continental",
  "Fast Food",
  "Street Food",
  "Biryani",
  "Kebab",
  "Seafood",
  "Cafe",
  "Bakery",
  "Desserts",
  "Healthy Food",
  "Vegan",
  "Fusion"
];

const locations = [
  "Connaught Place",
  "Karol Bagh",
  "Chandni Chowk",
  "South Extension",
  "Greater Kailash",
  "Hauz Khas",
  "Saket",
  "Lajpat Nagar",
  "Rajouri Garden",
  "Punjabi Bagh",
  "Pitampura",
  "Rohini",
  "Dwarka",
  "Vasant Kunj",
  "Janakpuri",
  "Mayur Vihar",
  "Preet Vihar",
  "Kalkaji",
  "Malviya Nagar",
  "Civil Lines"
];

for(let i=0;i<100;i++){
    const obj={};
    obj['image'] = images[Math.floor(Math.random()*images.length)];
    obj['name'] = rest_names[Math.floor(Math.random()*rest_names.length)];
    obj['rating'] = (Math.random()*4+1).toFixed(1);
    obj['food_type'] = foodTypes[Math.floor(Math.random()*foodTypes.length)];
    obj['price_for_two'] = Math.floor(Math.random()*2401+100);
    obj['location'] = locations[Math.floor(Math.random()*locations.length)];
    obj['distance'] = (Math.random()*10+1).toFixed(1);
    obj['offers'] = Math.floor(Math.random()*30);
    obj['alcohol'] = Math.random() >0.7;
    obj['rest_opening_time'] = Math.floor(Math.random()*24);
    obj['rest_closing_time'] = (obj['rest_opening_time']+12)%24;

    restaurant.push(obj);
}

console.log(restaurant);

// Node creates the file in the current working directory (where you ran node),NOT necessarily where the JS file is located.
const fs = require("fs");
fs.writeFileSync("C:\\Users\\ankit\\Web Development\\JavaScript\\Day32\\zomato\\restaurants.json", JSON.stringify(restaurant,null,2));


