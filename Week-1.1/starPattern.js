// Print a starry-Pattern
// for function(5), it should print 1, 2, 3, 4, 5 stars in seperate line
// Write this function for n stars.

function StarPattern(n){

  for(var i = 1; i <= n; i++){  
      var starline = "";
   for(var j = 1; j <= i; j++){
        starline = starline + "*";
    }
    console.log(starline);
}
}

// instead of nested for you can define this in a function

StarPattern(15);