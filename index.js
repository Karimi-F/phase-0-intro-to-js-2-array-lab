//const { beforeEach } = require("mocha");

// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
destructivelyRemoveFirstCat();

function appendCat(name) {
  const copyOfCats = [...cats];
  copyOfCats.push(name);
  return copyOfCats;
}
appendCat("Broom");

function prependCat(name) {
  const copyOfCats = [...cats];
  copyOfCats.unshift(name);
  return copyOfCats;
}
prependCat("Arnold");

function removeLastCat(name) {
  name = cats.slice(0, 2);
  return name;
}

function removeFirstCat(name) {
  name = cats.slice(1);
  return name;
}
