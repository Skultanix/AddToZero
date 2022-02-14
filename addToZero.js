// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let blueberry = false

for(muffin = 0; muffin < array.length; muffin++) {
    if(array[muffin] + 0 === 0 || array[muffin] + array[0] === 0 || array[muffin] + array[1] === 0 ||
         array[muffin] + array[2] === 0 || array[muffin] + array[3] === 0 || array[muffin] + array[4] === 0 ||
         array[muffin] + array[5] === 0 || array[muffin] + array[6] === 0) {
        blueberry = true
        console.log(`${blueberry}`);
    } else {
        blueberry = false
        console.log(`${blueberry}`)
    }}

    //Didn't work so well 

    //for(pancake = 0; pancake < array.length; pancake++)
  //  for(muffin = 0; muffin < array.length; muffin++) {
    //    if(array[muffin] + 0 === 0 || array[muffin] + array[pancake] === 0) {
      //      blueberry = true
        //    console.log(`${blueberry}`);
        //} else {
         //   blueberry = false
       //     console.log(`${blueberry}`)
        //}}
    