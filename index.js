function wakeDog(name, breed) {
    const result = `Wake ${name} the ${breed}`;
    console.log(result);
    return result;
}
function leashDog(name, breed) {
    const result = `Leash ${name} the ${breed}`;
    console.log(result);
    return result;
}
function walkToPark(name, breed) {
    const result = `Walk to the park with ${name} the ${breed}`;
    console.log(result);
    return result;
}
function throwFrisbee(name, breed) {
    const result = `Throw the frisbee for ${name} the ${breed}`;
    console.log(result);
    return result;
}
function walkHome(name, breed) {
    const result = `Walk home with ${name} the ${breed}`;
    console.log(result);
    return result;
}
function unleashDog(name, breed) {
    const result = `Unleash ${name} the ${breed}`;
    console.log(result);
    return result;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(name, breed){
    let vals = [];
    for(let i = 0; i < routine.length; i++){
      vals.push(routine[i](name, breed));
    }
    return vals;
}

