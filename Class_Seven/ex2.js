//Closures are functions that remember their lexical environments. 
//Lexical environments mean the environment in which the function was declared.

  //Aim: Fix the code to correctly implement the callback.


  function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
  }
  
  const remember = parent("remembers me");
  // Seems like the variable x would be gone after
  // parent is executed, but it's not.
  
parent(x);
  // Return "remembers me"
console.log(parent);
  
