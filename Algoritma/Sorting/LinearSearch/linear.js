//Contoh Linear Search 

const linear = (el, target)=>{
    for(let i=0; i<el.length; i++){
        if(el[i] ==target){
            return `Ini di temukan di Indeks ke ${i} dengan data ${el[i]}`
        }
        
    }
    return `Ini tidak di temukan`
}

const arr = [1,2,4,13,4,2]

console.log(linear(arr, 13))