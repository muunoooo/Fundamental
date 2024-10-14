const fruits: string[] = ["banana", "apple", "jackfruit", "apple"];

const newFruits = new Set(fruits);

newFruits.add("melon");
newFruits.delete("banana");
// newFruits.clear()
// console.log(newFruits.entries())
// console.log(newFruits.values())

newFruits.forEach((item) => {
  console.log("buah " + item);
});

console.log(newFruits.has("apple"));

console.log(newFruits);

