let pairs = [
    [1,{ name:"otue"}],
    [2,{ name:"gigi"}],
    [3,{ name:"epineli"}],
]; 

let array = [{
    id: 1,
    name: "otue"
},
{
    id: 2,
    name: "gigi"
},
{
    id: 3,
    name: "epineli"
}];

function toCollection(arr){
    let collection = [];
    for (idx in arr) {
        let elemento =  arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento [0];
    }
    return collection
}  

let resultado = toCollection(pairs);
console.log(resultado)