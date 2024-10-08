// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    const newCats = [
        ...cats.slice(0),
        name,
    ]

    return newCats;
}

function prependCat(name){
    const newCats = [
        name,
        ...cats.slice(0),
    ]

    return newCats;
}

function removeLastCat(name){
    const newCats = [
        ...cats.slice(0,-1),
    ]

    return newCats;
}

function removeFirstCat(name){
    const newCats = [
        ...cats.slice(1),
    ]

    return newCats;
}

