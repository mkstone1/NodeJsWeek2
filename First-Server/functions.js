
//Possible because of hoisting

console.log(random(1,50));

function random (min, max){
    return Math.floor(Math.random() * (max-min + 1) - min);
}


const randomAnonymousFunction = function thisNameDoesNotMatter (min, max){
    return Math.floor(Math.random() * (max-min + 1) - min);
}; 
console.log(randomAnonymousFunction(1,20))

const randomArrowFunction = (min,max)=> {
    return Math.floor(Math.random() * (max-min + 1) - min);
}

console.log(randomArrowFunction(1,20))

const randomArrowFunctionCompact = (min,max) => Math.floor(Math.random() * (max-min + 1) - min);

console.log(randomArrowFunctionCompact(1,20))


function genericActionPerformer(genericAction, genericName) {
    //do stuff...

    return genericAction(genericName)
}

const subtract = (name) => `${name} is subtracting`;

const walk = (name) => `${name} is walking`;

console.log(genericActionPerformer(subtract, "Mark Midtgaard Stone"));
console.log(genericActionPerformer(walk, "Mark Midtgaard Stone"));

const read = () => console.log(genericActionPerformer( (name) => `${name} is reading`, "Mark"));
read()


