function findLongestWord(str) {
  var array1 = str.split(" ");
  for (i = 0; i < array1.length; i++) {
    for (j = 1; j < array1.length; j++) {
      if (array1[j].length>array1[j-1].length) {
        longWord = array1[j];
        console.log(j + " : " + longWord + " : " + longWord.length);
      }
    }
  }
  return console.log(longWord.length);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
