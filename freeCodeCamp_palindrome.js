function palindrome(str) {
  strOld = str;

  strNew1 = str.toLowerCase();
  console.log("s1: " + strNew1);
  strNew2 = strNew1.replace(/[\W_]/g, '').toLowerCase().trim();
  console.log("s2: " + strNew2);
  strNew3 = strNew2.split("");
  console.log("s3: " + strNew3);
  //strNew4 = strNew3.sort(function(a, b) {
  //  return b - a;
  //});
  strNew4 = strNew3.reverse();
  console.log("s4: " + strNew4);
  strNew5 = strNew4.join("");
  console.log("s5: " + strNew5);

  
  if (strNew2 === strNew5) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}

palindrome("A man, a plan, a canal. Panama");
