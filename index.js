function receivesAFunction(spy) {
    spy();
  }

  function returnsANamedFunction() {
    return function cookingRice() {
        return cookingRice;
    } 
  };

//   function returnsAnAnonymousFunction("") {
//     return () => returnsAnAnonymousFunction;
//   }

function returnsAnAnonymousFunction(){
    return () => AnAnonymousFunction;
}
