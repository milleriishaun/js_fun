function rot13(str) { // LBH QVQ VG!
    var code = 0;
    var codeStr = "";
    var newStr = "";
    for (i=0;i<str.length;i++) {
      code = str.charCodeAt(i);
      console.log(code);
      if (code != 32 && code != 33 && code != 63 && code != 46) {
        code += 13;
      }
      
      if (code > 90) {
        code -= 26;
      }
      codeStr = String.fromCharCode(code);
      console.log(codeStr);
      newStr += codeStr;
    }
    return console.log(newStr);
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");



