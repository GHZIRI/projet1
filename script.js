let cod = ["c1", "c1", "c3", "c9", "c8", "c7", "c7", "c5", "c2", "c9", "c3"]
let computors = {};
for(let i = 0; i<cod.length; i++) {
    let code=cod[i]
    if(computors[code] == undefined){
        computors[code] = 1;
    } else {
        computors[code]++;  
    }
}
console.log(computors)