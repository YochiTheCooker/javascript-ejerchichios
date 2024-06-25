function getbyIdx (arr, idx) {
    if (idx < 0 ||arr.length <= idx) {
        return 'Elemento no existente';
    }
        
    return arr[idx]; 
}
let resultado = getbyIdx([1, 2, 3, 4], 1);
console.log(resultado);
