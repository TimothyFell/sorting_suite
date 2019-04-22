// first solution - creates a new array to add and sort each element from original array. time is O(n^2) and memory is 2n.
// function insertionSort(a) {
//   // return original array if length = 0 or 1
//   if (a.length === 1 || a.length === 0){
//     return a;
//   }
//   var sa = [];
//   var current_index = 0;
//   while (current_index < a.length) {
//     if (sa.length === 0) {
//       sa.push(a[current_index])
//     } else if (a[current_index] > sa[sa.length - 1]) {
//       sa.push(a[current_index]);
//     } else {
//       sa_length = sa.length
//       for (var i = 0; i < sa_length;) {
//         if (a[current_index] < sa[i] || a[current_index] === sa[i]) {
//            sa.splice(i, 0, a[current_index])
//            i = sa_length
//         } else {
//           i++
//         }
//       }
//     }
//     current_index++
//   }
//   return sa
// }

// second solution - doesnt create a new array. time is O(n^2) and memory is 1n.
function insertionSort(a) {
  if (a.length === 1 || a.length === 0){
      return a;
  }
  for (var i = 0; i < a.length; i++) {
    var current_e = a[i]
    var index = i
    while (index > 0 && current_e < a[index - 1]) {
      a[index] = a[index - 1]
      index = index - 1
    }
    a[index] = current_e
  }
  return a
}


module.exports = insertionSort
