// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr = [];
for(let i = 0 ; i<array.length ; i++){
    const element = array[i]
    let exist= false;
    let count = 1
    for(let j = 0 ; j<array.length ; j++){
        const next_element = array[j]
        if(element ==next_element && i!==j){
            count ++
        }
    }
    if(count ==1){
        arr.push(element)
    }
}
console.log(arr.join(" "));