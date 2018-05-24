function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a,b){return a-b;});
    var val = 0;

    for (i=0;i<arr.length;i++) {
      if (arr[i]<num && arr[i+1]>num) {
        val = i+1;
      } else if(arr[i]==num) {
        val = i;
      } else if(arr[i]<num && arr[i+1]==undefined) {
        val = i+1;
      }
    }
    return console.log(val);
  }
/*   function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }
  
    return arr.length;
  } */
  getIndexToIns([10, 20, 30, 40, 50], 35);
  getIndexToIns([10, 20, 30, 40, 50], 30);
  getIndexToIns([40, 60], 50);
  getIndexToIns([3, 10, 5], 3);
  getIndexToIns([5, 3, 20, 3], 5);
  getIndexToIns([2, 20, 10], 19);
  getIndexToIns([2, 5, 10], 15);





