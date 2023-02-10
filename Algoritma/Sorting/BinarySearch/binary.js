const binarySearh = (arr, target)=>{
    let awal = 0;
    let akhir = arr.length - 1
    while(awal <= akhir){
        let middle = Math.floor((awal + akhir) /2) 
        if(arr[middle] === target){
            return `ini di temukan di indeks ${middle} dengan isi ${arr[middle]}`
        }
        else if(arr[middle] < target){
             awal = middle + 1
        }else{
             akhir = middle - 1
        }
    }
}




