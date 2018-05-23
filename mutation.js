function mutation(arr) {
  arr[0].toLowerCase();
  arr[1].toLowerCase();
  
  var check = false;
  var deepFalse = false;
  var arr1 = arr[0].split("");
  var arr2 = arr[1].split("");
  var value = "";
  
  for (i=0;i<arr1.length;i++) {
    for (j=0;j<arr2.length;j++) {
      if (arr2[j] === arr1[i]) {
        console.log(arr2[j])
      } else {
        value = arr2[j];
        if (arr1.indexOf(value)) {
          deepFalse = true;
          console.log("deepFalse");
        }
      }
    }
  }
  
  arr[0] = arr1.join("");
  arr[1] = arr2.join("");

  check = true;

  if (arr[0].indexOf(arr[1]) && check == true) {
    if (deepFalse == false) { //annoyed that if change this
      //different results
      return console.log(true);
    } else {
      return console.log(false);
    }
  } else {
    return console.log(false);
  }
}

mutation(["hello", "hey"]);