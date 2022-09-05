// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]
let count =0;
let new_array = []
 
for(let i=0; i<array.length-1; i++){
    const element = array[i]
    let exist = false;

    for(let j=array+1; j<array.length; j++){
        const element_second = array[j]
        if(element == element_second){
           exist = true;
           break;
        }
    }
    if(exist === false){
        new_array.push(element)
        count++
    }
}
console.log(count);