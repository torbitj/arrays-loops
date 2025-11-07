const zoo = ["Panda", "Lion", "Elk"];

zoo.push("Bunny", "Flamingo");

console.log(zoo);

zoo.unshift("Alligator", "Elephant");

console.log(zoo);

zoo.pop();

console.log(zoo);

zoo.shift();

console.log(zoo);

for (let i = 0; i < zoo.length; i++) {
  console.log(zoo[i]);
}