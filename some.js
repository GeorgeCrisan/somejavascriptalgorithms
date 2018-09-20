
//is balanced
let brackets = {
    '(':')',
    '{':'}',
    '[':']'
};




function isBalanced (thestring) {
    let tstring = thestring.split('');

    let testarr= [];

    for(let i = 0; i < thestring.length; i++){

        brackets[testarr[testarr.length-1]] === tstring[i] ? testarr.pop() : testarr.push(tstring[i]); 

    }    
    return !testarr.length;
 }

////////////// Permutations
function permAlone(str) {
 
    let repeat = /(.)\1/g;
  
    let permutations = [] , temp;
  
  
    let arr = str.split('');
  
    function swap(index1,index2){
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
   }
  
    if(str.match(repeat) !== null && str.match(repeat)[0] === str)
      return 0;
     // start the heap algorithm
      function generate(int){
           if (int === 1)
              permutations.push(arr.join(''));
           else {
               for(let i = 0; i != int; i++){  
                   generate(int-1);
                   swap(int % 2 ? 0 : i, int-1);
               }
           }   
  
      }
     // end of heap algorith
     generate(arr.length);
  
    permutations =  permutations.filter((el)=>{
           return !el.match(repeat);
    });
  
  return permutations.length; 
  }
   
  permAlone('aab');
  
  permAlone("abfdefa");
  permAlone("a");
  
  
  
  
  
  
  ////////////////////////Symetric difference 
      
  function diff(arr1, arr2) {
           let result = [];
  
       arr1.filter(function (v) {
        if(!~arr2.indexOf(v) && !~result.indexOf(v))
             result.push(v);
      });
  
      arr2.filter((el)=>{
            if(!~arr1.indexOf(el) && !~result.indexOf(el)){
              result.push(el);
            }
      });
    
      return result;
    }
  
  
  function sym(args) {
   let arg = [...arguments];
   let fres = diff(arg.shift(),arg.shift());
     
     while(arg.length > 0){
        fres = diff(fres,arg.shift());
     }
    
    console.log(fres);
     return fres;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);
  
   // insertion sort
  function insertionSort(array) {
    // change code below this line
       for(let i = 0; i < array.length; i++){
           let key = array[i];
           let j = i -1;
      
      while(j >= 0 && array[j] > key){
            array[j+1] = array[j];
        j--;
      }
      console.log(array[j+1],'aici i j +1',array[i],'aici ii array');
  
      array[j+1] = key;
  
       }
  
    // change code above this line
    return array;
  }
  
   // quick sort
  function quickSort(array) {
    // change code below this line
      
      if(array <= 1)
        return array; 
        else {
            let blankArr =[];
            let half = parseInt(Math.floor(array.length /2));
            let pivot = array.splice(half,1);
            let left = [];
            let right = [];
            
            for(let i = 0; i < array.length; i++){
                   array[i] <= pivot ? left.push(array[i]) : right.push(array[i]);
            }
  
            return blankArr.concat(quickSort(left),pivot,quickSort(right));
  
         console.log(pivot,left,right);
    // change code above this line
        }
    return array;
  }
  
   // merge sort
  function merge(left, right) {
      var array = [];
    
      while(left.length > 0 && right.length > 0) {
    
        array.push (left[0] < right[0] ?  left.shift() :  right.shift());
        
      }
      
      return array.concat(left.length ? left : right);
    }
    
    
    function mergeSort(array) {
      if(array.length < 2) {
        return array;
      }
    
      let middle = Math.floor(array.length / 2), left = array.slice(0, middle), right = array.slice(middle);
    
      return merge(mergeSort(left), mergeSort(right));
    }
  
  

  
  /// largest prime factor
  function largestPrimeFactor(number) {
  
    let target = number;
  
    let i = 2;
  
    while (i < target) {
  
      while (target % i === 0) {
  
        ((nwt) => { target = nwt })(target / i);
  
      }
      
      i++;
    }
  
    return target;
  }
  
  ///100 doors
  function getFinalOpenedDoors (numDoors) {
    // Good luck!
    return range(1, 100)
          .filter(function (x) {
              return integerFactors(x)
                  .length % 2;
          });
   
      function integerFactors(n) {
          var rRoot = Math.sqrt(n),
              intRoot = Math.floor(rRoot),
   
              lows = range(1, intRoot)
              .filter(function (x) {
                  return (n % x) === 0;
              });
   
          // for perfect squares, we can drop the head of the 'highs' list
          return lows.concat(lows.map(function (x) {
                  return n / x;
              })
              .reverse()
              .slice((rRoot === intRoot) | 0));
      }
   
      // range(intFrom, intTo, optional intStep)
      // Int -> Int -> Maybe Int -> [Int]
      function range(m, n, delta) {
          var d = delta || 1,
              blnUp = n > m,
              lng = Math.floor((blnUp ? n - m : m - n) / d) + 1,
              a = Array(lng),
              i = lng;
   
          if (blnUp)
              while (i--) a[i] = (d * i) + m;
          else
              while (i--) a[i] = m - (d * i);
   
          return a;
      }
   
  }