// toSorted polyfill (ordenamiento de un  array sin mutabilidad)
Array.prototype.toSorted = function(){
    return this.slice().sort()
}

// toReverses polyfill (Inversion de array sin  mutabilidad)
Array.prototype.toReversed = function(){
    return this.slice().reverse()
}

// Cambio de valor en un array sun mutabilidad
Array.prototype.with = function(value, pos){
    return [
        ...this.slice(0, pos),
        value,
        ...this.slice(pos + 1)
    ]
}

// toSpliced polyfill (splice or recorte de un array sin mutabilidad)
Array.prototype.toSpliced = function(start, deleteCount, ...items){
    const array = this.slice()
    array.splice(start, deleteCount, ...items)
    return array;
}