// Use this matrix for solution

let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

let sum_dd = matrix[0][0]+matrix[1][1]+matrix[2][2]+matrix[3][3]
let sum_td = matrix[0][3]+matrix[1][2]+matrix[2][1]+matrix[3][0]
console.log(sum_dd,sum_td);

