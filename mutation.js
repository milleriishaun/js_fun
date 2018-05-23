function mutation(arr) {
  console.log(arr);
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  var deepFalse = false;
  var arr1 = arr[0].split("");
  var arr2 = arr[1].split("");
  var value = "";

  for (i=0;i<arr1.length;i++) {
    for (j=0;j<arr2.length;j++) {
      if (arr2[j] === arr1[i]) {
      } else {
        value = arr2[j];
        if (arr1.indexOf(value) == -1) {
          deepFalse = true;
          return console.log(false);
        } else {
          deepFalse = false;
        }
      }
    }
  }
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  if (arr[0].indexOf(arr[1]) !== -1) {
    return console.log(true);
  } else {
    return console.log(true);
  }
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);

