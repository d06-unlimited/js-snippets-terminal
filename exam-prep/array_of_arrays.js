
const processArray = (arr) => {

  // check if there is an array in the array ???
  if(Array.isArray( arr[0]) ) {
    arr = arr[0]    
  }

  // forEach => andere Technik der For Loop
  arr.forEach(item => {
    console.log("Item:", item)
  })

}


processArray([1,2,4])
processArray([[1,2,4]])
