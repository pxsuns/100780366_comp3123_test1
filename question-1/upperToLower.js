/*
                                                  QUESTION:

        Create a script with a function named lowerCaseWords that takes a mixed array as input.
        The function will do the following.
                             return a promise that is resolved or rejected
                             filter the non-strings and lower case the remaining words
        
        Mahamed-Rahim Hassan - 100780366

*/

// arrow function
const lowerCaseWords = (mixedArray) => {


    // return a promise
    return new Promise((resolve, reject) => {


      // check if mixedArray is a valid
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {

        // filter out non-string
        const filteredArrayStr = mixedArray.filter((eachElement) => typeof eachElement === "string");

        // use map method then toLowerCase will convert string to lowercase
        const lowerCaseArray = filteredArrayStr.map((eachElement) =>
          eachElement.toLowerCase()
        );
  
        // resolve 
        resolve(lowerCaseArray);
      } else {
        // reject with message
        reject("Invalid");
      }
    });
  };
  
  // define the mixedArray
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  

  lowerCaseWords(mixedArray)
    .then((value) =>

      // print resolved promise
      console.log(value)

    )
    .catch((error) =>

      // prints rejected promise
      console.log(error)

    );
  