function binarySearch(a, target) {
  let first = 0;
  let last = a.length - 1;

  while(first <= last) {
    mid = Math.floor((first + last) / 2);
    if(a[mid] === target)
      return mid;
    else if(a[mid] < target) {
      first = mid + 1;
    }
    else {
      last = mid - 1;
    } 
  }
  return 'Not present';
}

let arr = [1, 3, 5, 5, 5, 7, 9];

function count(a, pos) {
  let flag = 1;
  for(let i = pos - 1; i > 0; i--) {
    if(a[i] !== a[pos])
      break;
    else 
      flag++; 
  }
  for (let i = pos + 1; i < a.length; i++) {
    if (a[i] !== a[pos])
      break;
    else
      flag++;
  }
  return flag;
}

console.log(count(arr, binarySearch(arr, 5)));