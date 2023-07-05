// A fibonacci series is The Fibonacci series is 
// a sequence of numbers in which each number is the 
// sum of the two preceding numbers. It starts with 0 and 1,
//  and each subsequent number is obtained by adding the two numbers immediately before it.
// F(n) = F(n-1) + F(n-2)

function f(n){
    if(n == 0)
        return 0;
    
    if(n == 1)
        return 1;
    
    return f(n-1) + f(n-2);
}

console.log(f(2));
console.log(f(3));
console.log(f(4));
console.log(f(5));
