let button = document.getElementById('button-test');
button.addEventListener('click', isAnagram);
let resultDiv = document.getElementById('result');

function isAnagram() {
  let str1 = document.getElementById('string1').value;
  let str2 = document.getElementById('string2').value;
  if (str1 !== null && str2 !== null) {
    if (str1.length !== str2.length) {
      resultDiv.innerHTML = "Strings aren't anagrams!";
      return false;
    }
    let hashTable = {};
    for (let i = 0; i < str1.length; i++) {
      if (hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
      } else {
        hashTable[str1[i]] = 1;
      }
    }

    for (let i = 0; i < str2.length; i++) {
      if (hashTable.hasOwnProperty(str2[i])) {
        hashTable[str2[i]] = hashTable[str2[i]] - 1;
      } else {
        resultDiv.innerHTML = "Strings aren't anagrams!";
        return false;
      }
    }

    for (let i in hashTable) {
      if (hashTable[i] !== 0) {
        resultDiv.innerHTML = "Strings aren't anagrams!";
        return false;
      } else {
        resultDiv.innerHTML = "True! Strings are anagrams!";
      }
    }
  }
}