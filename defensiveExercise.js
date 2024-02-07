function letterFinder(word, match) {
  const condition1 = typeof word === "string" && word.length >= 2;
  const condition2 = typeof match === "string" && match.length == 1;
  if (condition2 == true && condition1 == true) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

letterFinder(["cat"], ["c"]); //Please pass correct arguments to the function.
letterFinder("cat", "c"); // Found the c at 0
