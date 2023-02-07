
// for(i=0; i<5; i++){
//     for(j=0; j<5; j++){
//         console.log(i, j)
//     }
// }

const arr = [1,2,3,4,5,6,7,8,9,10]

for(i=0; i<arr.length; i++){
    for(j=0; j<arr.length -i -1; j++){
        console.log(i,j)
    }
}