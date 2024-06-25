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
},]

let pares = [
    [1,{ id:1, name:"otue"}],
    [2,{ id:2, name:"gigi"}],
    [3,{ id:3, name:"epineli"}],
];

function toPairs(arr){
    let pairs = [];
    for (idx in arr) {
        let elemento =  arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs
}

let resultado = toPairs(array);
console.log(resultado)