function findLongestWord(str) {
  var array1 = str.split(" ");
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array1.length; j++) {
      if (array1[i].length<array1[j].length) {
        temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
      }
    }
  }
  return console.log(array1[array1.length-1].length);
}


