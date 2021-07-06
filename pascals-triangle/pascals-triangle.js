/**
 * @param {number} numRows number <= 30
 * @return {number[][]} nested array, each inner array containing the values of a row
 C: none
 E: only one row should return [[1]]
 
 Strategy - inner recursion
 Create result array, prepopulated with 1st row
 create row number tracker, start @ 2
 
 while current row is not numRows
   Create row array
   iterate through last row in result (start at 0, proceed until length - 2)
     push i + next to row
   push and unshift a 1 into row array
   push row array into result array
   increment row number tracker
 
 return result array
 */
var generate = function(numRows) {
    let result = numRows > 1 ? [[1],[1,1]] : [[1]];
    let currentRow = 3;
    
    while (currentRow <= numRows) {
        let newRow = [];
        let lastRow = result[result.length - 1];
        for (let i = 0; i < lastRow.length - 1; i++) {
            let newNum = lastRow[i] + lastRow[i + 1];
            newRow.push(newNum);
        }
        newRow.unshift(1);
        newRow.push(1);
        result.push(newRow);
        currentRow++;
    }
    
    return result;
};