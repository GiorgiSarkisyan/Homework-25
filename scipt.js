
for (let i = 0; i < 100; i++) {
  console.log(i)
}
let i = 0;

while ( i < 50) {
  console.log(i++)
}
let names = ["john", "clark", "jennifer", "spiderman", "batman"]
names.push("Giorgi", "Giorgi")
names.pop()
names.unshift("Giorgi", "Giorgi")
names.shift()
console.log(names)
let computers = [1,2,3,4,5]
let sum = 0;
for (let index = 0; index < computers.length; index++) {
  sum += computers[index];
}
console.log(sum)
let methodnumber = 10;
if (methodnumber % 2 === 0) {
  console.log(true)
}
else{
  console.log(false)
}
let blabla = "MY NAME IS JOHN"
if (blabla = blabla.toUpperCase){
  blabla.toLowerCase
}

const words = [1,2,3,4,5,6,7,8,9,10];
const result = words.filter(word => word % 2 === 0);

console.log(result);