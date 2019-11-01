var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]

function even(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length > 0) {
      const target = stack.pop();
      if (Array.isArray(target)) {
        stack.push(...target);
      } else {
        result.unshift(target);
      }
    }
    return result;
  }

  
 console.log(even(arr))