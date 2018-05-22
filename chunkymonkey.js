// findLongestWord("The quick brown fox jumped over the lazy dog");
/* var arr3 = [];
function chunkArrayInGroups(arr, size) {
    // Break it up.
    for (i=0;i<arr.length/size;i++) {
      var arr2 = [];
      arr3;
      for (j=0; j<arr.length; j++) {
        arr2 = arr.slice(j, j+size);
        if (j%2 == 0) {
            arr3[i] = arr3.push(arr2[count1+i]);
        }
        console.log(arr2);
      }
      
    }
    
    return console.log(arr3);
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr2 = [];
    for (var i=0; i<arr.length; i+=size) {
      arr2.push(arr.slice(i, i+size));
    }
    return arr2;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// chunkArrayInGroups(["a", "b", "c", "d"], 2);