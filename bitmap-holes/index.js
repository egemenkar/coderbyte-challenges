function BitmapHoles(strArr) {
  let counter = 0;
  
  // Creates grid matrix
  let grid = [];
  for (let i = 0; i < strArr.length; i++) {
    grid.push(strArr[i].split(""));
  }
  
  // Depth First Search function. Looks for contiguous 0's up, down, left, right. Visited 0's turn to 1. 
  const dfs = (i, j) => {
    if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === "0") {
      grid[i][j] = "1";

      dfs(i + 1, j); // down
      dfs(i, j + 1); // right
      dfs(i - 1, j); // up
      dfs(i, j - 1); // left
      
    }
  };

  // Checks the contiguous region of 0's and counts.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if( grid[i][j] === "0") {
        counter++;
        dfs(i, j);
      }
    }
  }

  return counter;

}

// Sample String Arrays inputs to check outputs.
let sampleArr = ["10111", "10101", "11101", "11111"];
let sampleArr2 = ["1011", "0010"];
let sampleArr3 = ["01111", "01101", "00011", "11110"]

console.log(BitmapHoles(sampleArr3))