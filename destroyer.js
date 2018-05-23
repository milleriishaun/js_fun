function destroyer(arr) {
    // Remove all the values
    var originalLength = arr.length;
    for (i=0;i<arguments.length;i++) {
      for (j=0;j<arr.length;j++) {
        for (k=0;k<originalLength;k++) {
          if (arguments[i] == arr[j]) {
            index = arr.indexOf(arguments[i]);
            if (index > -1) {
              arr.splice(index, 1);
            }
          }
        }
      }
    }
    return console.log(arr);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);
  destroyer([2, 3, 2, 3], 2, 3);
  destroyer(["tree", "hamburger", 53], "tree", 53);
