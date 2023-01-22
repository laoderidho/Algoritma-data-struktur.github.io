
const params = [3,4,4,3,1,7,9];

const quiqsort = el =>{
    

    for(let i=0; i<el.length; i++){
        let pivot = el[2];
        for(let j=0; j<el.length; j++){
          if(pivot < el[j]){
            pivot+= [el[j]]
          }
          return pivot
        }
    }
}

console.log(quiqsort(params))