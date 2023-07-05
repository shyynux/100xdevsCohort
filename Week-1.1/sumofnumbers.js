function sumxtoy(x, y){
    var sum = 0;
    for(var i = x; i <= y; i++){
        sum += i;
    }
    return sum;
}

console.log(sumxtoy(3, 5));