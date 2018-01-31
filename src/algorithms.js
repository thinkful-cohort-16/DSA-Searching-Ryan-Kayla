'use strict';

let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

const linearSearch = (arr, input) => {
  let ticks = 0;
  for (let i=0; i < arr.length; i++) {
    ticks++;
    // console.log('arr[i]', arr[i]);
    if (arr[i] == input) {
      return `Item found and it took ${ticks} ticks`;
    } 
  }
  return `Item not found and it took ${ticks} ticks`;
};

console.log(linearSearch(data, 999));

arr = arr.sort();

const binarySearch = (arr, input, start, end) => {

  let start = start === undefined ? 0 : start;
  let end = end === undefined ? array.length : end;

  if (start > end){
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }

}